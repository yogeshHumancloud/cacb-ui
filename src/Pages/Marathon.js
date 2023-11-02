import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomeTable from "../Componetns/CustomeTable";
import { useNavigate } from "react-router";
import { dummydata } from "../Componetns/dummydata";
import DeleteConfirmation from "../Componetns/DeleteConfirmation";

const Marathon = () => {
  const navigate = useNavigate();
  const [deletePopup, setDeletePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const header = ["name", "email", "mobile", "age", "edit", "delete"];

  const onEdit = (row) => {
    navigate(`/edit/${row.id}`);
  };

  const onDelete = (row) => {
    setDeletePopup(row.id);
  };
  return (
    <Box
      sx={{
        marginTop: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {deletePopup && (
        <DeleteConfirmation
          handleClose={() => setDeletePopup(false)}
          id={deletePopup}
        />
      )}
      <Card
        sx={{
          height: "60vh",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "2rem",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            paddingBottom: "1rem",
          }}
        >
          <Typography variant="h4">Marathon's</Typography>
          <Button onClick={() => navigate("/add")} variant="contained">
            Add
          </Button>
        </Stack>

        <CustomeTable
          header={header}
          bodyList={dummydata}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Card>
    </Box>
  );
};

export default Marathon;
