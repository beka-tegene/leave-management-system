import * as React from "react";

import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getDownloadReportData,
  getUsersData,
} from "../../Utils/Stores/LeaveStore";
import DataTable from "react-data-table-component";
import { Stack, Typography } from "@mui/material";
import ExcelExport from "./ExcelExport";

export default function HrHome() {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.StoreLeave.OutputUsers);
  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  const DownloadReport = useSelector(
    (state) => state.StoreLeave.OutputDownloadReport
  );
  useEffect(() => {
    dispatch(getDownloadReportData());
  }, []);

  const joinData = (leaveItem) => {
    const matchingUser = Users?.find((user) => user.Id === leaveItem.userId);
    return {
      leave: leaveItem,
      user: matchingUser,
    };
  };
  const joinedData =
    DownloadReport?.map((leaveItem) => joinData(leaveItem)) || [];
  const columns = [
    {
      name: "Name",
      selector: (row) => row.user?.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.user?.email,
      sortable: true,
    },
    {
      name: "Employment Date",
      selector: (row) => {
        return (
          <span>
            {new Date(row.user?.employment_date).toLocaleDateString("en-US")}
          </span>
        );
      },
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.user?.department_id,
      sortable: true,
    },
    {
      name: "Studied",
      selector: (row) => row.user?.studied,
    },
    {
      name: "Remaining Date",
      selector: (row) => row.user?.total_leaves,
    },
    {
      name: "Requested",
      selector: (row) => {
        return (
          <Typography fontSize={"14px"}>{row.leave?.requested}</Typography>
        );
      },
    },
    {
      name: "Approved",
      selector: (row) => {
        return (
          <Typography fontSize={"14px"} color={"#00aa00"}>
            {row.leave?.approved}
          </Typography>
        );
      },
    },
    {
      name: "Declined",
      selector: (row) => {
        return (
          <Typography fontSize={"14px"} color={"#aa0000"}>
            {row.leave?.declined}
          </Typography>
        );
      },
    },
  ];
  const customStyle = {
    rows: {
      style: {
        cursor: "pointer",
        backgroundColor: "#ededed",
        color: "#272727",
        "&:hover": {
          backgroundColor: "#323445",
          color: "#fff",
        },
      },
    },
    headCells: {
      style: {
        borderRadius: 2,
        backgroundColor: "#323445",
        color: "#fff",
      },
    },
  };
  console.log(DownloadReport);
  return (
    <Box sx={{ minHeight: "90dvh", p: 2, background: "#171717" }}>
      <ExcelExport data={joinedData} />
      <DataTable
        columns={columns}
        data={joinedData}
        fixedHeader
        pagination
        customStyles={customStyle}
      />
    </Box>
  );
}
