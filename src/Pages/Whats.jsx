import Footer from "../Components/Footer/Footer";
import Navbarr from "../Components/Navbar/Navbarr";
import Banner from "../Components/whats/Banner";
import Whats from "../Components/whats/Whats";
export default function Login(){
    return(
        <div>
              <Navbarr nav1={"Admin | Lecturer Login"}nav2={"Student Login"}nav3={"logout"} nav1link="/faculty" nav2link="studentregister"nav3link="studentlogout"/>
            <Banner/>
            <Whats/>
            <Footer/>
        </div>
    )
}