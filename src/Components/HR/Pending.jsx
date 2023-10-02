import {
  Box,
  Card,
  Divider,
  IconButton,
  ImageListItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getNewRequestData,
  getUsersData,
  setApproveLeave,
  setDeclineLeave,
} from "../../Utils/Stores/LeaveStore";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "#272727",
  border: "2px solid #EF9B01",
  color: "#FFFFFF",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};
const Pending = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);
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
    (leaveItem) => leaveItem.status === "pending"
  );
  const joinedData = pendingLeaveData.map((leaveItem) => joinData(leaveItem));

    const columns = [
    {
      name: "Name",
      selector: (row) => row.user?.name,
      sortable: true,
    },
    {
      name: "Leave Type",
      selector: (row) => row.leave?.leave_type,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => {
        return (
          <span>
            {new Date(row.leave?.start_date).toLocaleDateString("en-US")}
          </span>
        );
      },
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => {
        return (
          <span>
            {new Date(row.leave?.end_date).toLocaleDateString("en-US")}
          </span>
        );
      },
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.leave?.reason,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <Stack direction={"row"} gap={1} >
            <IconButton
              sx={{
                borderRadius: 1,
                backgroundColor: "#cc0000",
                color: "#FFF",
              }}
              onClick={() => declineHandler(row.user?.email, row.leave?._id)}
            >
              <Typography>Decline</Typography>
            </IconButton>
            <IconButton
              sx={{
                borderRadius: 1,
                backgroundColor: "#009900",
                color: "#FFF",
              }}
              onClick={() => approveHandler(row.user?.email, row?.leave)}
            >
              <Typography>Approve</Typography>
            </IconButton>
          </Stack>
        );
      },
    },
  ];
  const declineHandler = (email, leaveId) => {
    dispatch(setDeclineLeave({ data: { email, leaveId } }));
  };
  const approveHandler = (email, leave) => {
    const leaveId = leave?._id;
    let allowedLeaveDays = 0;
    const startDate = new Date(leave.start_date);
    const endDate = new Date(leave.end_date);
    const oneDay = 24 * 60 * 60 * 1000;
    if (
      startDate.getTime() === endDate.getTime() &&
      leave?.duration === "0.5"
    ) {
      allowedLeaveDays = 0.5;
    } else {
      allowedLeaveDays = Math.round(Math.abs(endDate - startDate) / oneDay) + 1;
    }
    dispatch(setApproveLeave({ data: { email, leaveId, allowedLeaveDays } }));
  };
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
  const rowHandler = (row) => {
    setOpen(true);
    setSelectedRow(row);
  };
  return (
    <Stack
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      flexWrap={"wrap"}
      sx={{ width: "84%", background: "#171717", p: 2 }}
      gap={3}
    >
      <Card
        sx={{
          width: "100%",background: "#171717",color:"#FFFFFF"
        }}
      >
        <Typography sx={{ p: 1, pl: 2 }}>New Request</Typography>
        <Divider sx={{ m: 1 }} />
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          // justifyContent={"flex-start"}
          flexWrap={"wrap"}
          gap={3}
          sx={{ p: 5 }}
        >
          <DataTable
            columns={columns}
            data={joinedData}
            fixedHeader
            pagination
            customStyles={customStyle}
            onRowClicked={(row) => rowHandler(row)}
          />

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {selectedRow && (
              <Box sx={style}>
                <Stack direction={"row"} gap={2}>
                  <ImageListItem sx={{ maxWidth: 120 }}>
                    <img src={selectedRow.user?.photo} alt="profile" />
                  </ImageListItem>
                  <Stack>
                    <Typography>Name: {selectedRow.user?.name}</Typography>
                    <Typography>
                      Leave Type : {selectedRow.leave?.leave_type}
                    </Typography>
                    <Typography>
                      Department : {selectedRow.user?.department_id}
                    </Typography>
                    <Typography>
                      Start Date :{" "}
                      {new Date(
                        selectedRow.leave?.start_date
                      ).toLocaleDateString("en-US")}
                    </Typography>
                    <Typography>
                      End Date :{" "}
                      {new Date(selectedRow.leave?.end_date).toLocaleDateString(
                        "en-US"
                      )}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Typography>
                    Remaining Date : {selectedRow.user?.total_leaves} days
                  </Typography>
                  <Typography>Reason : {selectedRow.leave?.reason}</Typography>
                  {selectedRow.leave?.photo && (
                    <Stack direction={"row"} gap={0.5} alignItems={"center"}>
                      <Typography>If you went to download the </Typography>
                      <Link
                        onClick={() =>
                          window.open(`${selectedRow.leave?.photo}`, "_block")
                        }
                      >
                        Attachment
                      </Link>
                    </Stack>
                  )}
                </Stack>
                <Stack direction={"row"} gap={1} justifyContent={"flex-end"}>
                  <IconButton
                    sx={{
                      borderRadius: 1,
                      backgroundColor: "#cc0000",
                      color: "#FFF",
                    }}
                    onClick={() =>
                      declineHandler(
                        selectedRow.user?.email,
                        selectedRow.leave?._id
                      )
                    }
                  >
                    <Typography>Decline</Typography>
                  </IconButton>
                  <IconButton
                    sx={{
                      borderRadius: 1,
                      backgroundColor: "#009900",
                      color: "#FFF",
                    }}
                    onClick={() =>
                      approveHandler(
                        selectedRow.user?.email,
                        selectedRow?.leave
                      )
                    }
                  >
                    <Typography>Approve</Typography>
                  </IconButton>
                </Stack>
              </Box>
            )}
          </Modal>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Pending;
