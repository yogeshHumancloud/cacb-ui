import { Checkbox, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

const Info = ({ hasBillingAddress, data }) => {
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
              {data.name}
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Email
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              {data.email}
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Mobile No
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              {data.mobile_number ? data.mobile_number : "-"}
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              GST Number
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              {data.gstNo ? data.gstNo : "-"}
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Organization
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              {data.organization ? data.organization : "-"}
            </MDTypography>
          </MDBox>

          <MDBox mb={-1}>
            <MDTypography variant="h6" gutterBottom>
              Currency
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              {data.currency ? data.currency : "-"}
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
              {`${data.billingAddress?.street ? data.billingAddress?.street : "-"} - ${
                data.billingAddress?.city ? data.billingAddress?.city : ""
              }`}
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              {`${data?.billingAddress?.state ? data?.billingAddress?.state : ""} - ${
                data?.billingAddress?.country ? data?.billingAddress?.country : ""
              } - ${data?.billingAddress?.postalCode ? data?.billingAddress?.postalCode : ""}`}
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <Checkbox
              defaultChecked={data.sameAsBilling}
              checked={data.sameAsBilling}
              sx={{ padding: 0 }}
              disabled
            />
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
              {`${data.shippingAddress?.street ? data.shippingAddress?.street : "-"} - ${
                data.shippingAddress?.city ? data.shippingAddress?.city : ""
              }`}
            </MDTypography>
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              {`${data?.shippingAddress?.state ? data?.shippingAddress?.state : ""} - ${
                data?.shippingAddress?.country ? data?.shippingAddress?.country : ""
              } - ${data?.shippingAddress?.postalCode ? data?.shippingAddress?.postalCode : ""}`}
            </MDTypography>
          </MDBox>
        </MDBox>
      </Grid>
    </Grid>
  );
};

export default Info;
