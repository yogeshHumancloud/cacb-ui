/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";
import axios from "axios";
import Cookies from "universal-cookie";
import { apiV1 } from "utils/constants";
import { baseUrl } from "utils/constants";

export default function data(list) {
  const cookies = new Cookies();
  const headers = {
    Authorization: `Bearer ${cookies.get("token")}`,
    "Content-Type": "application/json",
  };
  const getPresignedURL = async (projectId, type) => {
    const res = await axios.get(baseUrl + apiV1 + `/project/${projectId}/${type}`, { headers });
    if (res.data.url) {
      window.open(res.data.url, "_blank");
    }
  };
  const avatars = (members) =>
    members.map(([image, name]) => (
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Project Name", accessor: "companies", width: "100px", align: "left" },
      { Header: "Created at", accessor: "createdat", align: "center" },
      { Header: "Status", accessor: "completion", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows: list.map((item) => {
      return {
        companies: <Company image={logoXD} name={item.name} />,

        completion: (
          <MDBox width="8rem" textAlign="center">
            <MDTypography
              variant="button"
              fontWeight="medium"
              ml={1}
              lineHeight={1}
              color={
                item.status === "In Progress"
                  ? "warning"
                  : item.status === "Completed"
                  ? "success"
                  : item.status === "Failed"
                  ? "error"
                  : "info"
              }
            >
              {item.status}
            </MDTypography>
          </MDBox>
        ),
        createdat: (
          <MDBox width="16rem" textAlign="left">
            <MDTypography variant="button" fontWeight="small" ml={1} lineHeight={1}>
              {new Date(item.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </MDTypography>
          </MDBox>
        ),
        action: (
          <MDBox width="16rem" textAlign="left" style={{ gap: "12px", display: "flex" }}>
            {item.status === "Completed" ? (
              <>
                <MDButton
                  color="info"
                  variant="contained"
                  circular
                  onClick={() => {
                    getPresignedURL(item.id, "cb");
                  }}
                >
                  <Icon style={{ marginRight: "4px" }}>download</Icon>
                  15 CB
                </MDButton>
                <MDButton
                  color="info"
                  variant="contained"
                  circular
                  onClick={() => {
                    getPresignedURL(item.id, "ca");
                  }}
                >
                  <Icon style={{ marginRight: "4px" }}>download</Icon>
                  15 CA
                </MDButton>
              </>
            ) : (
              "-"
            )}
          </MDBox>
        ),
      };
    }),
  };
}
