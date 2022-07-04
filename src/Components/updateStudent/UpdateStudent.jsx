import { useState, useEffect } from "react"
import {withRouter} from 'react-router-dom'

function UpdateStudent(props){

  const [fullname,setFullname]=useState("");
  const [regnumberreg,setRegnumberreg]=useState("");
  const [regpassword,setRegpassword]=useState("");
  const [conpassword,setConpassword]=useState("");
  const [student,setStudent]=useState([]);
  const [validate, setValidate]= useState("");

    console.warn("props",props.match.params.regno)

  useEffect(async()=>{
   let result= await fetch("/studentupdate/"+props.match.params.regno)
   result=await result.json();
   setStudent(result)
  },[])


  async function Update(){
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
   let result = await fetch("http://127.0.0.1:5000/studentupdate/"+props.match.params.regno,{
      method:'post',
      body:JSON.stringify(item),
      headers:{
        "Content-Type": 'application/json',
        "Accept":'application/json'
      }
    })
    result= result.json()
    sessionStorage.setItem("user-info", JSON.stringify(result))
  }

  }
    return(
        <div>
        <section id="body-section">
            <div className="container-fluid text-center mt-4">
               <div className="row">
                   <div className="col-md-4"></div>
                   <div className="col-md-4">
                       <h4 className="text-dark">Student</h4>

                        <div className="form-group mt-4">
                          <input type="text" className="form-control" id="fullname"defaultValue={student.fullname} value={fullname} onChange={(e)=>setFullname(e.target.value)}></input>
                        </div>
                        <div class="form-group mt-3">
                          <input type="text" className="form-control" id="regnumberreg" defaultValue={student.regno} value={regnumberreg} onChange={(e)=>setRegnumberreg(e.target.value)}></input>
                        </div>
                        <div className="form-group mt-3">
                          <input type="password" className="form-control" id="password" defaultValue={student.password} value={regpassword} onChange={(e)=>setRegpassword(e.target.value)}></input>
                        </div>
                        <div className="form-group my-3">
                          <input type="password" className="form-control" id="conpassword" placeholder="Confirm Password" value={conpassword} onChange={(e)=>setConpassword(e.target.value)}></input>
                        </div>
                        <h5 className="bg-danger mb-2 text-white p-1">{validate}</h5>
                        <button onClick={Update} type="submit" className="btn btn-primary mb-4">Update</button>

                   </div>
                   <div className="col-md-4"></div>
               </div>
            </div>
        </section>
        </div>
    )
}
export default withRouter(UpdateStudent)