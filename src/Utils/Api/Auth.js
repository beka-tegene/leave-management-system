import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export const Register = async (data) => {
  const useData = await axios.post(
    "http://192.168.0.63:5000/users/register",
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
    const response = await axios.post("http://192.168.0.63:5000/login/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const { token } = response.data;
      const decodedToken = jwt_decode(token);
      localStorage.setItem("token", token);
      Cookies.set("token", token, { expires: 1 });

      // Cookies.set("role", decodedToken.role, { expires: 1 });

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

export const update = async (data) => {
  console.log(data);
  const useData = await axios.post(
    "http://192.168.0.63:5000/users/updateUser",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(useData);
  if (useData.status === 200) {
    const { token } = useData.data;
    localStorage.setItem("token", token);
    Cookies.set("token", token, { expires: 1 });

    window.location.href = "/dashboard";
  } else {
    alert("error");
  }
};
export const updatePassword = async (data) => {
  try {
    const response = await axios.post(
      "http://192.168.0.63:5000/users/changePassword",

      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      toast.success(response.data.message);
      window.location.href = "/dashboard";
    } else if (response.status === 401) {
      console.log(response.response.data.message);
    } else {
      console.log(response);
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);
    toast.error(error.response.data.error);
    console.error("Login Error:", error);
  }
};

export const notificationUpdate = async (data) => {
  try {
    const response = await axios.post(
      "http://192.168.0.63:5000/users/notifcation",

      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      toast.success(response.data.message);
      const { token } = response.data;
      localStorage.setItem("token", token);
      Cookies.set("token", token, { expires: 1 });
    } else if (response.status === 404) {
      console.log(response.response.data.message);
    } else {
      console.log(response);
    }
  } catch (error) {
    console.error("Login Error:", error);
  }
};
