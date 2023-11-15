import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

export const isTokenValid = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (!token) {
    return false;
  }
  const decodedToken = jwtDecode(token);

  if (decodedToken?.exp * 1000 < Date.now()) {
    console.log("sec");

    return false;
  }
  return token;
};
