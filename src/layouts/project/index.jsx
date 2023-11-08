import React from "react";

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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "utils/constants";
import { apiV1 } from "utils/constants";
import AddFile from "layouts/dashboard/components/Projects/AddFile";

export default function ProjectList() {
  const [saveData, setSaveData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Content-Type": "application/json",
  };
  const getAllProject = async () => {
    const res = await axios.get(baseUrl + apiV1 + "/project", { headers });
    if (res.status === 200) {
      setSaveData(res.data.results);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllProject();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} minHeight={"80vh"}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} height={"70vh"}>
              {isLoading ? (
                <></>
              ) : saveData.length > 0 ? (
                <Projects
                  setPage={setPage}
                  count={count}
                  page={page}
                  saveData={saveData}
                  setSaveData={setSaveData}
                  open={open}
                  setOpen={setOpen}
                  onSuccessPost={getAllProject}
                />
              ) : (
                <AddFile
                  saveData={saveData}
                  setSaveData={setSaveData}
                  open={open}
                  setOpen={setOpen}
                  intilaScreen
                  onSuccessPost={getAllProject}
                />
              )}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
