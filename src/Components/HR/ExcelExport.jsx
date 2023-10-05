import { Badge, Stack } from "@mui/material";
import React from "react";
import { CSVLink } from "react-csv";

const ExcelExport = ({ data }) => {
  const headers = [
    { label: "Name", key: "user.name" },
    { label: "Email", key: "user.email" },
    {
      label: "Employment Date",
      key: "user.employment_date",
    },
    { label: "Department", key: "user.department_id" },
    { label: "Studied", key: "user.studied" },
    { label: "Remaining Date", key: "user.total_leaves" },
    { label: "Status", key: "leave.status" },
    { label: "how many times send Request", key: "count" },
  ];
  const emailStatusCounts = new Map();
  // console.log(data.leave?.created_at);
  const mergedData = data.reduce((result, item) => {
    const userEmail = item.leave ? item.leave.email : undefined;
    const userStatus = item.leave ? item.leave.status : undefined;

    if (userEmail && userStatus) {
      const compositeKey = `${userEmail}_${userStatus}`;
      if (emailStatusCounts.has(compositeKey)) {
        emailStatusCounts.set(
          compositeKey,
          emailStatusCounts.get(compositeKey) + 1
        );
        const existingItemIndex = result.findIndex(
          (existingItem) => existingItem.compositeKey === compositeKey
        );
        if (existingItemIndex !== -1) {
          result[existingItemIndex].count++;
        }
      } else {
        emailStatusCounts.set(compositeKey, 1);
        result.push({
          ...item,
          compositeKey,
          count: 1,
        });
      }
    }
    return result;
  }, []);

  const currentDate = new Date();
  const lastMonth = new Date();
  lastMonth.setMonth(currentDate.getMonth() - 1); // Calculate the date for the last month

  const MonthlyReport = mergedData?.filter((item) => {
    const createdDate = new Date(item.leave.created_at);
    // Calculate the difference in months between the created date and the last month
    const monthDifference =
      (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
      (currentDate.getMonth() - createdDate.getMonth());

    return monthDifference <= 1;
  });
  const reversedMonthlyReport = [...MonthlyReport].reverse();
  return (
    <Stack alignItems={"flex-end"} py={2} pr={2}>
      <CSVLink
        data={reversedMonthlyReport}
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
        <Badge badgeContent={`${currentDate.getMonth() + 1}th month`} color="primary">
          Download Monthly Report Excel
        </Badge>
      </CSVLink>
    </Stack>
  );
};

export default ExcelExport;
