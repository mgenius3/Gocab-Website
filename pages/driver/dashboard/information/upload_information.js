import React from "react";
import InputFileUpload from "../../../../components/sub_components/inputfileupload";
import { initializeApp } from "firebase/app";

import firebaseConfig from "../../../../configdb/db";
import firebase from "firebase/app";
import uploadFile from "../../../../helper/file_upload";
// import storage from "firebase/storage"; // Import your Firebase configuration
import { getDatabase, ref, set } from "firebase/database";
import {
  Container,
  FormControl,
  TextField,
  Select,
  InputLabel,
  Button,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UploadInformation({ user }) {
  const [v_model, setVModel] = React.useState("");
  const [v_number, setVNumber] = React.useState("");
  const [v_colour, setVColour] = React.useState("");
  const [means_of_identity, setMeansOfIdentity] = React.useState("");
  const [offers, setRide] = React.useState("Taxi");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileURL, setFileURL] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  console.log(user);
  const dbRef = ref(db, "drivers/" + user?.uid + "/information");

  const handleFileSelect = (e) => {
    // Implement file selection logic here.
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    //upload file to firebase storage
    const url = await uploadFile(selectedFile, user?.uid);

    try {
      if (
        url &&
        v_model &&
        v_number &&
        v_colour &&
        means_of_identity &&
        offers
      ) {
        const formData = {
          v_model,
          v_number,
          v_colour,
          means_of_identity,
          offers,
          documents: url,
          verification_status: "on review",
        };
        set(dbRef, formData)
          .then(() => {
            setLoading(false);
            toast.info("Information submitted successfully");
            router.reload();
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              toast.error(
                "Email address is already in use. Please use a different email."
              );
            } else {
              toast.error("Error storing data in Firebase:", error.message);
            }
            setLoading(false);
          });
      } else {
        throw new Error("please fill all field");
      }
    } catch (err) {
      setLoading(false);

      toast.error(err.message);
    }
  };

  return (
    <Container maxWidth="sm" className="container py-5">
      <h1>Driver Information</h1>
      <form>
        <FormControl variant="outlined" fullWidth className="py-3 mt-2">
          <TextField
            label="Vehicle Model"
            variant="outlined"
            required
            fullWidth
            value={v_model}
            onChange={(e) => setVModel(e.target.value)}
          />
          {/* Implement other form fields in a similar way */}
        </FormControl>

        <FormControl variant="outlined" fullWidth className="py-3 mt-2">
          <InputLabel id="ride-offers-label" className="font-bold">
            Ride Offers
          </InputLabel>
          <Select
            labelId="ride-offers-label"
            id="ride-offers"
            value={offers}
            onChange={(e) => setRide(e.target.value)}
          >
            <MenuItem value="Taxi">Taxi Rider</MenuItem>
            <MenuItem value="Bike">Dispatch Rider</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth className="py-3 mt-2">
          <TextField
            label="Vehicle Number"
            required
            variant="outlined"
            fullWidth
            value={v_number}
            onChange={(e) => setVNumber(e.target.value)}
          />
          {/* Implement other form fields in a similar way */}
        </FormControl>

        <FormControl variant="outlined" fullWidth className="py-3 mt-2">
          <TextField
            label="Vehicle Colour"
            variant="outlined"
            fullWidth
            required
            value={v_colour}
            onChange={(e) => setVColour(e.target.value)}
          />
          {/* Implement other form fields in a similar way */}
        </FormControl>

        <FormControl variant="outlined" fullWidth className="py-3 mt-2">
          <TextField
            label="Means of Identity"
            variant="outlined"
            required
            fullWidth
            value={means_of_identity}
            onChange={(e) => setMeansOfIdentity(e.target.value)}
          />
          {/* Implement other form fields in a similar way */}
        </FormControl>
        <InputFileUpload
          handleFile={handleFileSelect}
          label={"upload document"}
        />
        <br />
        <FormControl variant="outlined">
          <div>{selectedFile ? selectedFile.name : "No file selected"}</div>
        </FormControl>
        <br />
        {loading ? (
          <LoadingButton
            loading
            variant="outlined"
            className="my-3 cursor-pointer"
          >
            {" "}
            SUBMIT
          </LoadingButton>
        ) : (
          <Button
            onClick={() => handleSubmit()}
            color="primary"
            variant="outlined"
            className="my-3 cursor-pointer"
          >
            SUBMIT
          </Button>
        )}
      </form>
    </Container>
  );
}
