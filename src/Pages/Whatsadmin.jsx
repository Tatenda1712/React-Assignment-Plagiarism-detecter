import Footer from "../Components/Footer/Footer";
import NavbarrAdmin from "../Components/NavbarAdmin/Navbarr";
import Banner from "../Components/whats/Banner";
import Whats from "../Components/whats/Whats";
export default function Login(){
    return(
        <div>
            <NavbarrAdmin nav1={"Admin | Lecturer Login"}nav2={"Student Login"}nav4={"Manage Students"} nav3="logout" nav3link="adminlogout" nav1link="/faculty" nav2link="/studentregister" nav4link="/managestudents"/>
            <Banner/>
            <Whats/>
            <Footer/>
        </div>
    )
}