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
        <div className="container text-center mt-5">
            <h2 className="mt-3 m1-0 admintitle">REGISTERED COURSES</h2>
            <div className="table-responsive">
                <table className="table table-light table-hover table-striped ">
                    <thead className="thead-dark">
                      <tr className="table-dark">
                          <th>ID</th>
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
                                <td>{item.id}</td>
                                <td>{item.coursename}</td>
                                <td>{item.coursecode}</td>
                                <td><Link to={"update/"+item.id}><span class="text-success admin-edit">Edit</span> </Link> <span className="text-dark">|</span> <span className="text-danger admin-delete" onClick={()=>deleteOperation(item.id)} style={{cursor:"pointer"}}>Delete</span></td>
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