import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
 
export default function SearchStudent(){
    const [data,setData]= useState([]);
    const [students,setStudents]= useState([]);
    async function studentSearch(key){
        console.warn(key)
        let result= await fetch("/"+key);
        result= result.json();
        console.warn(result)
        setData(result)
    }
    useEffect( async()=>{
        getStudents();
    },[])
    console.warn("result",students)
   async function deleteOperation(regno){
        alert(regno)
        let result = await fetch(" http://127.0.0.1:5000/deletestudent"+regno,{
            method:"DELETE"
        });
        result= await result.json();
        console .warn(result)
        getStudents();
    }
    async function getStudents(){
        let result = await fetch(" http://127.0.0.1:5000/students");
        result = await result.json();
        setStudents(result)
    }
    return(
        <div>
            <h5>Search Student</h5>
            <input type="text" onChange={(e)=>studentSearch(e.target.value)} className="form-control" placeholder="search Student"/>
            <table className="table table-light table-hover table-striped ">
                    <thead className="thead-dark">
                      <tr className="table-dark">
                        <th>Student Name</th>
                        <th>Registration Number</th>
                        <th>Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item)=>{
                                <tr>
                                <td>{item.fullname}</td>
                                <td>{item.regno}</td>
                                <td><img src={"https://localhost:5000/"+item.file.path}/></td>
                                <td><Link className="nav-link" to={"update/"+item.regno}><span class="text-success admin-edit">Edit</span> </Link> <span className="text-dark">|</span> <span className="text-danger admin-delete" onClick={()=>deleteOperation(item.regno)}>Delete</span></td>
                              </tr>
                            })
                        }
                    </tbody>
                  </table>
        </div>
    )
}