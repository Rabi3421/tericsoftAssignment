import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeForm from "./Pages/EmployeeForm";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
}

export default App;
