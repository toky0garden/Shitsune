import { API_URL } from "@/constants";
import { LoginData, LoginResponse } from "@/types/login.types";
import axios from "axios";
import Cookies from "js-cookie";

//НЕ РАБОТАЕТ
export const signIn = async (formData: LoginData) => {
  try {
    const response = await axios.post<LoginResponse>(
      `http://${API_URL}/api/token`,
      formData,
      { withCredentials: true },
    );

    if (response.data.token) {
      Cookies.set("auth_token", response.data.token, { expires: 7 });
    }

    return response.data;
  } catch (error) {
    console.log("хуй знает че случилось" + error);
    throw error;
  }
};
