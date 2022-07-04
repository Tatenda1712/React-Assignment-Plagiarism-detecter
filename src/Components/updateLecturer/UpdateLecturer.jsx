import { useState, useEffect } from "react"
import {withRouter} from 'react-router-dom'


function UpdateLecturer(props){

  const [fullname,setFullname]=useState("");
  const [lecpassword,setLecpassword]=useState("");
  const [course,setCourse]=useState("");
  const [conpassword,setConpassword]=useState("");
  const [lecturer,setLecturer]=useState([]);
  const [validate, setValidate]= useState("");

    console.warn("props",props.match.params.regno)

  useEffect(async()=>{
   let result= await fetch("/"+props.match.params.regno)
   result=result.json();
   setLecturer(result)
  },[])


  async function Update(){
    if(fullname==""){
      setValidate("Full Name not entered")
    }
    else if(course==""){
      setValidate("Course Code not entered")
    }
    else if(lecpassword==""){
      setValidate("Password not entered")
    }
    else if(conpassword==""){
      setValidate("confirm Password not entered")
    }
    else if(lecpassword!=conpassword){
      setValidate("Passwords do not match")
    }
    else{
    let item={fullname,course,lecpassword};
    console.warn(item);
   let result = await fetch("http://127.0.0.1:5000/studentregistration",{
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
                       <h4 className="text-dark">Lecturer</h4>
                        <div className="form-group mt-4">
                          <input type="text" className="form-control" id="fullname"defaultValue={lecturer.fullname} value={fullname} onChange={(e)=>setFullname(e.target.value)}></input>
                        </div>
                        <div class="form-group mt-3">
                          <input type="text" className="form-control" id="regnumberreg" defaultValue={lecturer.course} value={course} onChange={(e)=>setCourse(e.target.value)}></input>
                        </div>
                        <div className="form-group mt-3">
                          <input type="password" className="form-control" id="password" defaultValue={lecturer.password} value={lecpassword} onChange={(e)=>setLecpassword(e.target.value)}></input>
                        </div>
                        <div className="form-group my-3">
                          <input type="password" className="form-control" id="conpassword" placeholder="Confirm Password" value={conpassword} onChange={(e)=>setConpassword(e.target.value)}></input>
                        </div>
                        <h5 className="bg-danger mb-2 text-white p-1">{validate}</h5>
                        <button onClick={Update} type="submit" className="btn btn-primary mb-4">Update Lecturer</button>

                   </div>
                   <div className="col-md-4"></div>
               </div>
            </div>
        </section>
        </div>
    )
}
export default withRouter(UpdateLecturer)