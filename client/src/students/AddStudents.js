import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddStudents = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <Paper
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: 400,
          margin: 400,
          marginTop: 100,
          marginBottom: 100,
        }}
        elevation={4}
      >
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          variant="filled"
          onChange={(event) => setAge(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Link to="/">
          <Button
            variant="outlined"
            onClick={() =>
              fetch(
                `http://localhost:5000/students/new?name=${name}&age=${age}`,
                {
                  method: "POST",
                }
              ).then((res) => console.log(res))
            }
          >
            Submit
          </Button>
        </Link>
      </Paper>
    </div>
  );
};

export default AddStudents;
