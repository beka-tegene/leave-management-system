import * as React from "react";

import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getDownloadReportData,
  getNewRequestData,
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
  const AllLeave = useSelector((state) => state.StoreLeave.OutputNewRequest);
  useEffect(() => {
    dispatch(getNewRequestData());
  }, []);

  const joinData = (leaveItem) => {
    const matchingUser = Users?.find((user) => user.Id === leaveItem.Id);
    const matchingAllLeave = DownloadReport?.find(
      (user) => user.userId === leaveItem.Id
    );
    return {
      leave: matchingAllLeave,
      user: matchingUser,
      allLeave: leaveItem,
    };
  };
  const joinedData = AllLeave?.map((leaveItem) => joinData(leaveItem)) || [];
  console.log("abebe", joinedData);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.user?.name,
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
      name: "Start Date",
      selector: (row) => {
        return (
          <span>
            {new Date(row.allLeave?.start_date).toLocaleDateString("en-US")}
          </span>
        );
      },
    },
    {
      name: "End Date",
      selector: (row) => {
        return (
          <span>
            {new Date(row.allLeave?.end_date).toLocaleDateString("en-US")}
          </span>
        );
      },
    },
    {
      name: "Duration",
      selector: (row) => {
        return (
          <span>
           {row.allLeave?.duration} days
          </span>
        );
      },
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
