import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../configdb/db";
import firebase from "firebase/app";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const uploadFile = async (selectedFile, uid) => {
  const storeRef = ref(
    storage,
    `drivers/${uid ? uid : null}/document/${selectedFile?.name}`
  );

  try {
    await uploadBytes(storeRef, selectedFile);
    const url = await getDownloadURL(storeRef);
    console.log("File download URL:", url);
    return url;
  } catch (error) {
    console.error("Error uploading or getting download URL:", error);
    return null;
  }
};

export default uploadFile;
