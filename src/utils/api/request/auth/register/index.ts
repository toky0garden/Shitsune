import { API_URL } from "@/constants";
import { RegisterData, RegisterResponse } from "@/types/register.types";
import axios from "axios";
import Cookies from "js-cookie";

export const signUp = async (formData: RegisterData) => {
  try {
    const response = await axios.post<RegisterResponse>(
      `http://${API_URL}/api/register`,
      formData,
      { withCredentials: true },
    );

    if (response.data.token) {
      Cookies.set("auth_token", response.data.token, { expires: 7 });
    }

    return response.data;
  } catch (error) {
    console.log("хз " + error);
    throw error;
  }
};
