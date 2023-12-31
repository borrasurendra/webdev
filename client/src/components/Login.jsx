import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

const [user, setUser] = useState({
email:'',
password:''

});

//handle input
const handleChange=(event)=>{
  let name=event.target.name 
  let value=event.target.value 

  setUser({...user,[name]:value})

 
}
//handle login
const handleSubmit= async (event)=>{
  event.preventDefault();
  const{email,password}=user;
try {
  const res=await fetch('/login',{
    method:"POSt",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      email,password
    })
  });
if(res.status===400||!res){
  window.alert("invalid credentials")
}else{
  window.alert("login successful")
  navigate("/dashboard");
  window.location.reload();
}

} catch (error) {
  console.log(error);
}

}


  return (
    <div>
        <div className="container shadow my-5">
            <div className="row">
                <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                    <h1 className="display-4 fw-bolder">Welcome Back</h1>
                    <p className='lead text-center'> Enter Your Credentials To Login</p>
                    <h5>OR</h5>
                    <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50"  >REGISTER</NavLink>
                </div>
                <div className="col-md-6 p-5">
                  <h1 className="display-6 fw-bolder mb-5 text-allign-center">LOGIN</h1>
                  <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleChange}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={handleChange}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login