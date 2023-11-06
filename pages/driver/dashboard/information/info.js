import React from "react";
import { Download } from "@mui/icons-material";
import { Button, List, ListItem, ListItemText, Paper } from "@mui/material";
import Alert from "@mui/material/Alert";
import Link from "next/link";

const listItemStyle = {
  display: "block", // Set display to block to make the list vertical
  marginBottom: "12px", // Adjust the spacing between list items as needed
};

const DriverInfoList = ({ driverInfo }) => {
  return (
    <Paper>
      <List>
        {driverInfo ? (
          <ListItem style={listItemStyle}>
            <ListItemText
              primary={`Vehicle Model`}
              secondary={`${driverInfo.v_model}`}
            />
            <ListItemText
              primary={`Vehicle Number`}
              secondary={`${driverInfo.v_number}`}
            />
            <ListItemText
              primary={`Vehicle Colour`}
              secondary={`${driverInfo.v_colour}`}
            />
            <ListItemText
              primary={`Means of Identity`}
              secondary={`${driverInfo.means_of_identity}`}
            />
            <ListItemText
              primary={`Ride Offers: ${driverInfo.offers}`}
              secondary={`${driverInfo.offers}`}
            />
            <ListItemText className="mb-3">
              <p>Documents</p>

              <Link href={driverInfo.documents}>
                <Button variant="outlined">
                  <Download /> View
                </Button>
              </Link>
            </ListItemText>

            {driverInfo.verification_status == "on review" ? (
              <Alert severity="info">
                Your application to become a driver is on review
              </Alert>
            ) : driverInfo.verification_status == "approved" ? (
              <Alert severity="success">
                Your application to be a Gocab Driver has been approved
              </Alert>
            ) : (
              <Alert severity="error">
                Your application to be a Gocab Driver has been declined
              </Alert>
            )}
          </ListItem>
        ) : null}
      </List>
    </Paper>
  );
};

export default DriverInfoList;
