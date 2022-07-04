import Footer from "../Components/Footer/Footer";
import Navbarr from "../Components/Navbar/Navbarr";
//import Register from "../Components/RegisterStudent/Register";
import BannerMain from "../Components/BannerMain/Banner";
import StudentSubmit from "../Components/StudentSubmit/StudentSubmit";

export default function Login(){
    return(
        <div>
            <Navbarr nav1={"Registered Courses"}nav2={"Assignments"}nav3={"logout"} nav1link="studentcourses" nav2link="studentassignments"nav3link="studentlogout"/>
            <BannerMain/>
            <StudentSubmit/>
            <Footer/>
        </div>
    )
}