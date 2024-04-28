import React, { useState } from "react";
import { Download } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import { LoadingButton } from "@mui/lab";
import firebaseConfig from "../../../../configdb/db";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import Link from "next/link";
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
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const OrganisationInfoList = ({ orgData, open, handleClose }) => {
  const [approveloading, setApproveLoading] = useState(false);
  const [declineloading, setDeclineLoading] = useState(false);

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const handleDriverApprovalResponse = async (response) => {
    if (response == "approved") setApproveLoading(true);
    else setDeclineLoading(true);
    const dbRef = ref(db, `organisation/${orgData.uid}/status`);

    try {
      await set(dbRef, `${response}`);
      if (response == "approved") {
        setApproveLoading(false);
        toast.info("Verification status updated to 'approved'");
      } else setDeclineLoading(false);
    } catch (error) {
      if (response == "approved") setApproveLoading(false);
      else setDeclineLoading(false);
      throw new Error("Error updating verification status: " + error.message);
    }
  };

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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {orgData?.name}
            </Typography>
            <List>
              {orgData ? (
                <ListItem style={listItemStyle}>
                  <ListItemText
                    primary={`Business Reg No`}
                    secondary={`${orgData?.bus_reg_no}`}
                  />
                  <ListItemText
                    primary={`Business Model Service`}
                    secondary={`${orgData?.model_service}`}
                  />
                  <ListItemText
                    primary={`Business Email`}
                    secondary={`${orgData?.email}`}
                  />
                  <ListItemText
                    primary={`Business Address`}
                    secondary={`${orgData?.address}`}
                  />
                  <ListItemText
                    primary={`Business Phone Number`}
                    secondary={`${orgData?.phone}`}
                  />
                  <ListItemText className="mb-3">
                    <p>Documents</p>
                    <Link href={orgData?.business_document_url}>
                      <Button variant="outlined">
                        <Download /> View
                      </Button>
                    </Link>
                  </ListItemText>

                  {orgData?.status == "on review" ? (
                    <div className="flex justify-center">
                      {approveloading ? (
                        <LoadingButton
                          variant="outlined"
                          loading
                          style={{
                            textTransform: "none",
                            textTransform: "none",
                            marginRight: "20px",
                          }}
                        >
                          Approve
                        </LoadingButton>
                      ) : (
                        <Button
                          variant="contained"
                          style={{
                            background: "goldenrod",
                            textTransform: "none",
                            marginRight: "20px",
                          }}
                          onClick={() =>
                            handleDriverApprovalResponse("approved")
                          }
                        >
                          Approve
                        </Button>
                      )}

                      {declineloading ? (
                        <LoadingButton
                          variant="outlined"
                          loading
                          style={{
                            textTransform: "none",
                            textTransform: "none",
                          }}
                        >
                          Decline
                        </LoadingButton>
                      ) : (
                        <Button
                          variant="contained"
                          style={{
                            background: "red",
                            textTransform: "none",
                            textTransform: "none",
                          }}
                          onClick={() =>
                            handleDriverApprovalResponse("declined")
                          }
                        >
                          Decline
                        </Button>
                      )}
                    </div>
                  ) : orgData?.status == "approved" ? (
                    <Alert severity="success">Request Approved</Alert>
                  ) : (
                    <Alert severity="error">Request Declined</Alert>
                  )}
                </ListItem>
              ) : null}
            </List>
          </Paper>
          <ToastContainer position="bottom-center" />
        </Box>
      </Fade>
    </Modal>
  );
};

export default OrganisationInfoList;
