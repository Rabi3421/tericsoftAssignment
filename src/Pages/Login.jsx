import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css"

function Login() {
  const [login,setLogin] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const handleClick = async () => {
    await axios.post("https://reqres.in/api/login",{
        email:emailRef.current.value,
        password:passwordRef.current.value
    }).then(res=>setLogin(res.data.token));
    console.log(login)
    if(login){
      alert("Login successful")
      navigate("/employee")
    }
    else{
      alert("something went wrong please try again")
    }
  };

  return (
    <div className="form"> 
        <div className="segment">
          <h1>Login Here To See The Data</h1>
        </div> 
        <label>
          <input type="email" ref={emailRef} placeholder="Email Address"/>
        </label>
        <label>
          <input type="password" ref={passwordRef} placeholder="Password"/>
        </label>
        <button onClick={handleClick} className="red" type="button"><i className="icon ion-md-lock"></i> Log in</button>
    </div>
  );
}

export default Login;
