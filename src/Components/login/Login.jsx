import { useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'

export default function Login(){
  const [regnumber, setRegnumber]= useState('');
  const [password, setPassword]=useState('');
  const history=useHistory();
  const [validate,setValidate]=useState("");

  useEffect(()=>{

    if(sessionStorage.getItem('user-info')){
      history.push("/student")
    }
  },[])

  async function loginStudent(){
    if(regnumber==""){
      setValidate("Registration number is not entered")
    }
    else if(password==""){
      setValidate("Password is not entered")
    }
    else{
    let item={regnumber,password};
    console.warn(item);
   let result = await fetch("http://127.0.0.1:5000/studentlogin",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type": "application/json",
        "Accept":'application/json'
      }
    });
    result= await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    let data=JSON.parse(localStorage.getItem('user-info'))
    let isAuth= data.message
    if(isAuth=="Invalid Password"){
      setValidate("Wrong Password")
    }
    else if(isAuth=="Invalid Credentials"){
      setValidate("Invalid Credentials")
    }
    else if(isAuth=="You are logged in successfully"){
    sessionStorage.setItem("user-info", JSON.stringify(result))
    history.push("/student")
    localStorage.clear()
    }
    else{
      setValidate("Error Logging In")
    }
  }
  }
    return(
        <div className="col-md-10">
            <div className="form-group">
              <input type="regnumber" className="form-control" id="regnumber" placeholder="Registration Number | User Name" value={regnumber} onChange={(e)=>setRegnumber(e.target.value)}></input>
            </div>
            <div className="form-group my-3">
              <input type="password" className="form-control" id="logpassword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <h5 className="text-danger mb-2">{validate}</h5>
            <button onClick={loginStudent} type="submit" className="btn btn-primary mb-5">Login</button>
      </div>
    )
}