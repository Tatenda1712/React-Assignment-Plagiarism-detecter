import Footer from "../Components/Footer/Footer";
import NavbarrLecturer from "../Components/NavbarLecturer/Navbarr";
//import Register from "../Components/RegisterStudent/Register";
import BannerLecturer from "../Components/BannerLecturer/Banner";
//import StudentSubmit from "../Components/StudentSubmit/StudentSubmit";
//import LecturerMain from "../Components/LecturerMain/LecturerMain";
//import LecturerAssignments from '../Components/LecturerAssignments/LecturerAssignments'
import Submitted from "../Components/Submitted/Submitted";

export default function Login(){
    return(
        <div>
            <NavbarrLecturer nav1={"Upload Assignment"}nav2={"Set Assignment"}nav4={"Check Plagiarism"}  nav3="logout" nav3link="lecturerlogout" nav1link="uploadassignment" nav2link="setassignment" nav4link="checkplagiarism"/>
            <BannerLecturer/>
            <Submitted/>
            <Footer/>
        </div>
    )
}