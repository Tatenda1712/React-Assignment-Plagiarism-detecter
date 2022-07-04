import { useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'

export default function AdminLogin(){

  const [adminuser, setAdminUser]= useState('');
  const [adminpassword, setAdminPassword]=useState('');
  const history=useHistory();
  const [validateadmin,setAdminValidate]=useState("");
  
    useEffect(()=>{

        if(sessionStorage.getItem('user-info')){
          history.push("/admin")
        }
      },[])
    
      async function loginAdmin(){
        if(adminuser==""){
          setAdminValidate("User Name is not entered")
        }
        else if(adminpassword==""){
          setAdminValidate("Password is not entered")
        }
        else{
        let item={adminuser,adminpassword};
        console.warn(item);
       let result = await fetch("http://127.0.0.1:5000/adminlogin",{
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
          setAdminValidate("Wrong Password")
        }
        else if(isAuth=="Invalid Credentials"){
          setAdminValidate("Invalid Credentials")
        }
        else if(isAuth=="You are logged in successfully"){
        sessionStorage.setItem("user-info", JSON.stringify(result))
        history.push("/admin")
        localStorage.clear()
        }
        else{
          setAdminValidate("Error Logging In")
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
                       <h4 className="text-dark mb-3">Admin Login</h4>
                       <div className="form-group">
              <input type="text" className="form-control" id="adminuser" placeholder="Admin User Name" value={adminuser} onChange={(e)=>setAdminUser(e.target.value)}></input>
            </div>
            <div className="form-group my-3">
              <input type="password" className="form-control" id="adminpassword" placeholder="Password" value={adminpassword} onChange={(e)=>setAdminPassword(e.target.value)}></input>
            </div>
            <h5 className="text-danger mb-2">{validateadmin}</h5>
            <button onClick={loginAdmin} type="submit" className="btn btn-primary mb-5">Login</button>
                   </div>
                   <div className="col-md-4"></div>
               </div>
            </div>
        </section>
        </div>
    )
    }