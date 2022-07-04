import Footer from "../Components/Footer/Footer";
import Navbarr from "../Components/Navbar/Navbarr";
//import Register from "../Components/RegisterStudent/Register";
import BannerMain from "../Components/BannerMain/Banner";
//import StudentSubmit from "../Components/StudentSubmit/StudentSubmit";
//import StudentAssignment from "../Components/StudentAssignment/StudentSubmit";
import LecturerAssignmentt from "../Components/LecturerAssignmentt/LecturerAssignmentt";

export default function LecturerAssignment(){
    return(
        <div>
            <Navbarr nav1={"Registered Courses"}nav2={"Assignments"}nav3={"logout"} nav1link="studentcourses" nav2link="studentassignments"nav3link="studentlogout"/>
            <BannerMain/>
            <LecturerAssignmentt/>
            <Footer/>
        </div>
    )
}