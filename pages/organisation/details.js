import { useCallback, useState } from "react";
// import { firestore, doc, setDoc, addDoc, collection } from "../../config/index";
import { LoadingButton } from "@mui/lab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uploadFile from "../../helper/file_upload";
import FetchApiClient from "../../fetch_api_clients/api";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useRouter } from "next/router";
import InputFileUpload from "../../components/sub_components/inputfileupload";
import { v4 as uuidv4 } from "uuid";

export const Details = () => {
  const [values, setValues] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [documentNames, setDocumentNames] = useState([]);
  const router = useRouter();
  const api = new FetchApiClient("/organisation");

  // Generate a UUID
  const fileId = uuidv4();

  const handleChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setDocumentNames([file.name]); // Store the name of the selected file
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Upload the file to Firebase Storage
      const fileURL = selectedFile
        ? await uploadFile(selectedFile, fileId)
        : null;

      values["business_document_url"] = fileURL;
      let { error, response } = await api.post("/register", values);
      if (error) throw new Error(error);
      else {
        localStorage.setItem("userToken", JSON.stringify(response));
        toast.info("Successfully registered");
        // router.push("/");
      }
    } catch (error) {
      toast.error(error);
      console.error("Error adding data: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Card>
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Divider />
            <CardHeader
              subheader="Fill all the input field below"
              title="Organisation Information"
            />
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Organisation Name"
                  name="name"
                  onChange={handleChange}
                  required
                  // value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Business Reg No"
                  name="bus_reg_no"
                  onChange={handleChange}
                  required
                  // value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  type="email"
                  // value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  required
                  // value={values.firstName}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Business Address"
                  name="address"
                  onChange={handleChange}
                  required
                  // value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  fullWidth
                  helperText="Business Model and Services"
                  name="model_service"
                  maxRows={4}
                  onChange={handleChange}
                  multiline
                  required
                />
              </Grid>

              <Grid xs={12} md={12}>
                <InputFileUpload
                  handleFile={handleFileSelect}
                  label={"business document"}
                  // style={{ marginTop: "10px", marginBottom: "3px" }}
                />
                {documentNames.map((name, index) => (
                  <p key={index}>{name}</p>
                ))}
              </Grid>

              {/* Display selected document names */}
              {/* <Grid xs={12} md={12}>
                {documentNames.map((name, index) => (
                  <p key={index}>{name}</p>
                ))}
              </Grid> */}

              <Grid xs={12} md={12}>
                <div class="flex">
                  <input type="checkbox" class="mr-2 cursor" required />
                  <p> All information above is correct? </p>
                </div>
              </Grid>
            </Grid>
          </Box>
          <ToastContainer />
        </CardContent>

        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          {loading ? (
            <LoadingButton variant="outlined" loading>
              Submit
            </LoadingButton>
          ) : (
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          )}
        </CardActions>
        <ToastContainer />
      </Card>
    </form>
  );
};
