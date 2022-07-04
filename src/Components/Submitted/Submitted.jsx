import "./studentsub.css"; 
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import{withRouter} from 'react-router-dom'

 function Submitted(props){
  const [assignmentfile, setAssignmentFile]= useState("");
  const [assignments,setAssignments]= useState([]);
  let [course,setCourse]=useState('')
  useEffect( async()=>{
      getAssignments();
  },[])
  console.warn(props.match.params.course)
  async function getAssignments(){
    let result = await fetch(" http://127.0.0.1:5000/submitted/"+props.match.params.course);
    result = await result.json();
    setAssignments(result)
    console.warn(result)
}

    return(
        <div>
          <div className="container">
            <h2 className="mt-4 text-dark">{props.match.params.course} Submitted Assignments</h2>
            <hr className="text-dark mb-4"/>
            <h4 className="text-center mb-3 bg-danger p-2">Check Plagiarism</h4>
            <table className="table table-light table-hover table-striped ">
                    <thead className="thead-dark">
                      <tr className="table-dark">
                        <th>Student RegNumber</th>
                        <th>Submitted At</th>
                        <th>Assignment Name</th>
                        <th>Assignment</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            assignments.map((item)=>{
                                return(
                                <tr>
                                <td>{item.regnumber}</td>
                                <td>{item.updated_at}</td>
                                <td>{item.assignmentname}</td>
                                <td className="nav-link text-primary"><a href={"http://localhost/Laravel/Laravel/storage/app/"+item.url}/>Download<a/></td>
                              </tr>
                            )})
                        }
                    </tbody>
                  </table>
    <div className="btn-group text-center">
      <button className="btn btn-secondary mx-5 text-center">Download Assignments</button>

    </div>
    </div>  
        </div>
    )
}
export default withRouter(Submitted)
