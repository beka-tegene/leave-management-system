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
import { getNewRequestData, getUsersData } from "../../Utils/Stores/LeaveStore";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#272727",
  border: "2px solid #EF9B01",
  color: "#FFFFFF",
  boxShadow: 24,
  p: 4,
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
    const matchingUser = Users.find((user) => user.email === leaveItem.email && leaveItem.status === "pending");
    return {
      leave: leaveItem,
      user: matchingUser,
    };
  };
  const joinedData = Leave.map((leaveItem) => joinData(leaveItem));


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
          <Stack direction={"row"} gap={1}>
            <IconButton
              sx={{
                borderRadius: 1,
                backgroundColor: "#cc0000",
                color: "#FFF",
              }}
            >
              <Typography>Decline</Typography>
            </IconButton>
            <IconButton
              sx={{
                borderRadius: 1,
                backgroundColor: "#009900",
                color: "#FFF",
              }}
            >
              <Typography>Approve</Typography>
            </IconButton>
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
          backgroundColor: "#373737",
          color: "#fff",
        },
      },
    },
    headCells: {
      style: {
        borderRadius: 2,
        backgroundColor: "#474747",
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
      sx={{ width: "84%", background: "#F7F7F7", p: 2 }}
      gap={3}
    >
      <Card
        sx={{
          width: "100%",
        }}
      >
        <Typography>New Request</Typography>
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
                      Department : {selectedRow.leave?.department_id}
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
                  <Typography>Remaining Date : {selectedRow.user?.name}</Typography>
                  <Typography>Reason : {selectedRow.leave?.reason}</Typography>
                  {selectedRow.leave?.photo && (
                    <Link
                      onClick={() =>
                        window.open(`${selectedRow.leave?.photo}`, "_block")
                      }
                    >
                      Attachment
                    </Link>
                  )}
                </Stack>
                <Stack direction={"row"} gap={1} justifyContent={"flex-end"}>
                  <IconButton
                    sx={{
                      borderRadius: 1,
                      backgroundColor: "#cc0000",
                      color: "#FFF",
                    }}
                  >
                    <Typography>Decline</Typography>
                  </IconButton>
                  <IconButton
                    sx={{
                      borderRadius: 1,
                      backgroundColor: "#009900",
                      color: "#FFF",
                    }}
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
