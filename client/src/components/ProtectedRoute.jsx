import React from 'react'
import { Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({auth,component:Component,...rest}) => {
    const navigate = useNavigate();

  return (
    <div>
<Route  {...rest} render={(props)=>{
    if(auth) return<Component{...props}/>
    if(!auth) navigate("/");
    //return<Redirect to={{path:'/' , state:{from:props.location}}}/>
}}/>
    </div>
  )
}

export default ProtectedRoute