import React from "react";


const Footer = () => {

    return(
        <>
        <div>
          <div className="container-fluid bg-dark mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                        <div>
                            <img src="https://static.cricbuzz.com/images/cb_logo.svg" width="100%" height="50px"  />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                        <div className="footer_icons">
                            <h5>MOBILE SITE & APPS</h5>
                              <a href="#" className="text-decoration-none text-white"><h6><i class="fa-solid fa-globe f_icons mt-4"></i> m.cricbuzz.com</h6></a>  
                              <a href="#" className="text-decoration-none text-white"><h6><i class="fa-brands fa-android f_icons"></i> Android</h6></a>  
                              <a href="#" className="text-decoration-none text-white"><h6><i class="fa-brands fa-apple f_icons"></i> IOS</h6></a>  
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                        <div className="footer_icons">
                            <h5>FOLLOW US ON</h5>
                              <a href="#" className="text-decoration-none text-white"><h6><i class="fa-brands fa-facebook-f f_icons mt-4"></i> Facebook</h6> </a>   
                              <a href="#" className="text-decoration-none text-white"><h6><i class="fa-brands fa-twitter f_icons"></i> Twitter</h6> </a>   
                              <a href="#" className="text-decoration-none text-white"><h6><i class="fa-brands fa-youtube f_icons"></i> YouTube</h6> </a>   
                              <a href="#" className="text-decoration-none text-white"><h6><i class="fa-brands fa-pinterest f_icons"></i> Pinterest</h6> </a>   
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                        <div className="footer_icons">
                            <h5>Company</h5>
                              <a href="#" className="text-decoration-none text-white"><h6 className="mt-4">Careers</h6> </a>   
                              <a href="#" className="text-decoration-none text-white"><h6>Advertise</h6> </a>   
                              <a href="#" className="text-decoration-none text-white"><h6>Privacy Policy</h6> </a>   
                              <a href="#" className="text-decoration-none text-white"><h6>Terms of Use</h6> </a>   
                              <a href="#" className="text-decoration-none text-white"><h6>Cricbuzz TV Ads</h6> </a>   
                        </div>
                    </div>

                    <div className="text-center footer_copyright mt-3">
                        <p><i class="fa-regular fa-copyright"></i> 2024 CricBuzz.com, Times Internet Limited.All rights reserved | <a href="#" className="text-decoration-none">The Times of India</a> | <a href="#" className="text-decoration-none">Navbharat Times</a></p>
                    </div>


                </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Footer;