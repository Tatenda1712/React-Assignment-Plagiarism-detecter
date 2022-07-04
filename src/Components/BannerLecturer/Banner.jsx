import "./banner.css";
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
export default function Banner(){
  const [setcoursecode,setCourseset]= useState("");
  const [setassignmentname,setAssignmentnameset]= useState("");
  const [setduedate,SetDuedateset]= useState("");
  const [validate,setValidate]= useState("");
  const [validategood,setValidategood]= useState("");
  const [courses,setCourses]= useState([]);
  useEffect( async()=>{
    let result = await fetch(" http://127.0.0.1:5000/courses");
    result = await result.json();
    setCourses(result)
  },[])

  async function setAssignment(){
    if(setcoursecode==""){
      setValidate("Course not entered")
    }
    else if(setassignmentname==""){
      setValidate("Assignment Name not entered")
    }
    else if(setduedate==""){
      setValidate("Duedate no set")
    }
    else{
      let lecturer=JSON.parse(sessionStorage.getItem('user-info'))
      let setlecturername=lecturer.lecturername
      let item={setcoursecode,setassignmentname,setduedate,setlecturername};
      console.warn(item);
      let result = await fetch("http://127.0.0.1:5000/setassignment",{
        method:'post',
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
      if(isAuth=="Assignment added Successfully"){
        setValidategood("Assignment Set")
        localStorage.clear()
      }
      else{
        setValidate("Error Setting Assignment")
      }
    }
  }
    return(
        <div>
             <section id="banner-area">
              <div className="container">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <p className="promo-title text-white-30 mb-1 banner-ttle"><span class="text-primary">BUSE</span> <span class="text-danger">PLAGIARISM</span> <span class="text-primary">C<span class="text-danger">O</span>P</span></p>
                      <span className="text-secondary">The Ultimate online plagiarism Checking Platiform</span>
                  </div>
                <div class="col-md-6 text-center">
                                <div className="form-group">
                          
                         <select class="form-control" id="selectcourse" value={setcoursecode} onChange={(e)=>setCourseset(e.target.value)}>
                                      <option>Select Course</option>
                                      {
                                        courses.map((item)=>{
                                          return(
                                            <option>{item.coursecode}</option>        
                            )})
                        }
                                    </select>
                                  </div>
                                <div className="form-group mt-2">
                                  <input type="text" class="form-control" id="assignmentName" placeholder="assignment name" value={setassignmentname} onChange={(e)=>setAssignmentnameset(e.target.value)}></input>
                                </div>
                                <div className="form-group my-2">
                                  <input type="date" class="form-control" id="duedate" value={setduedate} onChange={(e)=>SetDuedateset(e.target.value)}></input>
                                </div>
                                <h5 className="text-danger mb-2">{validate}</h5>
                                <h5 className="text-success mb-2">{validategood}</h5>
                                <button onClick={setAssignment} type="submit" class="btn btn-primary mb-5">Set Assignment</button>
                </div>
            </div>
        </div>
          </section>
        </div>
    )
}