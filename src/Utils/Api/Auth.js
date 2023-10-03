import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export const Register = async (data) => {
  const useData = await axios.post(
    "http://localhost:5000/users/register",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(useData);
  if (useData.status === 201) {
    window.location.href = "/";
  } else {
    window.location.href = "/register";
  }
};

export const Login = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/login/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const { token } = response.data;
      const decodedToken = jwt_decode(token);
      localStorage.setItem("token", token);
      Cookies.set("token", token, { expires: 1 });

      Cookies.set("role", decodedToken.role, { expires: 1 });

      if (decodedToken.role === "admin") {
        window.location.href = "/admin";
      } else if (decodedToken.role === "user" || decodedToken.role === "hr") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/signin";
      }
    } else {
      window.location.href = "/register";
    }
  } catch (error) {
    toast.error(error.response.data.msg);
    toast.error(error.response.data.error);
    console.error("Login Error:", error);
  }
};
