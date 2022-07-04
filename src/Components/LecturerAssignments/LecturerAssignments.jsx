import {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Courses(){
    const [courses,setCourses]= useState([]);
    useEffect( async()=>{
        getLecAssignments();
    },[])
    console.warn("result",courses)
    let data=JSON.parse(sessionStorage.getItem('user-info'))
    let lecname=data.lecturername
    async function deleteOperation(id){
        let results = await fetch(" http://127.0.0.1:5000/deletecourse/"+id,{
            method:"DELETE"
        });
        results= await results.json();
        alert("Course Deleted Successfully")
        console .warn(results)
        console.warn(results.fullname)
        getLecAssignments();
    }
    async function getLecAssignments(){
        let result = await fetch(" http://127.0.0.1:5000//lecturerassignments/"+lecname);
        result = await result.json();
        setCourses(result)
    }
    return(
        <div>
        <section id="body-section">
        <div className="container text-center my-5">
            <h2 className="mt-3 m1-0 admintitle">Course Assignments</h2>
            <div className="table-responsive">
                <table className="table table-light table-hover table-striped ">
                    <thead className="thead-dark">
                      <tr className="table-dark">
                        <th>Course Number</th>
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
                                <td>{item.course}</td>
                                <td><Link to={"lecturercourse/"+item.course} className="nav-link"><span className="text-success admin-edit">View Assignments</span></Link></td>
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