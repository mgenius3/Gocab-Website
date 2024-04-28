// components/SignUp.js
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";
import FetchApiClient from "../../fetch_api_clients/api";
import LoadingButton from "@mui/lab/LoadingButton";
import Head from "next/head";
import Link from "@mui/material/Link";
import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/router";
import InputFileUpload from "../../components/sub_components/inputfileupload";
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
import { Details } from "./details";

const SignUp = () => {
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <Header />
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "16px",
          marginTop: "20px",
        }}
      >
        <Paper elevation={3} style={{ padding: "16px", marginTop: "50px" }}>
          <Details />
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUp;
