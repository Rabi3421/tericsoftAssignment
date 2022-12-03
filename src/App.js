import { Paper } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeForm from "./Pages/EmployeeForm";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<Paper><EmployeeForm style={{ width:"50%",background:"#BABECC"}} /></Paper>} />
      </Routes>
    </div>
  );
}

export default App;
