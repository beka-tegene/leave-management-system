import axios from "axios";
import jwt_decode from "jwt-decode";

export const Register = async (data) => {
  console.log(data);
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
      window.localStorage.setItem("token", token);

      const decodedToken = jwt_decode(token);
      console.log("Decoded Token:", decodedToken);

      if (decodedToken.role === "admin") {
        window.location.href = "/admin";
      } else if (decodedToken.role === "user") {
        window.location.href = "/employer-dashboard";
      } else if (decodedToken.role === "hr") {
        window.location.href = "/hr-dashboard";
      } else {
        window.location.href = "/login";
      }
    } else {
      window.location.href = "/register";
    }
  } catch (error) {
    console.error("Login Error:", error);
  }
};
