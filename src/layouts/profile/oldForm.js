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
import {
  Paper,
  Typography,
  Grid,
  Divider,
  IconButton,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

function Overview() {
  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [hasBillingAddress, setHasBillingAddress] = useState(false);
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("john.doe@example.com");
  const [mobilePhone, setMobilePhone] = useState("");
  const [defaultCurrency, setDefaultCurrency] = useState("INR");

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };
  const rows = [
    { id: 1, name: "Full Name", value: fullName, fontWeight: "bold" },
    { id: 2, name: "Add Address", fontWeight: "bold" },
    { id: 3, name: "Organization", value: organization, fontWeight: "bold" },
    { id: 4, name: "Email", value: email, fontWeight: "bold" },
    { id: 5, name: "Mobile Phone", value: mobilePhone, fontWeight: "bold" },
    { id: 6, name: "Default currency", value: defaultCurrency, fontWeight: "bold" },
  ];

  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "300px", marginTop: "75px" }}
      >
        <Typography
          variant="v5"
          style={{ height: 90, width: 120, fontWeight: "bold", textDecoration: "underline" }}
        >
          {" "}
          MY PROFILE
        </Typography>
        <IconButton aria-label="edit" style={{ marginLeft: "1200px" }} onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
      </div>
      <div style={{ marginLeft: "300px", marginTop: "20px", marginRight: "70px" }}>
        <Paper>
          <Grid container spacing={2} style={{ padding: "20px" }}>
            {rows.map((row) => (
              <React.Fragment key={row.id}>
                <Grid container item xs={12} style={{ paddingBottom: "0", fontSize: "18px" }}>
                  <Grid item xs={10}>
                    <div style={{ fontWeight: row.fontWeight }}>{row.name}</div>
                  </Grid>
                </Grid>
                {row.name === "Full Name" &&
                  (editing ? (
                    <Grid item xs={12} style={{ paddingTop: "0", fontSize: "15px" }}>
                      <TextField
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        label="Full Name"
                      />
                    </Grid>
                  ) : (
                    <Typography style={{ marginLeft: "0.5rem" }}>{fullName}</Typography>
                  ))}
                {row.name === "Add Address" &&
                  (editing ? (
                    <Grid item xs={12} style={{ paddingTop: "0", fontSize: "15px" }}>
                      <TextField
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        label="Shipping Address"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={hasBillingAddress}
                            onChange={() => setHasBillingAddress(!hasBillingAddress)}
                            defaultChecked={false}
                          />
                        }
                        label="Use same address for Billing"
                      />
                      {!hasBillingAddress && (
                        <TextField
                          value={billingAddress}
                          onChange={(e) => setBillingAddress(e.target.value)}
                          label="Billing Address"
                        />
                      )}
                    </Grid>
                  ) : (
                    <Typography style={{ marginLeft: "0.5rem" }}>{hasBillingAddress}</Typography>
                  ))}
                {row.name === "Organization" &&
                  (editing ? (
                    <Grid item xs={12} style={{ paddingTop: "0", fontSize: "15px" }}>
                      <TextField
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        label="Organization"
                      />
                      <TextField
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        label="Organization"
                      />{" "}
                      <TextField
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        label="Organization"
                      />
                    </Grid>
                  ) : (
                    <Typography style={{ marginLeft: "0.5rem" }}>{organization}</Typography>
                  ))}
                {row.name === "Email" && (
                  <Grid item xs={12} style={{ paddingTop: "0", fontSize: "15px" }}>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                  </Grid>
                )}
                {row.name === "Mobile Phone" &&
                  (editing ? (
                    <Grid item xs={12} style={{ paddingTop: "0", fontSize: "15px" }}>
                      <TextField
                        value={mobilePhone}
                        onChange={(e) => setMobilePhone(e.target.value)}
                        label="Mobile Phone"
                      />
                    </Grid>
                  ) : (
                    <Typography style={{ marginLeft: "0.5rem" }}>{mobilePhone}</Typography>
                  ))}
                {row.name === "Default currency" &&
                  (editing ? (
                    <Grid item xs={12} style={{ paddingTop: "0", fontSize: "15px" }}>
                      <Select
                        value={defaultCurrency}
                        onChange={(e) => setDefaultCurrency(e.target.value)}
                        disabled
                      >
                        <MenuItem value="INR">INR</MenuItem>
                      </Select>
                    </Grid>
                  ) : (
                    <Typography style={{ marginLeft: "0.5rem" }}>{defaultCurrency}</Typography>
                  ))}
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Paper>
        {editing && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="contained" color="primary" onClick={handleSaveClick}>
              Save
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Overview;
