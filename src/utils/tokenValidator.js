import { jwtDecode } from "jwt-decode";

export const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("first");
    return false;
  }
  const decodedToken = jwtDecode(token);
  if (decodedToken?.exp * 1000 < Date.now()) {
    console.log("sec");

    return false;
  }
  return true;
};
