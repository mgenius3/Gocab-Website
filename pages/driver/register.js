// components/SignUp.js
import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firebaseConfig } from "../../configdb/db";
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FetchApiClient from "../../fetch_api_clients/api";
import LoadingButton from "@mui/lab/LoadingButton";

import {
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";

const SignUp = () => {
  const api = new FetchApiClient("/driver");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const userData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        email: formData.email,
        password: formData.password,
      };
      let { error, response } = await api.post("/register", userData);
      if (error) throw new Error(error);
      else {
        localStorage.setItem("userToken", JSON.stringify(response));
        toast.info("Successfully registered");
        router.push("/driver/dashboard/information");
      }
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
    // const app = initializeApp(firebaseConfig);
    // const db = getDatabase(app);
    // const auth = getAuth(app);

    // createUserWithEmailAndPassword(auth, formData.email, formData.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;

    //     const userData = {
    //       name: formData.name,
    //       phone: formData.phone,
    //       address: formData.address,
    //       email: formData.email,
    //     };
    //     const dbRef = ref(db, "users/" + user.uid);

    //     set(dbRef, userData)
    //       .then(() => {
    //         setLoading(false);
    //         toast.info("Account created successfully");
    //       })
    //       .catch((error) => {
    //         if (error.code === "auth/email-already-in-use") {
    //           toast.error(
    //             "Email address is already in use. Please use a different email."
    //           );
    //         } else {
    //           toast.error("Error storing data in Firebase:", error.message);
    //         }
    //         setLoading(false);
    //       });
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       toast.error(
    //         "Email address is already in use. Please use a different email."
    //       );
    //     } else {
    //       console.error(error.message);
    //       toast.error("Error creating Firebase account:", error.message);
    //     }
    //     setLoading(false);
    //   });
  };

  return (
    <div>
      <Header />
      <Container
        maxWidth="xs"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Paper elevation={3} style={{ padding: "16px", marginTop: "20px" }}>
          <Typography variant="h5" align="center" style={{ margin: "16px" }}>
            Sign Up As A Driver
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  name="address"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  required
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {loading ? (
              <LoadingButton
                loading
                variant="outlined"
                className="my-3 cursor-pointer"
              >
                {" "}
                Sign Up
              </LoadingButton>
            ) : (
              <Button
                type="submit"
                variant="outlined"
                className="my-3 cursor-pointer"
              >
                Sign Up
              </Button>
            )}
          </form>
        </Paper>
        <ToastContainer position="bottom-center" />
      </Container>
      <Footer />
    </div>
  );
};

export default SignUp;
