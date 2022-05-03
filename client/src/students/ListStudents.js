import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListStudents = () => {
  const [resp, setResp] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const callApi = async () => {
    const response = await fetch("http://localhost:5000/students");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    callApi().then((res) => setResp(res));
  }, []);

  const columns = [
    { field: "studentId", headerName: "ID", width: 90 },
    {
      field: "studentName",
      headerName: "Student name",
      width: 150,
      editable: true,
    },
    {
      field: "studentAge",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "delete",
      width: 50,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
              // const selectedIDs = new Set(selectionModel);
              // you can call an API to delete the selected IDs
              // and get the latest results after the deletion
              // then call setRows() to update the data locally here
              // setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
              console.log(selectedRows);
            }}
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <DataGrid
      rows={resp}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      getRowId={(row) => row.studentId}
      disableSelectionOnClick
      isCellEditable={() => false}
      components={{ Toolbar: GridToolbar }}
      onSelectionModelChange={(id) => setSelectedRows(id)}
    />
  );
};

export default ListStudents;
