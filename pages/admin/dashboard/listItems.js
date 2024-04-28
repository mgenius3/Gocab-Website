import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { Dashboard } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import BarChartIcon from "@mui/icons-material/BarChart";
import Link from "next/link";
import Head from "next/head";
import { ClearLocalStorage } from "../../../helper/helper";
import { Logout } from "@mui/icons-material";
import { route } from "../../../helper/helper";

export default function mainListItems() {
  return (
    <React.Fragment>
      <Head>
        <title>Gocab</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <Link href={`${route}/admin/dashboard`}>
        <ListItemButton>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>

      <Link href={`${route}/admin/dashboard/drivers`}>
        <ListItemButton>
          <ListItemIcon>
            <DriveEtaIcon />
          </ListItemIcon>
          <ListItemText primary="Drivers" />
        </ListItemButton>
      </Link>

      <Link href={`${route}/admin/dashboard/users`}>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      </Link>

      <Link href={`${route}/admin/dashboard/organisation`}>
        <ListItemButton>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Organisation" />
        </ListItemButton>
      </Link>

      <Link href={`${route}/admin/dashboard/reports`}>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </Link>

      <Link href={`${route}/admin/login`}>
        <ListItemButton onClick={() => ClearLocalStorage()}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
}
// export const secondaryListItems = () => (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
