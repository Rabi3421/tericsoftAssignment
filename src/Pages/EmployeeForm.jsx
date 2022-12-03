import {
  Grid,
  Paper,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState("");
  const obj = {
    name: name,
    email: email,
    phone: phone,
    dob: dob,
    gender: gender,
    hobbies: hobbies,
  };
  const api = "https://json-server-rabi3421.vercel.app/employee";
  const handleSubmit = () => {
    // axios
    //   .post(api,obj)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    fetch(api,{
      method:"POST",
      headers:{
        "Accept": "application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    })
    .then((res)=>{console.warn("result",res)});
  };

  const employeeForm = {
    padding: 20,
    height: "50%",
    width: "80%",
    margin: "20px auto",
  };

  return (
    <Grid
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "500px", marginTop: "50px" },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={10} style={employeeForm}>
        <Typography variant="h3" align="center">
          Employee Form
        </Typography>
        <TextField
          required
          type="text"
          name="name"
          label="Full Name"
          placeholder="Enter Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          required
          id="email"
          type="email"
          label="Email Id"
          placeholder="Enter Your Email Id"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          id="phone"
          type="number"
          label="Phone Number"
          placeholder="Enter Your Contact Number"
          variant="outlined"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={dob}
            onChange={(newValue) =>
              setDob(newValue.$D + "/" + newValue.$M + "/" + newValue.$y)
            }
            renderInput={(props) => <TextField required {...props} />}
          />
        </LocalizationProvider>
        <FormControl required style={{ width: "41%", marginTop: "50px" }}>
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="hobbies"
          type="text"
          label="Hobbies"
          placeholder="Write Your Hobbies"
          variant="outlined"
          value={hobbies}
          onChange={(e) => {
            setHobbies(e.target.value);
          }}
        />
        <Button
          variant="contained"
          style={{ width: "50%", marginTop: "50px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Grid>
  );
};

export default EmployeeForm;
