import { Grid, makeStyles, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const initialValue = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  dob: new Date(),
  gender: "male",
  hobbies: "",
};
const useStyle = makeStyles(theme=>({
  root:{}
}))
const EmployeeForm = () => {
  const [user, setUser] = useState(initialValue);
  const classes = useStyle();
  useEffect(() => {}, []);
  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField variant="outlined" label="Full Name" value={user.name} />
          <TextField variant="outlined" label="Email" value={user.email} />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
    // <div>
    //   EmployeeForm
    //   <input type="text" placeholder="Enter your name" />
    //   <input type="email" placeholder="Enter your email" />
    //   <input type="number" placeholder="Enter your number" />
    //   <input type="calender" placeholder="Enter your date of birth" />
    //   <select>
    //     <option value ="--">Gender</option>
    //     <option value="male">M</option>
    //     <option value ="female">F</option>
    //     <option value=""></option>
    //   </select>
    //   <input type="text" placeholder="Write your Hobbies" />
    // </div>
  );
};

export default EmployeeForm;
