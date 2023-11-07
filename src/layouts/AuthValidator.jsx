import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "utils/tokenValidator";

const AuthValidator = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    isTokenValid() ? setIsLoading(false) : navigate("/authentication/sign-in");
  }, []);
  return isLoading ? <div></div> : <div>{children}</div>;
};

export default AuthValidator;
