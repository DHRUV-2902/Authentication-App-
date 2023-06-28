import React from 'react'
import NavBar from './NavBar'
import {useState ,useEffect} from "react"
import{getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import app from './FbConfig';

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
    const[pw2,setPw2]=useState("");

    const hUn = (event) => { setUn(event.target.value);}
    const hPw1=(event)=>{ setPw1(event.target.value);}
    const hPw2 = (event)=>{setPw2(event.target.value);}
    
    const save =(event)=>{
        event.preventDefault();
        if(pw1==pw2)
        {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth,un,pw1)
            .then(res=>nav("/login"))
            .catch(err=>alert("issue"+ err));            
        }
        else
        {
            alert("passwords did not match");
            setPw1("");
            setPw2("");
        }
    };

    
  return (
  
    <>
    <center>
    <NavBar/>
    <h1>Signup page</h1>
    <form onSubmit={save}>
        <input type="text" placeholder="enter email" onChange={hUn} value={un}/>
        <br/><br/>
        <input type="password" placeholder="enter password " onChange={hPw1} value={pw1}/>
        <br/><br/>
        <input type="password" placeholder="confirm password" onChange={hPw2} value={pw2}/>
        <br/><br/>
        <input type="submit" value="register"/>

    </form>
          
    </center>
    </>
  )
}