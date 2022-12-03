import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Login() {
  const paperStyle = {
    padding: 20,
    height: "50%",
    width: "280px",
    margin: "20px auto",
  };
  const avatarStyle = {
    background: "#1bbd7e",
  };
  const remember = {
    margin: "right",
  };
  const [login, setLogin] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    await axios
      .post("https://reqres.in/api/login", {
        email:email,
        password:password,
      })
      .then((res) => setLogin(res.data.token))
      .catch((err) =>
        alert("Wrong Credentials! please provide correct email id")
      );
  };

  useEffect(() => {
    if (login) {
      alert("Login successful");
      navigate("/employee");
    }
  }, [login,navigate]);

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>SignIn</h2>
        </Grid>
        <TextField
          placeholder="Enter Your Email"
          label="Email Id"
          variant="standard"
          fullWidth
          required
          onChange={e=>setEmail(e.target.value)}
        />
        <TextField
          placeholder="Enter Your Password"
          label="Password"
          type="password"
          variant="standard"
          fullWidth
          required
          onChange={e=>setPassword(e.target.value)}
        />
        <FormControlLabel
          style={remember}
          control={<Checkbox name="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          onClick={handleClick}
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
        >
          Sign In
        </Button>
        <Typography style={{ marginTop: "20px" }}>
          Default Email Id : eve.holt@reqres.in
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
