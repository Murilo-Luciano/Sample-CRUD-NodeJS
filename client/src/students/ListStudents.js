import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const ListStudents = () => {
  const [resp, setResp] = useState([]);

  const callApi = async () => {
    const response = await fetch("http://localhost:5000/students");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    callApi().then((res) => setResp(res));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
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
  ];

  return (
    <DataGrid
      rows={resp}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      getRowId={(row) => row.studentid}
      disableSelectionOnClick
    />
  );
};

export default ListStudents;
