import React from 'react'
//import { useState } from 'react';
import { useNavigate} from "react-router-dom"
import { useEffect } from 'react';

const Logout = () => {
const navigate=useNavigate();
const logout=async()=>{
    try {
        const res=await fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });
if(res.status===401||!res){
    window.alert("please Logout Later")
}else{
    navigate('/');
    window.location.reload()
}

    } catch (error) {
        console.log(error)
        
    }
}

useEffect(() => {
  logout();

 
}, []);


  return (
    <div>
        
    </div>
  )
}

export default Logout