import { useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'

export default function Register(){
  const [fullname,setFullname]=useState("");
  const [regnumberreg,setRegnumberreg]=useState("");
  const [regpassword,setRegpassword]=useState("");
  const [conpassword,setConpassword]=useState("");
  const history=useHistory();
  const [validate, setValidate]= useState("");
  
  useEffect(()=>{

    if(sessionStorage.getItem('user-info')){
      history.push("/student")
    }
  },[])
  async function signUp(){
    if(fullname==""){
      setValidate("Full Name not entered")
    }
    else if(regnumberreg==""){
      setValidate("Registration number not entered")
    }
    else if(regpassword==""){
      setValidate("Password not entered")
    }
    else if(conpassword==""){
      setValidate("confirm Password not entered")
    }
    else if(regpassword!=conpassword){
      setValidate("Passwords do not match")
    }
    else{
    let item={fullname,regnumberreg,regpassword};
    console.warn(item);
   let result = await fetch("http://127.0.0.1:5000/studentregistration",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type": 'application/json',
        "Accept":'application/json'
      }
    })
    result= await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    let data=JSON.parse(localStorage.getItem('user-info'))
    let isAuth= data.message
    if(isAuth=="Regstration number already used"){
      setValidate("Regstration number already used")
    }
    else if(isAuth=="You have Successfully Registered"){
    sessionStorage.setItem("user-info", JSON.stringify(result))
    history.push("/student")
    localStorage.clear()
    }
    else{
      setValidate("An Error Occured while trying to register")
    }
  }

  }
    return(
        <div>
        <section id="body-section">
            <div className="container-fluid text-center mt-4">
               <div className="row">
                   <div className="col-md-4"></div>
                   <div className="col-md-4">
                       <h4 className="text-dark">Sign Up</h4>

                        <div className="form-group mt-4">
                          <input type="text" className="form-control" id="fullname" placeholder="Full Name"value={fullname} onChange={(e)=>setFullname(e.target.value)}></input>
                        </div>
                        <div className="form-group mt-3">
                          <input type="text" className="form-control" id="regnumberreg" placeholder="Registration number" value={regnumberreg} onChange={(e)=>setRegnumberreg(e.target.value)}></input>
                        </div>
                        <div className="form-group mt-3">
                          <input type="password" className="form-control" id="password" placeholder="Password" value={regpassword} onChange={(e)=>setRegpassword(e.target.value)}></input>
                        </div>
                        <div className="form-group my-3">
                          <input type="password" className="form-control" id="conpassword" placeholder="Confirm Password" value={conpassword} onChange={(e)=>setConpassword(e.target.value)}></input>
                        </div>
                        <h5 className="bg-danger mb-2 text-white p-1">{validate}</h5>
                        <button onClick={signUp} type="submit" className="btn btn-primary mb-4">Register</button>

                   </div>
                   <div className="col-md-4"></div>
               </div>
            </div>
        </section>
        </div>
    )
}