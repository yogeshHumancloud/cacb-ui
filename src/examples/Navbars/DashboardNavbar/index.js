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

import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import coin from "../../../assets/images/coin.png";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
} from "examples/Navbars/DashboardNavbar/styles";

// Material Dashboard 2 React context
import { useMaterialUIController, setTransparentNavbar } from "context";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import axios from "axios";
import { apiV1 } from "utils/constants";
import { baseUrl } from "utils/constants";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function DashboardNavbar({ absolute, light, isMini }) {
  const cookies = new Cookies();
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { transparentNavbar, fixedNavbar, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const [openMenuAcc, setOpenMenuAcc] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const headers = {
    Authorization: `Bearer ${cookies.get("token")}`,
    "Content-Type": "application/json",
  };

  async function displayRazorpay() {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post(
      `${baseUrl}${apiV1}/payment/orders`,
      {
        amount: "50000",
        currency: "INR",
      },
      { headers }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_sxAsCU8KfaYLaw", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: user.data?.name,
      description: "Test Transaction",
      image: { logo: coin },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(`${baseUrl}${apiV1}/payment/success`, data, { headers });

        alert(result.data.msg);
      },
      prefill: {
        name: user?.data?.name,
        email: user?.data?.email,
        contact: user?.data?.mobile_number,
      },
      notes: {
        address: user?.data?.billingAddress,
      },
      theme: {
        color: "#42424a",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniProfile = () => setOpenMenuAcc(!openMenuAcc);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  const renderProfileMenu = () => (
    <Menu
      anchorEl={openMenuAcc}
      anchorReference={null}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(openMenuAcc)}
      onClose={handleMiniProfile}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        onClick={() => navigate("/profile")}
        icon={<Icon>account_circle</Icon>}
        title="Profile"
      />
      <NotificationItem
        onClick={() => {
          cookies.remove("token");
          navigate("/authentication/sign-in");
        }}
        icon={<Icon>podcasts</Icon>}
        title="Logout"
      />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            {/* <MDBox pr={1}>
              <MDInput label="Search here" />
            </MDBox> */}
            <MDBox sx={{ display: "flex", alignItems: "center" }}>
              <img style={{ height: "1.5rem" }} src={coin} alt="coin" />
            </MDBox>
            <MDBox
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "1rem",
                marginLeft: "0.2rem",
                paddingTop: "0.2rem",
              }}
            >
              <MDTypography variant="regular" color="text">
                {user?.data?.credits}
              </MDTypography>
            </MDBox>
            <MDBox
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "1rem",
                paddingTop: "0.2rem",
              }}
            >
              <MDButton
                size="small"
                variant="gradient"
                color="info"
                style={{ color: "white", borderRadius: "5px", padding: "0.55rem" }}
                onClick={() => {
                  // navigate("/profile");
                  displayRazorpay();
                }}
              >
                Recharge
              </MDButton>
            </MDBox>
            <MDBox color={light ? "white" : "inherit"}>
              <IconButton
                onClick={handleMiniProfile}
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                size="small"
                variant="contained"
                disableRipple
                color="inherit"
              >
                <Icon sx={iconsStyle}>account_circle</Icon>
              </IconButton>
              {renderProfileMenu()}
              {/* <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon sx={iconsStyle}>notifications</Icon>
              </IconButton>
              {renderMenu()} */}
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
