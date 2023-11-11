import { Checkbox, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

const Info = ({ hasBillingAddress }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <MDBox
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="flex-start"
          p={3}
        >
          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Full Name
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Suraj Deshmane
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Email
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              suraj.deshmane@humancloud.co.in
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Mobile No
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              9999999999
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              GST Number
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              HDJSJSHJ-323232
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Organization
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Humancloud
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Currency
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              INR
            </MDTypography>
          </MDBox>
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6}>
        <MDBox
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="flex-start"
          p={3}
        >
          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Billing Address
            </MDTypography>
          </MDBox>
          <MDBox>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Prime Bay Plaza,opp. to chroma
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Maharashtra, Pune - 411021
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <Checkbox checked={hasBillingAddress} sx={{ padding: 0 }} />
            <MDTypography variant="button" fontWeight="regular" color="text" ml={1}>
              Shipping Address same as Billing Address
            </MDTypography>
          </MDBox>
          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Shipping Address
            </MDTypography>
          </MDBox>
          <MDBox>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Prime Bay Plaza,opp. to chroma
            </MDTypography>
          </MDBox>
          <MDBox>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Maharashtra, Pune - 411021
            </MDTypography>
          </MDBox>
        </MDBox>
      </Grid>
    </Grid>
  );
};

export default Info;
