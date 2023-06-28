import React from 'react'
import NavBar from './NavBar'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth,deleteUser } from 'firebase/auth'

export default function Home() {
    
    const nav = useNavigate();
    const [user,setUser]=useState("");

    useEffect(()=>{
        let un=localStorage.getItem("un");
        if(un!=null){
            setUser("welcome"+"{ "+un + " }");
        }
        else{
            nav("/login");
        }
    },[]);

    const lo =  (event)=>{
        event.preventDefault();
        localStorage.clear();
        nav("/login");
    }
    const de =(event)=>{
        event.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user)
        .then(()=>{
            localStorage.clear();
            nav("/login");
        })
        .catch(err=>alert("issue" + err));
    }
  return (
    <div>
        <center>
        <NavBar/>
        <h1>HOME PAGE </h1>
        <h2> {user} </h2>
        <form onSubmit={lo}>
            <input type="submit" value="logout"/>
     
        </form>
        <form onSubmit={de}>
     <input type="submit" value="delete user " />
        </form>
        </center>
      
    </div>
  )
}
