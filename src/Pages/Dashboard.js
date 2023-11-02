import { Box } from "@mui/material";
import React, { useState } from "react";
import AppBar from "../Componetns/Appbar";
import Marathon from "./Marathon";
import Activity from "./Activity";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Marathon");
  return (
    <Box sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Marathon" ? <Marathon /> : <Activity />}
    </Box>
  );
};

export default Dashboard;
