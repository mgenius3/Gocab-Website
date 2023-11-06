// pages/about.js
import React from "react";
import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import {
  Container,
  Typography,
  Paper,
  makeStyles,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="About Gocab"
        description="Learn more about Gocab - Your trusted transportation partner."
        canonical="https://gocab.site/about"
        openGraph={{
          url: "https://gocab.site/about",
        }}
      />
      <Head>
        <title>About Gocab</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <Header />
      <Container style={{ marginTop: "120px", marginBottom: "120px" }}>
        <Typography variant="h4" gutterBottom className="text-blue-600">
          About Gocab
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Our Mission</Typography>
                  <Typography>
                    At Gocab, our mission is to provide safe, reliable, and
                    efficient transportation services for our customers. We are
                    dedicated to making urban travel easier and more convenient.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Our Vision</Typography>
                  <Typography>
                    Our vision is to transform the way people move within
                    cities. We envision a future where transportation is not
                    only accessible but also sustainable, making our cities
                    cleaner and more livable.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Our Values</Typography>
                  <Typography>
                    Gocab is built on a foundation of integrity, transparency,
                    and customer-centricity. We value safety, innovation, and
                    environmental responsibility.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper elevation={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Our Team</Typography>
                  <Typography>
                    Meet the dedicated and passionate team behind Gocab. We are
                    committed to creating a better transportation experience for
                    all.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
