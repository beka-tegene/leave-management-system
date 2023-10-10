import { Stack } from "@mui/material";
import React from "react";
import { CSVLink } from "react-csv";

const ExcelExport = ({ data }) => {
  const headers = [
    { label: "ID", key: "user.Id" },
    { label: "Name", key: "user.name" },
    { label: "Email", key: "user.email" },
    {
      label: "Employment Date",
      key: "user.employment_date",
    },
    { label: "Department", key: "user.department_id" },
    { label: "Studied", key: "user.studied" },
    { label: "Remaining Date", key: "user.total_leaves" },
    { label: "Requested", key: "leave.requested" },
    { label: "Approved", key: "leave.approved" },
    { label: "Declined", key: "leave.declined" },
  ];
  return (
    <Stack alignItems={"flex-end"} py={2} pr={2}>
      <CSVLink
        data={data}
        headers={headers}
        filename="monthLeaveManagement.csv"
        style={{
          textDecoration: "none",
          color: "white",
          background: "#222c65",
          padding: "0.7rem 1rem",
          borderRadius: 5,
        }}
      >
        Download Monthly Report Excel
      </CSVLink>
    </Stack>
  );
};

export default ExcelExport;
