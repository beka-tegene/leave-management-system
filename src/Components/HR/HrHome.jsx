import * as React from "react";

import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNewRequestData, getUsersData } from "../../Utils/Stores/LeaveStore";
import DataTable from "react-data-table-component";
import { Stack, Typography } from "@mui/material";

export default function HrHome() {
  const Leave = useSelector((state) => state.StoreLeave.OutputNewRequest);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewRequestData());
  }, [dispatch]);
  const Users = useSelector((state) => state.StoreLeave.OutputUsers);
  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
  const joinData = (leaveItem) => {
    const matchingUser = Users.find((user) => user.email === leaveItem.email);
    return {
      leave: leaveItem,
      user: matchingUser,
    };
  };
  const pendingLeaveData = Leave.filter(
    (leaveItem) => leaveItem.status !== "pending"
  );
  const joinedData = pendingLeaveData.map((leaveItem) => joinData(leaveItem));
  console.log(joinedData);
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
      name: "Type",
      selector: (row) => {
        return (
          <Stack>
            {row.leave?.status === "approved" && (
              <Typography fontSize={"14px"} color={"#00aa00"}>
                {row.leave?.status}
              </Typography>
            )}
            {row.leave?.status === "declined" && (
              <Typography fontSize={"14px"} color={"#aa0000"}>
                {row.leave?.status}
              </Typography>
            )}
          </Stack>
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
  return (
    <Box sx={{ width: "84%", p: 2, background: "#171717" }}>
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
