import Cookies from "js-cookie";

export const logout = async () => {
  await Cookies.remove("auth_token");
  window.location.href = "/";
};
