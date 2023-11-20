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
import authorsTableData from "layouts/Users/authorsTableData";

import Cookies from "universal-cookie";
import DataTable from "examples/Tables/DataTable";
import {
  Box,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import MDTypography from "components/MDTypography";
import { FileUploader } from "react-drag-drop-files";
import MDButton from "components/MDButton";

export default function Users() {
  const cookies = new Cookies();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState("");

  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const headers = {
    Authorization: `Bearer ${cookies.get("token")}`,
    "Content-Type": "application/json",
  };

  const [columns, sestColumns] = useState([]);
  const [rows, sestRows] = useState([]);
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   const { columns, rows } = authorsTableData();
  const getAllUsers = async () => {
    const res = await axios.get(baseUrl + apiV1 + "/users", { headers });
    if (res.status === 200) {
      setUsers(res.data.results);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const openCreditModal = (user) => {
    setIsModalOpen(true);
    setUser(user);
  };

  const deleteUser = async (user) => {
    const res = await axios.delete(baseUrl + apiV1 + `/users/${user.id}`, {
      headers,
    });
    if (res.status === 204) {
      getAllUsers();
    }
  };

  useEffect(() => {
    const { columns: columnsa, rows: rowsa } = authorsTableData(users, openCreditModal, deleteUser);
    sestColumns(columnsa);
    sestRows(rowsa);
  }, [users]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} minHeight={"80vh"}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Users
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Dialog
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <Box
            style={{
              height: "350px",
              width: "500px",
              padding: "40px",
              margin: "0 auto",
            }}
          >
            <DialogTitle>{user.name} - Add Credits</DialogTitle>
            <DialogContent>
              <DialogContentText>Please enter credit amount to add</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="credits"
                label="Enter Credits"
                type="number"
                fullWidth
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <MDBox mt={4} mb={1}>
                <MDButton
                  style={{ marginRight: "12px" }}
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  variant="gradient"
                  color="error"
                >
                  Cancel
                </MDButton>
                <MDButton
                  onClick={async () => {
                    const res = await axios.patch(
                      baseUrl + apiV1 + `/users/${user.id}`,
                      {
                        credits,
                      },
                      {
                        headers,
                      }
                    );
                    if (res.status === 200) {
                      setIsModalOpen(false);
                      setIsLoading(false);
                      setCredits("");
                      setUser({});
                      getAllUsers();
                    }
                  }}
                  variant="contained"
                  color="info"
                >
                  Add
                </MDButton>
              </MDBox>
            </DialogActions>
          </Box>
        </Dialog>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
