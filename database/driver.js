const fs = require("fs");
const firebaseConfig = require("../configdb/db");
const { initializeApp } = require("firebase/app");

require("firebase/database");
const { getDatabase, ref, set, get } = require("firebase/database");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const RegisterDriver = async (data) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;

    const userData = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      email: data.email,
      password: data.password,
      organisation: data.organisation,
    };
    const dbRef = ref(db, "drivers/" + user.uid);

    await set(dbRef, userData);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      throw new Error(
        "Email address is already in use. Please use a different email."
      );
    } else if (error.code === "auth/network-request-failed") {
      throw new Error("No internet connection");
    } else {
      throw new Error("Error storing data in Firebase: " + error.message);
    }
  }
};

const LoginDriver = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // You can fetch additional driver details from the database using the retrieved UID
    const dbRef = ref(db, "drivers/" + user.uid);
    const snapshot = await get(dbRef);

    console.log(user.uid);
    if (snapshot.exists()) {
      const userData = snapshot.val();
      return { uid: user.uid, ...userData };
    } else {
      throw new Error("Driver data not found.");
    }
  } catch (error) {
    if (
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password"
    ) {
      throw new Error("Invalid email or password.");
    } else if (error.code === "auth/network-request-failed") {
      throw new Error("No internet connecdtion");
    } else {
      throw new Error("Error logging in: " + error.message);
    }
  }
};

const getAllDrivers = async () => {
  try {
    const dbRef = ref(db, "drivers");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const driversData = snapshot.val();
      const driversArray = [];

      // Convert the drivers' data into an array
      for (const driverId in driversData) {
        if (driversData.hasOwnProperty(driverId)) {
          driversArray.push({
            uid: driverId,
            ...driversData[driverId],
          });
        }
      }

      return driversArray;
    } else {
      throw new Error("No drivers found in the database.");
    }
  } catch (error) {
    throw new Error("Error fetching drivers' data: " + error.message);
  }
};

module.exports = {
  RegisterDriver,
  LoginDriver,
  getAllDrivers,
};
