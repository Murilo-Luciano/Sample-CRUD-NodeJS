import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [resp, setResp] = useState([]);

  const callApi = async () => {
    const response = await fetch("http://localhost:5000/students");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    callApi().then((res) => setResp(res));
  }, []);

  console.log(resp.map((e) => console.log(e.studentName)));

  return (
    <div>
      {resp.map((e) => (
        <p>{e.studentName}</p>
      ))}
    </div>
  );
}

export default App;
