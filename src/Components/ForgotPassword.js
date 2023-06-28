import React from 'react'
import NavBar from './NavBar'
import {useState ,useEffect} from "react"
import{getAuth,sendPasswordResetEmail,} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import app from './FbConfig'

export default function ForgotPassword() {
    useEffect(()=>{

        let un =localStorage.getItem("un");
        if(un!=null){
            nav("/home");
        }

    },[]);

    const nav = useNavigate();
    const[un,setUn] = useState("");
    
    

    const hUn = (event) => { setUn(event.target.value);}
    
    
    
    const check =(event)=>{
        event.preventDefault();
        const auth= getAuth();
        sendPasswordResetEmail(auth,un)
        .then(res=>
            {
            
                nav("/login");
            })
        .catch(err=>alert("issue"+err))
        
    };

    
  return (
  
    <>
    <center>
    <NavBar/>
    <h1> forgot password  page</h1>
    <form onSubmit={check}>
        <input type="text" placeholder="enter email" onChange={hUn} value={un}/>
        <br/><br/>
    
        <input type="submit" value="reset"/>

    </form>
          
    </center>
    </>
  )
}