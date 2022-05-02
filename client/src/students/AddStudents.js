import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const AddStudents = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
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
        onChange={(event) => setAge(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="outlined"
        onClick={() =>
          fetch(`http://localhost:5000/students/new?name=${name}&age=${age}`, {
            method: "POST",
          }).then((res) => console.log(res))
        }
      >
        Submit
      </Button>
    </div>
  );
};

export default AddStudents;
