import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
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
            <div>
              <Paper style={{ height: 400, margin: 100 }} elevation={4}>
                <ListStudents />

                <Link to="/add">
                  <Button variant="outlined">Add Student</Button>
                </Link>
              </Paper>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
