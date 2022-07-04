import right from "../../Images/right.png";
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
                  <img src={right} alt="right"  className="img-fluid right"/>
                </div>
            </div>
        </div>
          </section>
        </div>

    )
}