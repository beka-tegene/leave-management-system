import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DataTable from "react-data-table-component";
import jwt_decode from "jwt-decode";
import moment from "moment/moment";
const Notification = () => {
  const token = window.localStorage.getItem("token");
  const decodedToken = jwt_decode(token);

  const columns = [
    {
      name: "Request",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Text",
      selector: (row) => row.text,
    },
    {
      name: "Action Date",
      selector: (row) => {
        return <span>{moment(row.Date).fromNow()}</span>;
      },
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => {
        return (
          <Stack>
            {row.type === "approved" && (
              <Typography fontSize={"14px"} color={"#00aa00"}>
                {row.type}
              </Typography>
            )}
            {row.type === "declined" && (
              <Typography fontSize={"14px"} color={"#aa0000"}>
                {row.type}
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
        data={decodedToken.data?.Notification}
        fixedHeader
        pagination
        customStyles={customStyle}
      />
    </Box>
  );
};

export default Notification;
