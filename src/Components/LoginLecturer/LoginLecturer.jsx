import { useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'

export default function LoginLecturer(){
  useEffect(()=>{

    if(sessionStorage.getItem('user-info')){
      history.push("/lecturer")
    }
  },[])
  const [lecusername, setLecUserName]= useState('');
  const [lecpassword, setLecPassword]=useState('');
  const history=useHistory();
  const [validate,setValidate]=useState("");

  async function loginLecturer(){
    if(lecusername==""){
      setValidate("User Name is not entered")
    }
    else if(lecpassword==""){
      setValidate("Password is not entered")
    }
    else{
    let item={lecusername,lecpassword};
    console.warn(item);
   let result = await fetch("http://127.0.0.1:5000/lecturerlogin",{
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
    history.push("/lecturer")
    localStorage.clear()
    }
    else{
      setValidate("Error Logging In")
    }
  }
  }
    return(
        <div className="col-md-10">
            <h5 className="text-danger">Lecturer Login</h5>
            <div className="form-group">
              <input type="text" className="form-control" id="username" placeholder="Lecturer User Name" value={lecusername} onChange={(e)=>setLecUserName(e.target.value)}></input>
            </div>
            <div className="form-group my-3">
              <input type="password" className="form-control" id="logpassword" placeholder="Password" value={lecpassword} onChange={(e)=>setLecPassword(e.target.value)}></input>
            </div>
            <h5 className="text-danger mb-2">{validate}</h5>
            <button onClick={loginLecturer} type="submit" className="btn btn-primary mb-5">Login</button>
      </div>
    )
}