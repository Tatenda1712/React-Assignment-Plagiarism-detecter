import {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Lecturers(){
    const [lecturers,setLecturers]= useState([]);
    useEffect( async()=>{
        getLecturers();
    },[])
    console.warn("result",lecturers)
    async function deleteOperation(id){
        let results = await fetch(" http://127.0.0.1:5000/deletelecturer/"+id,{
            method:"DELETE"
        });
        results= await results.json();
        alert("Course Deleted Successfully")
        console .warn(results)
        console.warn(results.fullname)
        getLecturers();
    }
    async function getLecturers(){
        let result = await fetch(" http://127.0.0.1:5000/lecturers");
        result = await result.json();
        setLecturers(result)
    }
    return(
        <div>
        <section id="body-section">
        <div className="container text-center mt-5">
            <h2 className="mt-3 m1-0 admintitle">REGISTERED LECTURERS</h2>
            <div className="table-responsive">
                <table className="table table-light table-hover table-striped ">
                    <thead className="thead-dark">
                      <tr className="table-dark">
                          <th>Id</th>
                        <th>Lecturer Name</th>
                        <th>Course Code</th>
                        <th>Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            lecturers.map((item)=>{
                                return(
                                <tr>
                                 <td>{item.id}</td>
                                <td>{item.lecturername}</td>
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