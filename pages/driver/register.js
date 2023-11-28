// components/SignUp.js
import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import FetchApiClient from "../../fetch_api_clients/api";
import LoadingButton from "@mui/lab/LoadingButton";
import Head from "next/head";
// import { TextField, InputAdornment, IconButton } from "@material-ui/core";
// import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  InputAdornment,
  IconButton,
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
  const [showPassword, setShowPassword] = useState(false);

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
        router.push("https://gocab.vercel.app/driver/dashboard/information");
      }
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
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
                {/* <TextField
                  label="Password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  required
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                /> */}
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            {loading ? (
              <LoadingButton
                loading
                variant="outlined"
                className="mt-5 mb-3 cursor-pointer"
                style={{ marginTop: "10px", marginBottom: "3px" }}
              >
                {" "}
                Sign Up
              </LoadingButton>
            ) : (
              <Button
                type="submit"
                variant="outlined"
                className="mt-5 mb-3 cursor-pointer"
                style={{ marginTop: "10px", marginBottom: "3px" }}
              >
                Sign Up
              </Button>
            )}

            <Grid container>
              <Grid
                item
                style={{
                  color: "#1976d2",
                  textDecoration: "underline",
                  marginTop: "10px",
                }}
              >
                <Link href="https://google.com" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <ToastContainer position="bottom-center" />
      </Container>
      <Footer />
    </div>
  );
};

export default SignUp;
