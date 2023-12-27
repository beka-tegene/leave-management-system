import { Stack } from "@mui/material";
import React from "react";
import { CSVLink } from "react-csv";

const formatDate = (dateString) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

const formatDataForCSV = (data) => {
  const approvedData = data?.filter(
    (item) => item.allLeave?.status === "approved"
  );

  return approvedData
    ?.map((item) => ({
      ID: item.user?.Id || "",
      Name: item.user?.name || "",
      "Employment Date": item.user?.employment_date
        ? formatDate(item.user?.employment_date)
        : "",
      "Start Day": item.allLeave?.start_date
        ? formatDate(item.allLeave.start_date)
        : "",
      "End Day": item.allLeave?.end_date
        ? formatDate(item.allLeave.end_date)
        : "",
      Duration: item.allLeave?.duration || "",
      Reason: item.allLeave?.reason || "",
      "Leave Type": item.allLeave?.leave_type || "",
      Status: item.allLeave?.status || "",
      "Remaining Date": item.user?.total_leaves || "",
      Requested: item.leave?.requested || "",
      Approved: item.leave?.approved || "",
      Declined: item.leave?.declined || "",
    }))
    .filter((item) => item.Status === "approved");
};

const formatDataForCSVDecline = (data) => {
  const approvedData = data?.filter(
    (item) => item.allLeave?.status === "declined"
  );

  return approvedData
    ?.map((item) => ({
      ID: item.user?.Id || "",
      Name: item.user?.name || "",
      "Employment Date": item.user?.employment_date
        ? formatDate(item.user?.employment_date)
        : "",
      "Start Day": item.allLeave?.start_date
        ? formatDate(item.allLeave.start_date)
        : "",
      "End Day": item.allLeave?.end_date
        ? formatDate(item.allLeave.end_date)
        : "",
      Duration: item.allLeave?.duration || "",
      Reason: item.allLeave?.reason || "",
      "Leave Type": item.allLeave?.leave_type || "",
      Status: item.allLeave?.status || "",
      "Remaining Date": item.user?.total_leaves || "",
      Requested: item.leave?.requested || "",
      Approved: item.leave?.approved || "",
      Declined: item.leave?.declined || "",
    }))
    .filter((item) => item.Status === "declined");
};

const ExcelExport = ({ data }) => {
  const formattedData = formatDataForCSV(data);
  const formattedDataDeclined = formatDataForCSVDecline(data);

  return (
    <Stack alignItems={"flex-end"} py={2} pr={2} gap={2}>
      <CSVLink
        data={formattedData}
        filename="monthLeaveManagement.csv"
        style={{
          textDecoration: "none",
          color: "white",
          background: "#222c65",
          padding: "0.7rem 1rem",
          borderRadius: 5,
        }}
      >
        Download approve Report
      </CSVLink>
      <CSVLink
        data={formattedDataDeclined}
        filename="monthLeaveManagement.csv"
        style={{
          textDecoration: "none",
          color: "white",
          background: "#222c65",
          padding: "0.7rem 1rem",
          borderRadius: 5,
        }}
      >
        Download decline Report Excel
      </CSVLink>
    </Stack>
  );
};

export default ExcelExport;
