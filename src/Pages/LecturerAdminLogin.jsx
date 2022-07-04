import Footer from "../Components/Footer/Footer";
import Navbarr from "../Components/Navbar/Navbarr";
import AdminLogin from "../Components/AdminLogin/AdminLogin";
import LecturerLogin from "../Components/LecturerLoginBanner/LecturerLogin";
export default function Login(){
    return(
        <div>
            <Navbarr nav1={"Student Login"}nav2={"About Us"}nav3={"About Us"} nav1link="studentregister" nav2link="aboutus" nav3link="aboutus"/>
            <LecturerLogin/>
            <AdminLogin/>
            <Footer/>
        </div>
    )
}