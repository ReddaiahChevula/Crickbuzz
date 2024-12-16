import React from "react";
import { Link } from "react-router-dom";
import Firevalidation from "./FirebaseValidation";

const Navbar = () => {

    return(
        <>
      <div>
       <div className="container-fluid">
        
        
              
                 <nav class="navbar navbar-expand-lg navbar-light container navbar_second">
                   <div class="container-fluid">
                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                         </button>
                      <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav me-auto">
                              <li class="nav-item">
                               <a class="nav-link active text-light" aria-current="page" href="#">MATCHES</a>
                              </li>
                              <li class="nav-item">
                                <Link to="/commentary" class="nav-link text-light">IND vs RSA </Link>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link text-light" href="#">INDA vs AUSA - Live</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link text-light" href="#">SYTW vs BRHW - Previ...</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link text-light" href="#">UAE vs OMAN - Preview</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link text-light" href="#">BEN vs KAR -Stumps</a>
                              </li>
                          </ul>
                            <ul class="navbar-nav nav_all_dropdown">
                              <li class="nav-item dropdown ">
                                   <a class="nav-link dropdown-toggle text-light " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       All
                                   </a>
                                 <ul class="dropdown-menu nav_all_dropdown_item"  >
                                     <li><a class="dropdown-item" href="#">All Videos</a></li>
                                     <li><a class="dropdown-item" href="#">Categories</a></li>
                                     <li><hr class="dropdown-divider"/></li>
                                     <li><a class="dropdown-item" href="#">Playlists</a></li>
                                 </ul>
                              </li>
                            </ul>
                      </div>
                   </div>
                </nav>
              </div>
      </div>
        </>
    )
}

export default Navbar;