import Footer from "../Components/Footer/Footer";
import NavbarrAdmin from "../Components/NavbarAdmin/Navbarr";
//import Register from "../Components/RegisterStudent/Register";
import AdminBanner from "../Components/BannerAdmin/AdminBanner";
import Courses from "../Components/Courses/Courses";
//import StudentSubmit from "../Components/StudentSubmit/StudentSubmit";
//import AdminMain from "../Components/AdminMain/AdminMain";
//import Students from "../Components/Students/Students"


export default function Login(){
    return(
        <div>
            <NavbarrAdmin nav1={"Manage Courses"}nav2={"Manage Lecturers"}nav4={"Manage Students"} nav3="logout" nav3link="adminlogout" nav1link="/managecourses" nav2link="/managelecturers" nav4link="/managestudents"/>
            <AdminBanner/>
            <Courses/>
            <Footer/>
        </div>
    )
}