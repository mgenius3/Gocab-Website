const fs = require("fs");
const firebaseConfig = require("../configdb/db");
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  query,
  getDocs,
} = require("firebase/firestore");

require("firebase/database");
const { getDatabase, ref, set, get } = require("firebase/database");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const LoginAdmin = async ({ email, password }) => {
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

    if (snapshot.exists()) {
      const userData = snapshot.val();
      if (userData.admin) return { uid: user.uid, ...userData };
      else throw new Error("You are not authorized as an admin");
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

const getAllUsers = async () => {
  try {
    const usersCollection = collection(getFirestore(), "users");
    const usersQuery = query(usersCollection);
    const usersSnapshot = await getDocs(usersQuery);

    const usersArray = [];

    usersSnapshot.forEach((doc) => {
      usersArray.push({
        uid: doc.id,
        ...doc.data(),
      });
    });

    return usersArray;
  } catch (error) {
    throw new Error("Error fetching users' data: " + error.message);
  }
};

const getAllReports = async () => {
  try {
    const dbRef = ref(db, "reports");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const reportsData = snapshot.val();
      const reportsArray = [];

      // Convert the reports' data into an array
      for (const driverId in reportsData) {
        if (reportsData.hasOwnProperty(driverId)) {
          reportsArray.push({
            uid: driverId,
            ...reportsData[driverId],
          });
        }
      }

      return reportsArray;
    } else {
      throw new Error("No drivers found in the database.");
    }
  } catch (error) {
    throw new Error("Error fetching drivers' data: " + error.message);
  }
};

module.exports = {
  LoginAdmin,
  getAllUsers,
  getAllReports,
};
