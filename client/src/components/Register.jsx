import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
//import {useHistory}from 'react-router-dom';
//import { useHistory } from 'react-router';
import { useNavigate } from "react-router-dom";


const Register = () => {

  //const history=useHistory()
  const navigate = useNavigate();

const [user, setUser] = useState({
  username:"",
  email:"",
  password:""
});
//handle inputs
const handleInput=(event)=>{
  let name=event.target.name;
  let value=event.target.value;

  setUser({...user,[name]:value});

}

//handle submit
const handleSubmit= async(event)=>{
event.preventDefault();
//object destructuring
//store object data into variables
const{username,email,password}=user;

try {
  const res=await fetch('/register',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      username,email,password
    })
  })
if(res.status===400 || !res){
  window.alert("already Used Details")

}else{
  window.alert("registration successful");
 // history.pushState('/login')
 navigate("/login");
}

} catch (error) {
  console.log(error);
}

}

  return (
    <div>
        <div>
        <div className="container shadow my-5">
            <div className="row justify-content-end">
                <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                    <h1 className="display-4 fw-bolder">HELLO ,FRIEND</h1>
                    <p className='lead text-center'> Enter Your Deteils To Register</p>
                    <h5>OR</h5>
                    <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50"  >LOGIN</NavLink>
                </div >
                <div className="col-md-6 p-5">
                  <h1 className="display-6 fw-bolder mb-5 text-allign-center">REGISTER</h1>
                  <form onSubmit={handleSubmit} method='POST'>
                  <div class="mb-3">
    <label for="name" class="form-label">User Name</label>
    <input type="text" class="form-control" id="name" name='username' value={user.username} onChange={handleInput}/>
   
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={user.email} onChange={handleInput}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={handleInput}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">I Agree Terms And Condiions</label>
  </div>
  <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
</form>
                  
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register