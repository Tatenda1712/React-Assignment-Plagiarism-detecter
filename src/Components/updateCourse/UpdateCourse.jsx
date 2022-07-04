import { useState, useEffect } from "react"
import {withRouter} from 'react-router-dom'


function UpdateCourse(props){

  const [coursenam,setCourseNam]=useState("");
  const [coursecod,setCourseCod]=useState("");
  const [course,setCourse]=useState([]);
  const [validate, setValidate]= useState("");

    console.warn("props",props.match.params.regno)

  useEffect(async()=>{
   let result= await fetch("/"+props.match.params.regno)
   result=result.json();
   setCourse(result)
  },[])


  async function Update(){
    if(coursenam==""){
      setValidate("Course Name not entered")
    }
    else if(coursecod==""){
      setValidate("Course Code not entered")
    }
    else{
    let item={coursecod,coursenam};
    console.warn(item);
   let result = await fetch("http://127.0.0.1:5000/updatecourse",{
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
                       <h4 className="text-dark">Course</h4>

                        <div className="form-group mt-4">
                          <input type="text" className="form-control" id="coursename"defaultValue={course.coursename} value={coursenam} onChange={(e)=>setCourseNam(e.target.value)}></input>
                        </div>
                        <div class="form-group mt-3">
                          <input type="text" className="form-control" id="coursecode" defaultValue={course.coursecode} value={coursecod} onChange={(e)=>setCourseCod(e.target.value)}></input>
                        </div>
                        <h5 className="bg-danger mb-2 text-white p-1">{validate}</h5>
                        <button onClick={Update} type="submit" className="btn btn-primary mb-4">Update Course</button>
                   </div>
                   <div className="col-md-4"></div>
               </div>
            </div>
        </section>
        </div>
    )
}
export default withRouter(UpdateCourse)