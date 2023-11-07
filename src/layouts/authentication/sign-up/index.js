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

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "utils/constants";
import { apiV1 } from "utils/constants";
import button from "assets/theme/components/button";

function Cover() {
  const navigate = useNavigate();
  const [isOTPTab, setIsOTPTab] = useState(false);
  const [email, setEmail] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: registerOTP,
    handleSubmit: handleSubmitOTP,
    formState: { errors: errorsOTP },
    setValue,
  } = useForm();
  const submit = async (data) => {
    const res = await axios.post(baseUrl + apiV1 + "/auth/register", {
      email: data.email,
      password: data.password,
      name: data.name,
    });
    if (res.status === 201) {
      setValue("code", "");
      setIsOTPTab(true);
    }
  };
  const submitOTP = async (data) => {
    if (!email) {
      setIsOTPTab(false);
    }
    const res = await axios.post(baseUrl + apiV1 + "/auth/confirm-email", {
      email: email,
      code: data.code,
    });
    if (res.status === 200) {
      navigate("/authentication/sign-in");
    }
  };
  return (
    <CoverLayout image={bgImage}>
      {isOTPTab ? (
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="success"
            mx={2}
            mt={-3}
            p={3}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Verify your Email
            </MDTypography>
            <MDTypography display="block" variant="button" color="white" my={1}>
              Enter security code sent you on your email
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Code"
                  variant="standard"
                  fullWidth
                  {...registerOTP("code", {
                    required: "Code is required", // Add required validation
                    pattern: {
                      value: /^\d{6}$/,
                      message: "Please enter 6 digit code",
                    },
                  })}
                />
                {errorsOTP?.code ? (
                  <MDTypography variant="button" color="error">
                    {errorsOTP?.code?.message}
                  </MDTypography>
                ) : null}
              </MDBox>

              <MDBox mt={4} mb={1}>
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  onClick={handleSubmitOTP(submitOTP)}
                >
                  Validate
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  wrong email?{" "}
                  <MDTypography
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                    onClick={() => {
                      setIsOTPTab(false), setEmail(null);
                    }}
                  >
                    Change Email
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      ) : (
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="success"
            mx={2}
            mt={-3}
            p={3}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Join us today
            </MDTypography>
            <MDTypography display="block" variant="button" color="white" my={1}>
              Enter your email and password to register
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Name"
                  variant="standard"
                  fullWidth
                  {...register("name", {
                    required: "Name is required", // Add required validation
                  })}
                />
                {errors?.name ? (
                  <MDTypography variant="button" color="error">
                    {errors?.name?.message}
                  </MDTypography>
                ) : null}
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors?.email ? (
                  <MDTypography variant="button" color="error">
                    {errors?.email?.message}
                  </MDTypography>
                ) : null}
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Password"
                  variant="standard"
                  fullWidth
                  {...register("password", {
                    required: "Password is required", // Add required validation
                    pattern: {
                      value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
                      message: `Contains at least 1 number.
                    Contains at least 1 special character.
                    Contains at least 1 uppercase letter.
                    Contains at least 1 lowercase letter.
                    Minimum of 8 characters in length.`,
                    },
                  })}
                />
                {errors?.password ? (
                  <MDTypography variant="button" color="error">
                    {errors?.password?.message}
                  </MDTypography>
                ) : null}
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit(submit)}>
                  sign up
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  Already have an account?{" "}
                  <MDTypography
                    component={Link}
                    to="/authentication/sign-in"
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Sign In
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      )}
    </CoverLayout>
  );
}

export default Cover;
