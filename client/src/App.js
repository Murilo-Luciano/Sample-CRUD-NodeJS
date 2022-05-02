import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import ListStudents from "./students/ListStudents";
import AddStudents from "./students/AddStudents";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<AddStudents />} />
        <Route
          path="/"
          element={
            <div style={{ height: 400, width: "100%" }}>
              <ListStudents />

              <Link to="/add">
                <Button variant="outlined">Add Student</Button>
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
