import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getDownloadReportData,
  getNewRequestData,
  getUsersData,
} from "../../Utils/Stores/LeaveStore";
import DataTable from "react-data-table-component";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import ExcelExport from "./ExcelExport";
import { setUpdateApprove } from "../../Utils/Stores/AuthStore";

export default function HrHome() {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.StoreLeave.OutputUsers);
  const DownloadReport = useSelector(
    (state) => state.StoreLeave.OutputDownloadReport
  );
  const AllLeave = useSelector((state) => state.StoreLeave.OutputNewRequest);

  useEffect(() => {
    dispatch(getUsersData());
    dispatch(getDownloadReportData());
    dispatch(getNewRequestData());
  }, [dispatch]);

  const joinData = (leaveItem) => {
    const matchingUser = Users?.find((user) => user.Id === leaveItem.Id);
    const matchingAllLeave = DownloadReport?.find(
      (report) => report.userId === leaveItem.Id
    );

    return {
      leave: matchingAllLeave,
      user: matchingUser,
      allLeave: leaveItem,
    };
  };

  const joinedData = (AllLeave || []).reduce((accumulator, leaveItem) => {
    if (leaveItem.status !== "pending") {
      const joined = joinData(leaveItem);
      accumulator.push(joined);
    }
    return accumulator;
  }, []);

  const [editConfirmationOpen, setEditConfirmationOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const saveEditHandler = () => {
    setEditConfirmationOpen(true);
  };

  const handleEditConfirmation = () => {
    if (reason.trim() === "") {
      return;
    }
    const leaveId = selectedRow.allLeave?._id;
    const Id = selectedRow.allLeave?.Id;
    const allowedLeaveDays = selectedRow.allLeave?.duration;
    const status = selectedRow?.status;
    dispatch(
      setUpdateApprove({
        data: {
          leaveId,
          allowedLeaveDays,
          Id,
          reason,
          status,
        },
      })
    );
    setEditConfirmationOpen(false);
  };

  const submitUpdateHandler = (row, status) => {
    const leaveId = row.allLeave?._id;
    const Id = row.allLeave?.Id;
    const allowedLeaveDays = row.allLeave?.duration;
    const leave_type = row.allLeave?.leave_type;
    dispatch(
      setUpdateApprove({
        data: {
          leaveId,
          Id,
          allowedLeaveDays,
          leave_type,
          status,
        },
      })
    );
  };

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
        return <span>{row.allLeave?.duration} days</span>;
      },
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <Select
            value={row.allLeave?.status}
            sx={{
              fontSize: "13px",
              color: row.allLeave?.status === "declined" ? "red" : "#00aa00",
            }}
            size="small"
            onChange={(e) => {
              setSelectedRow({ ...row, status: e.target.value });
              row.allLeave?.status === "approved"
                ? saveEditHandler()
                : submitUpdateHandler(row, e.target.value);
            }}
          >
            <MenuItem value="approved">approved</MenuItem>
            <MenuItem value="declined">declined</MenuItem>
          </Select>
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
    <Box sx={{ minHeight: "90dvh", p: 2, background: "#171717" }}>
      <ExcelExport data={joinedData} />
      <DataTable
        columns={columns}
        data={joinedData}
        fixedHeader
        pagination
        customStyles={customStyle}
      />
      <Dialog
        open={editConfirmationOpen}
        onClose={() => setEditConfirmationOpen(false)}
        aria-labelledby="edit-confirmation-dialog"
        PaperProps={{
          style: {
            maxWidth: 450,
            width: "100%",
          },
        }}
      >
        <DialogTitle>Decline Reason</DialogTitle>
        <DialogContent>
          <textarea
            rows={4}
            style={{
              resize: "none",
              padding: "1rem",
              fontSize: "16px",
              width: "100%",
              borderRadius: 5,
            }}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setEditConfirmationOpen(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={handleEditConfirmation} color="error">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
