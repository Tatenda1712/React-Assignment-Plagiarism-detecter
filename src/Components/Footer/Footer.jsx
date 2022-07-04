import React from "react";
import facebook from "../../Images/social/facebook.png";
import instagram from "../../Images/social/instagram.png";
import twitter from "../../Images/social/twitter.png";
import youtube from "../../Images/social/youtube.png";
import "./footer.css";



export default function Footer(){
    return(
        <div>
             <footer id="footer" className="footer-bottom text-white py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <h4 className="footer-heading">Ultra Success</h4>
              <p className="text-white-50 infor-size">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto nihil qui cum quo magnam dicta perferendis officiis ullam fuga!</p>
            </div>
            <div className="col-lg-4 col-12">
              <h4 className="footer-heading mb-3">Buse on Social Media</h4>
       <section id="social-media">
        <div className="container text-center">
            <div className="social-icons">
                <a href="tatenda"><img src={facebook} alt="facebook"/></a>
                <a href="tatenda"><img src={instagram} alt="instagram"/></a>
                <a href="tatenda"><img src={youtube} alt="yoututbe"/></a>
                <a href="tatenda"><img src={twitter} alt="twitter"/></a>
            </div>
        </div>
    </section>
            </div>
            <div className="col-lg-2 col-12">
              <h4 className="footer-heading">Information</h4>
              <div className={"d-flex flex-column flex-wrap"}>
                <a href="tatenda" className="text-white-50 pb-1 infor-size">About Us</a>
                <a href="tatenda" className="text-white-50 pb-1 infor-size">Delivery Information</a>
                <a href="tatenda" className="text-white-50 pb-1 infor-size">Privacy Policy</a>
                <a href="tatenda" className="text-white-50 pb-1 infor-size">Terms & Conditions</a>   
              </div>
            </div>
            <div className="col-lg-2 col-12">
              <h4 className="footer-heading">Useful Links</h4>
              <div className="d-flex flex-column flex-wrap">
                <a href="tatenda" className="text-white-50 pb-1 infor-size">Buse Portal</a>
                <a href="tatenda" className="text-white-50 pb-1 infor-size">Buse Moodle</a>
                <a href="tatenda" className="text-white-50 pb-1 infor-size">Buse Library</a>
                <a href="tatenda" className="text-white-50 pb-1 infor-size">Buse Website</a>   
              </div>
            </div>
          </div>
        </div> 
      </footer>
      <div className="copyright text-center footer-bottom text-white py-2 infor-size">
        <p>&copy;Copyrights 2021.Designed By <a href="tatenda" className="nav-link text-white"><span className="text-danger">B</span><span className="text-primary">1850366</span></a></p>
      </div>
        </div>
    );
}