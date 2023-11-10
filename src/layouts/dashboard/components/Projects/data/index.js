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
import MDTypography from "components/MDTypography";;
import logoXD from "assets/images/small-logos/logo-xd.svg";


export default function data(list) {
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
      { Header: "Project Name", accessor: "companies", width: "40%", align: "left" },
      { Header: "Status", accessor: "completion", align: "center" },
    ],
    rows: list.map((item) => {
      return {
        companies: <Company image={logoXD} name={item.name} />,
      
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
              {item.status}
            </MDTypography>
          </MDBox>
        ),
      };
    }),
  };
}
