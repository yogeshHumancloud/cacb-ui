import { Checkbox, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import React from "react";

const EditForm = ({ register, errors, setData, data }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <MDBox
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="flex-start"
          p={2}
        >
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              label="Name"
              fullWidth
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors?.name ? (
              <MDTypography variant="button" color="error">
                {errors?.name?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              label="Email"
              disabled
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.email ? (
              <MDTypography variant="button" color="error">
                {errors?.email?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              label="Mobile No."
              fullWidth
              {...register("mobile_number", {
                // required: "Mobile No. is required",
              })}
            />
            {errors?.mobile_number ? (
              <MDTypography variant="button" color="error">
                {errors?.mobile_number?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              label="GST No."
              fullWidth
              {...register("gstNo", {
                // required: "GST No. is required",
              })}
            />
            {errors?.gstNo ? (
              <MDTypography variant="button" color="error">
                {errors?.gstNo?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              label="Organization"
              fullWidth
              {...register("organization", {
                // required: "Organization is required",
              })}
            />
            {errors?.organization ? (
              <MDTypography variant="button" color="error">
                {errors?.organization?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              fullWidth
              label="Currency"
              {...register("currency", {
                // required: "Currency is required",
              })}
            />
            {errors?.currency ? (
              <MDTypography variant="button" color="error">
                {errors?.currency?.message}
              </MDTypography>
            ) : null}
          </MDBox>
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6}>
        <MDBox
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="flex-start"
          p={2}
        >
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              fullWidth
              label="Area"
              {...register("billArea", {
                // required: "Area is required",
              })}
            />
            {errors?.billArea ? (
              <MDTypography variant="button" color="error">
                {errors?.billArea?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              fullWidth
              label="City"
              {...register("billCity", {
                // required: "City is required",
              })}
            />
            {errors?.billCity ? (
              <MDTypography variant="button" color="error">
                {errors?.billCity?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              fullWidth
              label="State"
              {...register("billState", {
                // required: "State is required",
              })}
            />
            {errors?.billState ? (
              <MDTypography variant="button" color="error">
                {errors?.billState?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              fullWidth
              label="Country"
              {...register("billCountry", {
                // required: "Country is required",
              })}
            />
            {errors?.billCountry ? (
              <MDTypography variant="button" color="error">
                {errors?.billCountry?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
            <MDInput
              fullWidth
              label="Pincode"
              {...register("billPincode", {
                // required: "Pincode is required",
              })}
            />
            {errors?.billPincode ? (
              <MDTypography variant="button" color="error">
                {errors?.billPincode?.message}
              </MDTypography>
            ) : null}
          </MDBox>
          <MDBox mb={2}>
            <Checkbox
              defaultChecked={data.sameAsBilling}
              checked={data.sameAsBilling}
              {...register("sameAsBilling", {
                // required: "Pincode is required",
              })}
              onChange={() => {
                setData({ ...data, sameAsBilling: !data.sameAsBilling });
              }}
              sx={{ padding: 0 }}
            />
            <MDTypography variant="button" fontWeight="regular" color="text" ml={1}>
              Shipping Address same as Billing Address
            </MDTypography>
          </MDBox>
        </MDBox>
      </Grid>
      {!data.sameAsBilling ? (
        <>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <MDBox
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
              alignItems="flex-start"
              p={2}
            >
              <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
                <MDInput
                  fullWidth
                  label="Area"
                  {...register("shipArea", {
                    // required: "Area is required",
                  })}
                />
                {errors?.shipArea ? (
                  <MDTypography variant="button" color="error">
                    {errors?.shipArea?.message}
                  </MDTypography>
                ) : null}
              </MDBox>
              <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
                <MDInput
                  fullWidth
                  label="City"
                  {...register("shipCity", {
                    // required: "City is required",
                  })}
                />
                {errors?.shipCity ? (
                  <MDTypography variant="button" color="error">
                    {errors?.shipCity?.message}
                  </MDTypography>
                ) : null}
              </MDBox>
              <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
                <MDInput
                  fullWidth
                  label="State"
                  {...register("shipState", {
                    // required: "State is required",
                  })}
                />
                {errors?.shipState ? (
                  <MDTypography variant="button" color="error">
                    {errors?.shipState?.message}
                  </MDTypography>
                ) : null}
              </MDBox>
              <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
                <MDInput
                  fullWidth
                  label="Country"
                  {...register("shipCountry", {
                    // required: "Country is required",
                  })}
                />
                {errors?.shipCountry ? (
                  <MDTypography variant="button" color="error">
                    {errors?.shipCountry?.message}
                  </MDTypography>
                ) : null}
              </MDBox>
              <MDBox mb={3} width={{ xs: "100%", lg: "75%" }}>
                <MDInput
                  fullWidth
                  label="Pincode"
                  {...register("shipPincode", {
                    // required: "Pincode is required",
                  })}
                />
                {errors?.shipPincode ? (
                  <MDTypography variant="button" color="error">
                    {errors?.shipPincode?.message}
                  </MDTypography>
                ) : null}
              </MDBox>
            </MDBox>
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

export default EditForm;
