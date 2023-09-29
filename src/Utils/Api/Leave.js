import axios from "axios";


export const Register = async (data) => {
    console.log(data);
    const useData = await axios.post(
      "http://localhost:5000/leave/request",
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