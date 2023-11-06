import React, { useState } from "react";
import { Download } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import { LoadingButton } from "@mui/lab";
import firebaseConfig from "../../../../configdb/db";
import { getDatabase, ref, set } from "firebase/database";

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const listItemStyle = {
  display: "block", // Set display to block to make the list vertical
  marginBottom: "12px", // Adjust the spacing between list items as needed
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ReportInfoList = ({ reportData, open, handleClose }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Paper>
            <List>
              {reportData ? (
                <ListItem style={listItemStyle}>
                  <ListItemText
                    primary={`Email`}
                    secondary={`${reportData.email}`}
                  />
                  <ListItemText
                    primary={`Subject`}
                    secondary={`${reportData.subject}`}
                  />
                  <hr />
                  <ListItemText
                    primary={`Messages`}
                    secondary={`${reportData.message}`}
                  />
                </ListItem>
              ) : null}
            </List>
          </Paper>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ReportInfoList;
