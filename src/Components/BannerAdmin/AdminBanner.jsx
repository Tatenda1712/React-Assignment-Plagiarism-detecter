import "./badmin.css"
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
export default function AdminBanner(){
  const [coursename,setCoursename]=useState('');
  const [coursecode,setCoursecode]=useState('');
  const [lecturername,setLecturername]=useState('');
  const [lecpassword,setLecPassword]=useState('');
  const [conpassword,setConpassword]=useState('');
  const [leccoursecode,setLeccoursecode]=useState('');
  const [lecturervalidate,setLecturerValidate]=useState('');
  const [coursevalidate,setCourseValidate]=useState('');
  const [coursevalidategood,setCourseValidategood]=useState('');
  const [lecturervalidategood,setLecturerValidategood]=useState('');
  const history= useHistory();
  async function addCourse(){
    if(coursename==""){
      setCourseValidate("Course Name not entered")
      setCourseValidategood("")
      history.push("/managecourses")
    }
    else if(coursecode==""){
      setCourseValidate("Course Code not entered")
      setCourseValidategood("")
    }
    else{
    let item={coursecode,coursename};
    console.warn(item);
   let result = await fetch("http://127.0.0.1:5000/addcourse",{
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
    if(isAuth=="Course already Registered"){
      setCourseValidate("Course already Registered")
      setCourseValidategood("")
    }
    else if(isAuth=="Course added Successfully"){
      history.push("/managecourses")
      setCourseValidategood("Course Added Successfully")
      setCourseValidate("")

    }
    else{
      setCourseValidate("Error adding course")
      setCourseValidategood("")
    }
  }
  }

  async function registerLecturer(){

    let item={lecturername,lecpassword,leccoursecode};
    console.warn(item);
   let result = await fetch("http://127.0.0.1:5000/addlecturer",{
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
    if(isAuth=="Lecturer Already Registered"){
      setLecturerValidate("Lecturer Already Registered")
      setLecturerValidategood("")
    }
    else if(isAuth=="Lecturer added Successfully"){
      history.push("/managelecturers")
      setLecturerValidategood("Lecturer Added Successfully")
      setLecturerValidate("")

    }
    else{
      setLecturerValidate("Error registering lecturer")
      setLecturerValidategood("")
    }
  }

    return(
        <div>
             <section id="banner-area">
              <div className="container">
            <div className="row">
                <div className="col-md-6 mb-4">
                        <p className="promo-title text-white-30 mb-1 btitle"><span className="text-primary">BUSE</span> <span className="text-danger">PLAGIARISM</span> <span className="text-primary">C<span className="text-danger">O</span>P</span></p>
                      <span className="text-secondary">The Ultimate online plagiarism Checking Platiform</span>
                        <div className="form-group mt-2">
                          <input type="text" className="form-control" id="courseName" placeholder="course name" value={coursename} onChange={(e)=>setCoursename(e.target.value)}></input>
                        </div>
                        <div className="form-group mt-2">
                          <input type="text" className="form-control" id="courseCode" placeholder="course code" value={coursecode} onChange={(e)=>setCoursecode(e.target.value)}></input>
                        </div>
                        <h5 className="text-danger mt-2 ">{coursevalidate}</h5>
                        <h5 className="text-success mt-2">{coursevalidategood}</h5>
                        <button onClick={addCourse} type="submit" className="btn btn-success mt-4">Register Course</button>
                  </div>
                  <div class="col-md-6">
                                <div className="form-group mt-2">
                                  <input type="text" className="form-control" id="lecturerName" placeholder="lecturer name" value={lecturername} onChange={(e)=>setLecturername(e.target.value)}></input>
                                </div>
                                <div className="form-group mt-2">
                                  <input type="password" className="form-control" id="lecpassword" placeholder="password"value={lecpassword}  onChange={(e)=>setLecPassword(e.target.value)}></input>
                                </div>
                                <div className="form-group mt-2">
                                  <input type="password" className="form-control" id="confirmPasswordlec" placeholder="confirm password" value={conpassword} onChange={(e)=>setConpassword(e.target.value)}></input>
                                </div>
                                <div className="form-group my-2">
                                  <input type="text" className="form-control" id="courselec" placeholder="Course Code" value={leccoursecode} onChange={(e)=>setLeccoursecode(e.target.value)}></input>
                                </div>
                                <h5 className="text-success mt-2">{lecturervalidategood}</h5>
                                <h5 className="text-danger mt-2">{lecturervalidate}</h5>
                                <button onClick={registerLecturer} type="submit" className="btn btn-primary">Register Lecturer</button>
                </div>
            </div>
        </div>
          </section>
        </div>
    )
}