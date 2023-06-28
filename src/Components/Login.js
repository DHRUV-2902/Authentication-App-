import React from 'react'
import NavBar from './NavBar'
import {useState ,useEffect} from "react"
import{getAuth,signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import app from './FbConfig'

export default function SignUp() {
    useEffect(()=>{

        let un =localStorage.getItem("un");
        if(un!=null){
            nav("/home");
        }

    },[]);

    const nav = useNavigate();
    const[un,setUn] = useState("");
    const[pw1,setPw1]=useState("");
    

    const hUn = (event) => { setUn(event.target.value);}
    const hPw1=(event)=>{ setPw1(event.target.value);}
    
    
    const check =(event)=>{
        event.preventDefault();
        const auth= getAuth();
        signInWithEmailAndPassword(auth,un,pw1)
        .then(res=>
            {
                localStorage.setItem("un",un);
                nav("/home");
            })
        .catch(err=>alert("issue"+err))
        
    };

    
  return (
  
    <>
    <center>
    <NavBar/>
    <h1>login  page</h1>
    <form onSubmit={check}>
        <input type="text" placeholder="enter email" onChange={hUn} value={un}/>
        <br/><br/>
        <input type="password" placeholder="enter password " onChange={hPw1} value={pw1}/>
        <br/><br/>
    
        <input type="submit" value="register"/>

    </form>
          
    </center>
    </>
  )
}