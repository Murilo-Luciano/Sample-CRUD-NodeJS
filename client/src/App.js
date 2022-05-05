import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ListStudents from "./students/ListStudents";
import AddStudents from "./students/AddStudents";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "rgb(39 39 39 / 90%)",
        }}
      >
        <Router>
          <Routes>
            <Route path="/add" element={<AddStudents />} />
            <Route
              path="/"
              element={
                <Paper style={{ height: 400, margin: 250 }} elevation={4}>
                  <ListStudents />
                  <Link to="/add">
                    <Button variant="outlined" style={{ marginTop: 10 }}>
                      Add Student
                    </Button>
                  </Link>
                </Paper>
              }
            />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
