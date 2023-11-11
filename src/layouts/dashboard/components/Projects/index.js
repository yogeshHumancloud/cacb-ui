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
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TextField } from '@mui/material';

// import filterIcon

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";
import MDButton from "components/MDButton";
import AddFile from "./AddFile";

function Projects({ saveData, setSaveData, open, setOpen, onSuccessPost, count, setPage, page }) {
  const { columns, rows } = data(saveData);
  const [menu, setMenu] = useState(null);

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchIconClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };


  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);
  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
    <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
      <MDBox display="flex" alignItems="center">
        <MDTypography variant="h6" gutterBottom>
          Projects
        </MDTypography>
      </MDBox>
  
      <MDBox display="flex" alignItems="center">
        <MDBox>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </MDBox>
        <MDBox marginRight={2}>
          <IconButton >
            <SortIcon />
          </IconButton>
        </MDBox>
        {isSearchActive && (
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          )}
        <MDBox>
          <IconButton color="primary" onClick={() => {}}>
            <SearchIcon color="primary" onClick={handleSearchIconClick}/>
          </IconButton>
        </MDBox>
        <MDBox color="text" px={2}>
          <MDButton variant="gradient" color="info" onClick={() => setOpen(true)} style={{color:'white', borderRadius:'5px'}}>
            Add More
          </MDButton>
        </MDBox>
      </MDBox>
    </MDBox>
    <MDBox>
      <DataTable
        count={count}
        pageNumber={page}
        setPage={setPage}
        table={{ columns, rows }}
        showTotalEntries={false}
        isSorted={false}
        noEndBorder
        entriesPerPage={false}
      />
    </MDBox>
    <AddFile open={open} setOpen={setOpen} saveData={saveData} setSaveData={setSaveData} onSuccessPost={onSuccessPost} />
  </Card>
  


  );
}

export default Projects;
