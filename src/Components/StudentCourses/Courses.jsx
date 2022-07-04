import {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Courses(){
    const [courses,setCourses]= useState([]);
    useEffect( async()=>{
        getCourses();
    },[])
    console.warn("result",courses)
    async function deleteOperation(id){
        let results = await fetch(" http://127.0.0.1:5000/deletecourse/"+id,{
            method:"DELETE"
        });
        results= await results.json();
        alert("Course Deleted Successfully")
        console .warn(results)
        console.warn(results.fullname)
        getCourses();
    }
    async function getCourses(){
        let result = await fetch(" http://127.0.0.1:5000/courses");
        result = await result.json();
        setCourses(result)
    }
    return(
        <div>
        <section id="body-section">
        <div className="container text-center my-5">
            <h2 className="mt-3 m1-0 admintitle">COURSES REGISTERED</h2>
            <div className="table-responsive">
                <table className="table table-light table-hover table-striped ">
                    <thead className="thead-dark">
                      <tr className="table-dark">
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((item)=>{
                                return(
                                <tr>
                                <td>{item.coursename}</td>
                                <td>{item.coursecode}</td>
                                <td><Link to={"course/"+item.coursecode} className="nav-link"><span className="text-success admin-edit">View Assignments</span></Link></td>
                              </tr>
                            )})
                        }
                    </tbody>
                  </table>
              </div>
        </div>
    </section>
        </div>
    )
}