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
      <Box style={styles.container}>
        <Router>
          <Routes>
            <Route path="/add" element={<AddStudents />} />
            <Route
              path="/"
              element={
                <Paper style={styles.paper} elevation={4}>
                  <ListStudents />
                  <Link to="/add">
                    <Button variant="outlined" style={styles.addStudentButton}>
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

const styles = {
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgb(39 39 39 / 90%)",
  },
  paper: {
    height: 400,
    margin: 250,
  },
  addStudentButton: { marginTop: 10 },
};

export default App;
