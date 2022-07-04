import Login from "./Pages/Login";
import "../src/Style/bootstrap.min.css";
import "../src/Style/style.css";
import Student from "./Pages/Student";
import Admin from "./Pages/Admin";
import LecturerAdminLogin from "./Pages/LecturerAdminLogin";
import Lecturer from "./Pages/Lecturer";
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Protected from './Protected'
//import Courses from './Components/Courses/Courses'
//import Lecturers from './Components/Lecturers/Lecturers'
//import Students from './Components/Students/Students'
import SearchStudent from "./Components/searchStudent/SearchStudent";
import AdminProtected from "./AdminProtected"
import CourseUpdate from "./Pages/CourseUpdate"
import LecturerUpdate from "./Pages/LecturerUpdate"
import StudentUpdate from "./Pages/StudentUpdate"
import CoursesList from "./Pages/CoursesList";
import LecturersList from "./Pages/LecturerList";
import StudentList from "./Pages/StudentList";
import ManageStudents from"./Pages/ManageStudents";
import ManageCourses from "./Pages/ManageCourses";
import ManageLecturers from "./Pages/ManageLecturers";
import Whats from "./Pages/Whats";
import Whatsadmin from "./Pages/Whatsadmin"
import StudentCourses from "./Pages/StudentCourses"
import StudentAssignment from "./Pages/StudentAssignment"
import SubmitAssignment from './Pages/SubmitAssignment';
import LecturerAssignment from './Pages/LecturerAssignment';
import SubmittedAssignments from './Pages/SubmittedAssignments';
import PageNotFound from './Pages/PageNotFound';
import StudentPlagiarismResults from './Pages/StudentPlagiarismResults';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
       <Route path="/" exact>
         <Login/>
       </Route>
       <Route path="/whats" exact>
         <Whats/>
       </Route>
       <Route path="/whatsadmin" exact>
         <Whatsadmin/>
       </Route>
       <Route path="/faculty" exact>
         <LecturerAdminLogin/>
       </Route>
       <Route path="/studentregister" exact>
         <Login/>
       </Route>
       <Route path="/studentassignments" exact>
         <Protected Cmp={Student}/>
        {/* <Student />*/}
       </Route>
       <Route path="/course/studentassignments" exact>
         <Protected Cmp={Student}/>
        {/* <Student />*/}
       </Route>
       <Route path="/studentcourses" exact>
         <Protected Cmp={StudentCourses}/>
        {/* <Student />*/}
       </Route>
       <Route path="/course/studentcourses" exact>
         <Protected Cmp={StudentCourses}/>
        {/* <Student />*/}
       </Route>
       <Route path="/student" exact>
         <Protected Cmp={StudentCourses}/>
        {/* <Student />*/}
       </Route>
       <Route path="/course/:coursecode" exact>
         <Protected Cmp={StudentAssignment}/>
        {/* <Student />*/}
       </Route>
       <Route path="/lecturercourse/submitted/:course" exact>
         <SubmittedAssignments/>
        {/* <Student />*/}
       </Route>
       <Route path="/lecturercourse/:course" exact>
         <LecturerAssignment/>
        {/* <Student />*/}
       </Route>
       <Route path="/course/submit/:id" exact>
         <Protected Cmp={SubmitAssignment}/>
        {/* <Student />*/}
       </Route>
       <Route path="/admin" exact>
       <AdminProtected CmpAdmin ={Admin}/>
        {/* <Admin />*/}
       </Route>
       <Route path="/managestudents" exact>
       <AdminProtected CmpAdmin ={ManageStudents}/>
        {/* <Admin />*/}
       </Route>
       <Route path="/managecourses" exact>
       <AdminProtected CmpAdmin ={ManageCourses}/>
        {/* <Admin />*/}
       </Route>
       <Route path="/managelecturers" exact>
       <AdminProtected CmpAdmin ={ManageLecturers}/>
        {/* <Admin />*/}
       </Route>
       <Route path="/lecturerupdate/:id" exact>
       <AdminProtected CmpAdmin ={LecturerUpdate}/>
        {/* <Admin />*/}
       </Route>
       <Route path="/courseupdate/:id" exact>
       <AdminProtected CmpAdmin ={CourseUpdate}/>
        {/* <Admin />*/}
       </Route>
       <Route path="/lecturer" exact>
       <AdminProtected CmpAdmin={Lecturer}/>
        {/* <Lecturer />*/}
       </Route>
       <Route path="/courses" exact>
         <AdminProtected CmpAdmin={CoursesList}/>
       </Route>
       <Route path="/lecturers" exact>
         <AdminProtected CmpAdmin={LecturersList}/>
       </Route>
       <Route path="/students" exact>
         <AdminProtected CmpAdmin={StudentList}/>
       </Route>
       <Route path="/studentupdate/:regno" exact>
         <AdminProtected CmpAdmin={StudentUpdate}/>
       </Route>
       <Route path="/searchstudent" exact>
         <AdminProtected Cmp={SearchStudent}/>
       </Route>
       <Route path="/studentreport" exact>
         <Protected Cmp={StudentPlagiarismResults}/>
       </Route>
       <Route path="/*" exact>
         <PageNotFound/>
       </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
