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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "utils/constants";
import { apiV1 } from "utils/constants";
import Cookies from "universal-cookie";
import { setUser } from "reduxToolkit/user/userSlice";

function Profile() {
  const cookies = new Cookies();
  const [editing, setEditing] = useState(false);

  const user = useSelector((store) => store.user.data);
  const dispatch = useDispatch();

  const [intailValue, setInitialValue] = useState({ ...user });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: intailValue });

  const submit = async (data) => {
    try {
      const headers = {
        Authorization: `Bearer ${cookies.get("token")}`,
        "Content-Type": "application/json",
      };

      const res = await axios.patch(baseUrl + apiV1 + `/users/${data.id}`, data, { headers });
      if (res.status === 200) {
        setEditing(false);
        dispatch(setUser(res.data));
      }
    } catch (e) {
      console.log(e);
    }
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
            data={intailValue}
            setData={setInitialValue}
          />
        ) : (
          <Info data={intailValue} />
        )}
      </Card>
    </DashboardLayout>
  );
}

export default Profile;
