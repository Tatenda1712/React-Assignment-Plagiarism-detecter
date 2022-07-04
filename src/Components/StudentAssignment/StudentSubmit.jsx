import "./studentsub.css"; 
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import{withRouter} from 'react-router-dom'

 function StudentSubmit(props){
  const [assignmentfile, setAssignmentFile]= useState("");
  const [assignments,setAssignments]= useState([]);
  let [course,setCourse]=useState('')
  useEffect( async()=>{
      getAssignments();
  },[])
  async function getAssignments(){
    let result = await fetch(" http://127.0.0.1:5000/setstudentassignments/"+props.match.params.coursecode);
    result = await result.json();
    setAssignments(result)
}

    return(
        <div>
          <div className="container">
            <h2 className="mt-4 text-dark">{props.match.params.coursecode} Assignments</h2>
            <hr className="text-dark mb-4"/>

            {
          assignments.map((item)=>{
              return(
                <div className="row my-3">
                <div className="col-md-3 text-white bg-secondary text-center">
                <td ><Link to={"submit/"+item.id} className="nav-link my-5 mx-5 bg-success"><span className="text-white admin-edit bg-success">Submit {item.assignmentname} Assignment</span></Link></td>
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
export default withRouter(StudentSubmit)
