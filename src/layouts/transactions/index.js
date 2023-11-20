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

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/transactions/components/Transactions";
import { useEffect, useState } from "react";
import { baseUrl, apiV1 } from "utils/constants";

import axios from "axios";
import Cookies from "universal-cookie";

function TransactionsTable() {
  const cookies = new Cookies();
  const [creditHistoryData, setCreditHistoryData] = useState([]);

  const headers = {
    Authorization: `Bearer ${cookies.get("token")}`,
    "Content-Type": "application/json",
  };

  const getCreditHistory = async () => {
    const res = await axios.get(
      baseUrl +
        apiV1 +
        "/users/credit_history?projectBy=createdAt,updatedAt,amount,type,balance_after&sortBy=createdAt:desc&limit=10",
      {
        headers,
      }
    );
    if (res.status === 200) {
      setCreditHistoryData(res.data.results);
      // setSaveData(res.data.results);
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    getCreditHistory();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Transactions data={creditHistoryData} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Invoices />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default TransactionsTable;
