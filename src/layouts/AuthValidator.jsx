import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "reduxToolkit/user/userSlice";
import { apiV1 } from "utils/constants";
import { baseUrl } from "utils/constants";
import { isTokenValid } from "utils/tokenValidator";

const AuthValidator = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(async () => {
    const isToken = isTokenValid();

    if (isToken) {
      try {
        const headers = {
          Authorization: `Bearer ${isToken}`,
          "Content-Type": "application/json",
        };

        const res = await axios.get(baseUrl + apiV1 + "/users/userinfo", {
          headers,
        });

        dispatch(setUser(res.data));
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/authentication/sign-in");
    }
  }, []);
  return isLoading ? <div></div> : <div>{children}</div>;
};

export default AuthValidator;
