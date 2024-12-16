import React from "react";
import { Link } from "react-router-dom";

const Highlights = () => {

    return(
        <>
          <div>

            <div className="container-fluid">
                 <div className="container bg-light">
                     <div className="row">
                        <h5 className="mt-3">South Africa vs India, 3rd T20I - Live Cricket Score, Commentary</h5>
                         <div className="col-lg-3 col-md-3 col-sm-6 mt-2 series">
                             <div>
                                 <p>Series:<a href="#" className="text-decoration-none"> India tour of South Africa,2024</a></p>
                             </div>
                         </div>

                         <div className="col-lg-3 col-md-3 col-sm-6 mt-2 series">
                             <div>
                                 <p>Venue:<a href="#" className="text-decoration-none"> SuperSport Park,Centurion</a></p>
                             </div>
                         </div>

                         <div className="col-lg-3 col-md-3 col-sm-6 mt-2 series">
                             <div>
                                 <p>Date & Time: <span> Nov 13, 05:00 PM LOCAL </span> </p>
                             </div>
                         </div>
                     </div>
                 </div>

                    <div className="container bg-light">
                      <div className="row">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                          <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarNav">
                              <ul class="navbar-nav">
                                <li class="nav-item p-2">
                                  <Link to="/Commentary" class="nav-link  text-dark" aria-current="page" href="#">Commentary</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Scorecard" class="nav-link text-dark" href="#">ScoreCard</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Squad" class="nav-link text-dark" href="#">Squads</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Highlights" class="nav-link active text-success" href="#">Highlights</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Fullcommentary" class="nav-link text-dark">Full Commentary</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Liveblog" class="nav-link text-dark" href="#">Live Blog</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Matchfacts" class="nav-link text-dark" href="#">Match Facts</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/News" class="nav-link text-dark" href="#">News</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Photos" class="nav-link text-dark" href="#">Photos</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                        <hr className="navbar_undeline" />
                      </div>
                    </div>

                          <div className="bg-light container">
                                 <div>
                                    <button className="btn btn-success ind_butn me-3">IND 1st INNs</button>
                                    <button className="btn btn-secondary ind_butn">RSA 1st INNs</button>
                                 </div>
                          </div>

                          <div className="container bg-light">
                             <div className="row">
                                <div className="col-lg-12">
                                  <nav class="navbar navbar-expand-lg navbar-light nav_highlights mt-2">
                                    <div class="container-fluid">
                                      <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                          <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">All</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link" href="#">Fours</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link" href="#">Sixes</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link" href="#">wickets</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link" href="#">Fifties</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link" href="#">Hundreds</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link" href="#">Dropped Catches</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link" href="#">UDRS</a>
                                          </li>
                                          <li class="nav-item">
                                            <a class="nav-link" href="#">Others</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </nav>
                              </div>
                          </div>

                          <div className="container bg-light">
                            <div className="row">
                                <div className="col-lg-8">
                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">19.2</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>

                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">19</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>

                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">18.5</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>

                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">18.3</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>

                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">18.1</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>

                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">18</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>

                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">17.4</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>

                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">17.2</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>

                                  <div className="d-flex">
                                      <div className="lastover p-2">
                                         <p> <span className="fw-bold">16.3</span></p>
                                      </div>
                                      <div className="lastover_para p-2">
                                         <p>Arshdeep Singh to Marco Jansen,<span className="fw-bold"> SIX</span>, in the airrrr and slammed over cover. Oh has<span className="fw-bold"> Tilak banged 
                                             his head hard on the ground</span> as he landed? Oopsy, looks so bad on the replay. Hopefully he's fine. 
                                             Hit him on the back of the head. He's up on the feet but the physio checks him for concussion. 
                                             The ball was full and outside off stump as he tried the wide yorker, Jansen got under it and middled
                                             it brilliantly to raise his <span className="fw-bold">maiden T20I fifty </span> off just 16 balls
                                          </p>
                                       </div>
                                  </div>
                                 </div>

                                 <div className="col-lg-3">
                                    <div className="col-lg-12">
                                       <div className=" bg-light featured_videos">
                                            <h5 className="text-success mt-3 ms-3">LATEST VIDEOS</h5>
                                            <a href="#" className="text-decoration-none"> <img src="https://static.cricbuzz.com/a/img/v1/290x164/i1/c572585/have-no-concerns-over-rohit.jpg" width="95%" height="150px" className="ms-2 mt-1 featured_videos_img" /> </a>
                                            <a href="#" className="text-decoration-none text-light"> <p className=" text-center featured_videos_para"><i class="fa-solid fa-play"></i>  &nbsp;Have no concerns over Rohit & Kohli's form : Gambir</p> </a>
                                        </div>

                                        <div className=" bg-light featured_videos">
                                            <a href="#" className="text-decoration-none"> <img src="https://static.cricbuzz.com/a/img/v1/290x164/i1/c572526/india-must-pick-chakaravarthy.jpg" width="95%" height="150px" className="ms-2 mt-4 featured_videos_img" /> </a>
                                            <a href="#" className="text-decoration-none text-light"> <p className=" text-center featured_videos_para"><i class="fa-solid fa-play"></i>  &nbsp;India must pick Chakravarthy for Champions Trophy : DK</p> </a>
                                        </div>

                                        <div className=" bg-light featured_videos">
                                            <a href="#" className="text-decoration-none"> <img src="https://static.cricbuzz.com/a/img/v1/290x164/i1/c572527/south-africas-middle-order-fa.jpg" width="95%" height="150px" className="ms-2 mt-4 featured_videos_img" /> </a>
                                            <a href="#" className="text-decoration-none text-light"> <p className=" text-center featured_videos_para"><i class="fa-solid fa-play"></i>  &nbsp;South Africa's Middle Order failure a cause of concern : Zaheer Khan</p> </a>
                                        </div>

                                        <div className=" bg-light more_videos">
                                             <button className="btn btn-success mt-4 mb-3 more_videos_butn">More Videos</button>
                                        </div>

                                        <div className="bg-light specials">
                                             <h5 className="text-success mt-2 ms-3">SPECIALS</h5>
                                             <a href="#" className="text-decoration-none"> <img src="https://static.cricbuzz.com/a/img/v1/300x170/i1/c571585/cooper-connolly-suffered-a-inj.jpg" width="95%" className="ms-2 mt-1 specials_img"/> </a>
                                             <a href="#" className="text-decoration-none"><h6 className="ms-2 mt-1">November 2024 - News Digest</h6></a>
                                             <p className="ms-2">News bytes that you may have missed otherwise</p>
                                             <hr/>
                                        </div>

                                        <div className="bg-light specials">
                                            <a href="#" className="text-decoration-none"> <img src="https://static.cricbuzz.com/a/img/v1/300x170/i1/c562373/understanding-that-setbacks-ca.jpg" width="95%" className="ms-2 mt-1 specials_img"/> </a>
                                            <a href="#" className="text-decoration-none"><h6 className="ms-2 mt-1">Will Young and the meaning between the milestones</h6></a>
                                            <p className="ms-2">From missed opportunities and a delayed debut to creating a Trust for aspiring cricketers in Taranaki, Will Young's story shows how patience, perspective and giving back can shape a career and a life well-lived</p>
                                            <hr/>
                                        </div>

                                        <div className="bg-light specials">
                                            <a href="#" className="text-decoration-none"> <img src="https://static.cricbuzz.com/a/img/v1/300x170/i1/c561066/in-april-the-uae-witnessed-ov.jpg" width="95%" className="ms-2 mt-1 specials_img"/> </a>
                                            <a href="#" className="text-decoration-none"><h6 className="ms-2 mt-1">How the ICC academy bounced back from a desert flood</h6></a>
                                            <p className="ms-2">When Dubai received the biggest downpour in recorded history in April, the most diversely equipped academy in world cricket was left to pick up the pieces</p>
                                            <hr/>
                                        </div>

                                        <div className=" bg-light more_videos">
                                            <button className="btn btn-success mt-2 mb-3 more_videos_butn">LATEST Videos</button>
                                        </div>

                                    </div>
                               </div>

                                </div>

                                
                             
                            
                          </div>

                       </div>

            </div>
              
          </div>
        </>
    )
}

export default Highlights;