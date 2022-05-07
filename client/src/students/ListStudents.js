import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListStudents = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const getStudents = async () => {
    const response = await fetch("http://localhost:5000/students");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getStudents().then((res) => setStudentsList(res));
  }, []);

  const columns = [
    { field: "studentId", headerName: "ID", width: 90 },
    {
      field: "studentName",
      headerName: "Name",
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
              selectedRows.forEach((id) => {
                fetch(`http://localhost:5000/students/${id}`, {
                  method: "DELETE",
                }).then((res) => console.log(res));
              });
              window.location.reload(false);
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
      rows={studentsList}
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
