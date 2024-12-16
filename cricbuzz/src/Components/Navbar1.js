import React, { useState } from "react";
import { Link } from "react-router-dom";
import Firevalidation from "./FirebaseValidation";

const Navbar1 = () => {
    const[isColl, setIsColl] = useState(true)
    const toggleColl = ()=>setIsColl(!isColl)
    
   return(
    <>

    <div>
         <div className="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light container navbar_first" > 
              <div class="container-fluid" >
                  <Link class="navbar-brand" to="/"><img src="https://static.cricbuzz.com/images/cb_logo.svg" width="80px" /></Link>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                   </button>
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto">
                     <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="#">Live Scores</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link text-light" href="#">Schedule</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link text-light" href="#">Archives</a>
                     </li>
                     <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          News
                         </a>
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">All Stories</a></li>
                          <li><a class="dropdown-item" href="#">Premium Editorials</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Latest News</a></li>
                          <li><a class="dropdown-item" href="#">Topics</a></li>
                          <li><a class="dropdown-item" href="#">Spotlight</a></li>
                          <li><a class="dropdown-item" href="#">Opinions</a></li>
                          <li><a class="dropdown-item" href="#">Specials</a></li>
                          <li><a class="dropdown-item" href="#">Stats & Analysis</a></li>
                          <li><a class="dropdown-item" href="#">Interviews</a></li>
                          <li><a class="dropdown-item" href="#">Live Blogs</a></li>
                          <li><a class="dropdown-item" href="#">Harsha Bhogle</a></li>
                       </ul>
                      </li>
                      <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Series
                         </a>
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">New Zealand tour of India,2024</a></li>
                          <li><a class="dropdown-item" href="#">India tour of South Africa,2024</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Afghanistan vs Bangladesh in UAE,2024</a></li>
                          <li><a class="dropdown-item" href="#">India tour of Australia,2024-25</a></li>
                          <li><a class="dropdown-item" href="#">England tour of West Indies,2024</a></li>
                          <li><a class="dropdown-item" href="#">Womens Big Bash League 2024</a></li>
                          <li><a class="dropdown-item" href="#">Pakistan tour of Australia,2024 </a></li>
                          <li><a class="dropdown-item" href="#">Ranji Trophy Elite 2024-25</a></li>
                          <li><a class="dropdown-item" href="#">New Zealand tour of Sri Lanka,2024</a></li>
                          <li><a class="dropdown-item" href="#"> <a href="#" className="text-primary text-decoration-none">All Series... </a></a></li>
                       </ul>
                      </li>
                      <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Teams
                         </a>
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                         <div className="d-flex navbar_teams">
                           <div>
                              <p className="text-center">Test Teams</p>
                                <li><a class="dropdown-item" href="#">India</a></li>
                                <li><a class="dropdown-item" href="#">Afghanistan</a></li>
                                <li><a class="dropdown-item" href="#">Ireland</a></li>
                                <li><a class="dropdown-item" href="#">Pakistan</a></li>
                                <li><a class="dropdown-item" href="#">Australia</a></li>
                                <li><a class="dropdown-item" href="#">Sri Lanka</a></li>
                                <li><a class="dropdown-item" href="#">Bangladesh</a></li>
                                <li><a class="dropdown-item" href="#">England</a></li>
                                <li><a class="dropdown-item" href="#">West Indies</a></li>
                                <li><a class="dropdown-item" href="#">South Africa</a></li>
                                <li><a class="dropdown-item" href="#">Zimbabwe</a></li>
                                <li><a class="dropdown-item" href="#">New Zealand</a></li>
                           </div>
                   
                           <div>
                             <p>ASSOCIATE Videos</p>
                                 <li><a class="dropdown-item" href="#">Malaysia</a></li>
                                 <li><a class="dropdown-item" href="#">Nepal</a></li>
                                 <li><a class="dropdown-item" href="#">Germany</a></li>
                                 <li><a class="dropdown-item" href="#">Namibia</a></li>
                                 <li><a class="dropdown-item" href="#">Denmark</a></li>
                                 <li><a class="dropdown-item" href="#">Singapore</a></li>
                                 <li><a class="dropdown-item" href="#">Paupa New Guinea</a></li>
                                 <li><a class="dropdown-item" href="#">Kuwait</a></li>
                                 <li><a class="dropdown-item" href="#">Vanuatu</a></li>
                                 <li><a class="dropdown-item" href="#">Jersy</a></li>
                                 <li><a class="dropdown-item" href="#">Oman</a></li>
                                 <li><a class="dropdown-item" href="#">Fiji</a></li>
                           </div>
                         </div>
                       </ul>
                      </li>
                      <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Videos
                         </a>
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">All Videos</a></li>
                          <li><a class="dropdown-item" href="#">Categories</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Playlists</a></li>
                       </ul>
                      </li>
                      <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Rankings
                         </a>
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">ICC Rankings-Men</a></li>
                          <li><a class="dropdown-item" href="#">Icc Rankings-Women</a></li>
                       </ul>
                      </li>
                      <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          More
                         </a>
                       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">World Test Championship</a></li>
                          <li><a class="dropdown-item" href="#">World Cup Super Legue</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Photos</a></li>
                          <li><a class="dropdown-item" href="#">Mobile Apps</a></li>
                          <li><a class="dropdown-item" href="#">Carrers</a></li>
                          <li><a class="dropdown-item" href="#">Contact Us</a></li>
                       </ul>
                      </li>
                   </ul>
                     <div className="navbar_button d-flex">
                        <button className="btn btn-light btn-sm ">Cricbuzz Plus</button>
                        <p><i class="fa-solid fa-magnifying-glass"></i></p>
                        <h6>
                        <Firevalidation/>
                        </h6>
                     </div>
                  </div>
                </div>
            </nav>

         </div>
    </div>
    </>
   )
}

export default Navbar1;
