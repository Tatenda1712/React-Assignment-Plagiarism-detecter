import "./studentsub.css"; 
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function StudentSubmit(){
  const [assignmentfile, setAssignmentFile]= useState("");
  const [assignments,setAssignments]= useState([]);
  let [course,setCourse]=useState('')
  useEffect( async()=>{
      getAssignments();
  },[])
 async function submitAssignment(){
  let data= JSON.parse(sessionStorage.getItem('user-info'))
  let regnumber=data.regno;
    const formData= new FormData();
    formData.append('file',assignmentfile);
    formData.append('regnumber',regnumber)
    let result= await fetch("http://127.0.0.1:5000/uploadassignment",{
      method:"POST",
      body:formData
    });
  }
  async function getAssignments(){
    let result = await fetch(" http://127.0.0.1:5000/setassignmentslist");
    result = await result.json();
    setAssignments(result)
}

    return(
        <div>
          <div className="container">
            <h2 className="mt-4 text-dark">Assignments</h2>
            <hr className="text-dark mb-4"/>

            {
          assignments.map((item)=>{
              return(
                <div className="row mt-3">
                <div className="col-md-3 text-white bg-secondary text-center">
                  <p>Visit the Link Below To submit your assignment</p>
                <td className="bg-success"><Link to={"course/"+item.course} className="nav-link my-1 mx-5"><span className="text-white admin-edit">Go to {item.course} Assignments</span></Link></td>
                </div>
                <div className="col-md-9 bg-white">
                  <div className="container" style={{width: "auto"}}>
                    <div className="table-responsive">
                    <table className="table">
            <tbody>
              <tr>
                <td>Assignment Number:</td>
                <td>{item.id}</td>
              </tr>
              <tr>
                <td>Course:</td>
                <td>{item.course}</td>
              </tr>
              <tr>
                <td>Assignment Name:</td>
                <td>{item.assignmentname}</td>
              </tr>
              <tr>
                <td>Due Date:</td>
                <td className="bg-danger text-white">{item.duedate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
                )})
              }
    </div>  
        </div>
    )
}
