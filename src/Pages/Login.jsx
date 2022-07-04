import Footer from "../Components/Footer/Footer";
import Navbarr from "../Components/Navbar/Navbarr";
import Register from "../Components/RegisterStudent/Register";
import Banner from "../Components/Banner/Banner";
export default function Login(){
    return(
        <div>
            <Navbarr nav1={"Admin | Lecturer Login"}nav2={"About Us"}nav3={"About Us"} nav1link="faculty" nav2link="aboutus" nav3link="aboutus"/>
            <Banner/>
            <Register/>
            <Footer/>
        </div>
    )
}