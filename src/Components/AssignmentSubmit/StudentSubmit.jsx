import "./studentsub.css"; 
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import{withRouter} from 'react-router-dom'

 function StudentSubmit(props){
  const [file, setAssignmentFile]= useState("");
  const [assignments,setAssignments]= useState([]);
  const [regnumber,setRegnumber]=useState('');
  const [assignmentname,setAssignmentname]=useState('');
  const [lecturername,setLecturername]=useState('');
  const [coursecode,setCoursecode]=useState('');
  const [tatenda, setTatenda]=useState('')
  const [validate,setValidate]=useState('');
  useEffect( async()=>{
      getAssignments();
  },[])
  async function getAssignments(){
    let result = await fetch(" http://127.0.0.1:5000/submitassignment/"+props.match.params.id);
    result = await result.json();
    setAssignments(result);

}
 async function submitAssignment(){
  let data= JSON.parse(sessionStorage.getItem('user-info'))
  setRegnumber(data.regno)
  setAssignmentname(assignments.assignmentname)
  setLecturername(assignments.lecturername)
  setCoursecode(assignments.course)
  setLecturername(assignments.lecturername)

  if(regnumber==''|| regnumber=="undefined"){
    setValidate("Intenal Server Error, Please try again!!!")
    setTatenda("")
  }
  else if(assignmentname=='' || assignmentname=="undefined"){
    setValidate("Internal Server Error, Please try again!!!")
    setTatenda("")
  }
  else if(lecturername=='' || lecturername=="undefined"){
    setValidate("Internal Server Error, Please try again!!!")
    setTatenda("")
  }
  else if(!file){
    setValidate("No assignment selected")
    setTatenda("")
  }
  else if (coursecode=='' || coursecode=="undefined"){
    setValidate("Internal Server Error, Please try again!!!")
    setTatenda("")
  }
  else{
  const formData=new FormData();
  formData.append('file',file);
  formData.append('assignmentname',assignmentname);
  formData.append('lecturername',lecturername);
  formData.append('coursecode',coursecode);
  formData.append('regnumber',regnumber);
  let result= await fetch("http://127.0.0.1:8000/api/uploadassignment",{
    method:'POST',
    body:formData
  })
  setTatenda("Assignment Uploaded Successfully")
  setValidate("")
  }
}


    return(
        <div>
          <div className="container">
    <h2 className="mt-4 text-dark">Submit Assignment {props.match.params.id}</h2>
            <hr className="text-dark mb-4"/>
                <div className="row my-3">
                <div className="col-md-3 text-white bg-secondary text-center">
                <input type="file" className="form-control-file mt-5 mx-3" onChange={(e)=>setAssignmentFile(e.target.files[0])}></input>
                  <button type="submit" onClick={submitAssignment} className="btn btn-danger my-3 text-right">Submit Assignment</button>
                </div>
                <div className="col-md-9 bg-white">
                  <div className="container" style={{width: "auto"}}>
                    <div className="table-responsive">
                    <table className="table">
            <tbody>
              <tr>
                <td>Assignment Number:</td>
                <td>{assignments.id}</td>
              </tr>
              <tr>
                <td>Course:</td>
                <td>{assignments.course}</td>
              </tr>
              <tr>
                <td>Assignment Name:</td>
                <td>{assignments.assignmentname}</td>
              </tr>
              <tr>
                <td>Lecturer Name:</td>
                <td>{assignments.lecturername}</td>
              </tr>
              <tr>
                <td>Due Date:</td>
                <td className="bg-danger text-white">{assignments.duedate}</td>
              </tr>
            </tbody>
          </table>
          <h5 className="text-success">{tatenda}</h5>
          <h5 className="text-danger">{validate}</h5>
        </div>
      </div>
    </div>
  </div>
    </div>  
        </div>
    )
}
export default withRouter(StudentSubmit)
