/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material componentsimport React from 'react';

import React, { useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Card } from "@mui/material";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import EditForm from "./components/EditForm";
import Info from "./components/Info";

function Profile() {
  const [editing, setEditing] = useState(false);
  const [hasBillingAddress, setHasBillingAddress] = useState(false);

  const intailValue = {
    name: "Suraj Deshmane",
    gstno: "HDJSJSHJ-323232",
    organazationName: "Humancloud",
    email: "suraj.deshmane@humancloud.co.in",
    mobileNo: "9999999999",
    currency: "INR",
    billArea: "Prime Plaza Bay",
    billCity: "Pune",
    billState: "Maharashtra",
    billCountry: "India",
    billPincode: "411045",
    sameAsBill: true,
    shipArea: "Prime Plaza Bay",
    shipCity: "Pune",
    shipState: "Maharashtra",
    shipCountry: "India",
    shipPincode: "411045",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: intailValue });
  const submit = (data) => {
    console.log({ data });
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card sx={{ marginTop: "1rem" }}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="h6" gutterBottom>
              Suraj Deshmane
            </MDTypography>
          </MDBox>
          {editing ? (
            <MDBox display="flex" alignItems="center">
              <MDBox>
                <MDButton variant="outlined" color="error" onClick={() => setEditing(!editing)}>
                  Cancel
                </MDButton>
              </MDBox>
              <MDBox marginLeft={2} marginRight={2}>
                <MDBox>
                  <MDButton variant="outlined" color="success" onClick={handleSubmit(submit)}>
                    Save
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>
          ) : (
            <MDBox display="flex" alignItems="center">
              <MDBox marginLeft={2} marginRight={2}>
                <MDBox>
                  <MDButton variant="outlined" color="info" onClick={() => setEditing(!editing)}>
                    Edit
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>
          )}
        </MDBox>
        {editing ? (
          <EditForm
            register={register}
            errors={errors}
            setHasBillingAddress={setHasBillingAddress}
            hasBillingAddress={hasBillingAddress}
          />
        ) : (
          <Info hasBillingAddress={hasBillingAddress} />
        )}
      </Card>
    </DashboardLayout>
  );
}

export default Profile;
