import React, { useEffect, } from "react";

const EmployeeForm = () => {
  // const [user, setUser] = useState("");
  useEffect(() => {}, []);
  return (
    <div>
      EmployeeForm
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <input type="number" placeholder="Enter your number" />
      <input type="calender" placeholder="Enter your date of birth" />
      <select>
        <option value ="--">Gender</option>
        <option value="male">M</option>
        <option value ="female">F</option>
        <option value=""></option>
      </select>
      <input type="text" placeholder="Write your Hobbies" />
    </div>
  );
};

export default EmployeeForm;
