import {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Students(){
    const [students,setStudents]= useState([]);
    const [data,setData]= useState([]);

    async function studentSearch(key){
        console.warn(key)
        let resultt= await fetch("/"+key);
        resultt= resultt.json();
        setData(resultt)
    }
    useEffect( async()=>{
        getStudents();
    },[])
    console.warn("students",students)

   async function deleteOperation(regno){
        let results = await fetch(" http://127.0.0.1:5000/deletestudent/"+regno,{
            method:"DELETE"
        });
        results= await results.json();
        console .warn(results)
        console.warn(results.fullname)
        getStudents();
    }
    async function getStudents(){
        let result = await fetch(" http://127.0.0.1:5000/students");
        result = await result.json();
        setStudents(result)
    }
   function displayResults(){
        if(data!=null){
            data.map((item)=>{
                return(
                <tr>
                <td>{item.fullname}</td>
                <td>{item.regno}</td>
                <td><Link className="nav-link" to={"update/"+item.regno}><span class="text-success admin-edit">Edit</span> </Link> <span className="text-dark">|</span> <span className="text-danger admin-delete" onClick={()=>deleteOperation(item.regno)}>Delete</span></td>
              </tr>
              
           ) })
        } 
    else{
        students.map((item)=>{
            return(
            <tr>
            <td>{item.fullname}</td>
            <td>{item.regumber}</td>
            <td><Link className="nav-link" to={"studentupdate/"+item.regno}><span class="text-success admin-edit">Edit</span> </Link> <span className="text-dark">|</span> <span className="text-danger admin-delete" onClick={()=>deleteOperation(item.regno)}>Delete</span></td>
          </tr>
         ) })
    }
    }
    return(
        <div>
        <section id="body-section">
        <div className="container text-center mt-5">
        <input type="text" onChange={(e)=>studentSearch(e.target.value)} className="form-control" placeholder="search Student"/>
            <h2 className="mt-3 m1-0 admintitle">REGISTERED STUDENTS</h2>
            <div className="table-responsive">
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
        students.map((item)=>{
            return(
            <tr>
            <td>{item.fullname}</td>
            <td>{item.regnumber}</td>
            <td><Link to={"studentupdate/"+item.regnumber}><span class="text-success admin-edit">Edit</span> </Link> <span className="text-dark">|</span> <span className="text-danger admin-delete" onClick={()=>deleteOperation(item.regnumber)} style={{cursor:"pointer"}}>Delete</span></td>
          </tr>
         ) })
    }
                   </tbody>
                  </table>
              </div>
       
       
       
       
       
        </div>
    </section>
        </div>
    )
}