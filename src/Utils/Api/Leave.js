import axios from "axios";

export const NewRequest = async (data) => {
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
    window.location.href = "/employer-dashboard";
  } else {
    alert("error");
  }
};


  export const fetchLeave = async () => {
    const useData = await axios.get("http://localhost:5000/leave");
    return useData.leaves;
  };


  export const fetchUser = async () => {
    const useData = await axios.get("http://localhost:5000/users");
    return useData.users;
  };
