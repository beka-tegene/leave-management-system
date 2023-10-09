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
    window.location.href = "/dashboard";
  } else {
    alert("error");
  }
};

export const fetchLeave = async () => {
  const useData = await axios.get("http://localhost:5000/leave");
  return useData.data;
};

export const fetchUser = async () => {
  const useData = await axios.get("http://localhost:5000/users");
  return useData.data;
};
export const approveLeave = async (data) => {
  console.log(data);
  //leaveId, email, allowedLeaveDays
  const Approve = await axios.post("http://localhost:5000/leave/approve", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log(Approve);
  if (Approve.status === 200) {
    window.location.reload(true);
  }
};

export const declineLeave = async (data) => {
  // leaveId, email
  const Decline = await axios.post("http://localhost:5000/leave/decline", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log(Decline);
  if (Decline.status === 200) {
    window.location.reload(true);
  }
};
export const fetchApprovedMonth = async () => {
  const useData = await axios.get("http://localhost:5000/leave/approvedmonth");
  return useData.data;
};
