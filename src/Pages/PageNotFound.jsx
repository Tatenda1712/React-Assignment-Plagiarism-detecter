import notfound from '../Images/notfound.png'
import Navbarr from "../Components/Navbar/Navbarr";
import Footer from "../Components/Footer/Footer";

export default function PageNotFound(){
    return(
        <div className="continer-fluid">
            <Navbarr nav1={"Student Login"}nav2={"Lecturer | Admin Login"}nav3={"Admin Login"} nav1link="/studentregister" nav2link="/faculty"nav3link="/faculty"/>
            <div className="container">
                <h1 className="text-danger text-center mt-3">Opps!!!</h1>
            <h2 className="text-center mt-1"><span className="text-primary">404 </span>Page Not Found</h2>
            <img src={notfound} alt="not found" className="img-fluid" style={{width:"60%"}}/>
            </div>
            <Footer/>
        </div>
    )
}