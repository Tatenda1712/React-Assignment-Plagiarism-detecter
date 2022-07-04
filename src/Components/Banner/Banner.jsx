
import Login from "../login/Login";
import Particles from "../Particles/Particles"
export default function Banner(){
    return(
        <div>
          <section id="banner-area">
              <div className="container">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <p className="promo-title text-white-30 mb-1 nav-title"><span className="text-primary">BUSE</span> <span class="text-danger">PLAGIARISM</span> <span class="text-primary">C<span class="text-danger">O</span>P</span></p>
                      <span className="text-secondary">The Ultimate online plagiarism Checking Platiform</span>
                  </div>
                <div className="col-md-6 text-center">
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                      <Login/>
                    </div>
                </div>
            </div>
        </div>
        <Particles/>
          </section>
        </div>

    )
}