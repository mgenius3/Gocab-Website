import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MainListItems from "../listItems";
import Head from "next/head";

import { initializeApp } from "firebase/app";

import firebaseConfig from "../../../../configdb/db";

// import storage from "firebase/storage"; // Import your Firebase configuration
import { getDatabase, ref, set, onValue } from "firebase/database";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DriverInfoTable from "./info";
import UploadInformation from "./upload_information";

import {
  Button,
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        gocab
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [driverInfo, setDriverInfo] = React.useState(null);
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  const [user, setUser] = React.useState(true);
  const [token] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userToken");
    }
  });

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const fetchDriverInfo = (uid) => {
    const driversRef = ref(db, `drivers/${uid}`);

    onValue(driversRef, (snapshot) => {
      const data = snapshot.val();

      if (data.information) {
        console.log(data);
        // const driverInfoArray = Object.keys(data).map((key) => ({
        //   id: key,
        //   ...data[key],
        // }));
        console.log(data.information);
        setDriverInfo(data.information);
      } else setDriverInfo("no information");
    });
  };

  React.useEffect(() => {
    try {
      let decoded = jwtDecode(token);
      setUser(decoded);
      fetchDriverInfo(decoded?.uid);
    } catch (err) {
      router.push("https://gocab.vercel.app/driver/login");
    }
  }, [token]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    // <PageAuthentication url="/driver/login">
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>information</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {user?.name} - Dashboard
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {driverInfo && driverInfo !== "no information" ? (
            <DriverInfoTable driverInfo={driverInfo} />
          ) : (
            <UploadInformation user={user} />
          )}
        </Box>
        <ToastContainer position="bottom-center" />
      </Box>
    </ThemeProvider>
    // </PageAuthentication>
  );
}
