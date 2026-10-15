import api from "./api";
import axios from "axios";

export async function login(user_data) {
  try {
    const response = await api.post("accounts/token", { ...user_data });
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    return { access: response.data.access, refresh: response.data.refresh };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function get_access_token() {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/accounts/token/refresh/",
      {
        refresh: localStorage.getItem("refresh"),
      },
    );
    const new_access = response.data.access;
    localStorage.setItem("access", new_access);
    return new_access;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function Register(user_data) {
  try {
    await api.post("accounts/register", { ...user_data });
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
