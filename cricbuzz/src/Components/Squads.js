import React from "react";
import { Link } from "react-router-dom";
const Squad = ()=> {

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
                                  <Link to="/Squad" class="nav-link active text-success" href="#">Squads</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Highlights" class="nav-link text-dark" href="#">Highlights</Link>
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

                         <div className="container bg-light">
                             <div className="row">
                                <div className="col-lg-8 col-md-6 col-sm-12">
                                    <div className="d-flex justify-content-between align-content-center  squad_imag">
                                        <div className="d-flex p-2">
                                            <div>
                                                <img src="https://static.cricbuzz.com/a/img/v1/72x54/i1/c172126/team_flag.jpg" width="50px"/>
                                            </div>
                                            <div>
                                                <h4 className="fw-bold ps-2">RSA</h4>
                                            </div>
                                        </div>
                                        <div className="d-flex p-2">
                                            <div>
                                                <h4 className="fw-bold pe-2">IND</h4>
                                            </div>
                                            <div>
                                                <img src="https://static.cricbuzz.com/a/img/v1/72x54/i1/c172115/team_flag.jpg" width="50px"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-8 col-md-6 col-sm-12 mt-3 text-center">
                                    <h4>SQUAD</h4>
                                </div>

                                <div className="col-lg-8 col-md-6 col-sm-12">
                                    <hr/>
                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c537802/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Aiden Markram(C)<br/>
                                              <span className="text-muted">Batter</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Sanju Samson<br/>
                                              <span className="text-muted">WK-Batter</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c226289/player_face.jpg" />
                                            </div>
                                          </div>
                                          
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c351833/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Heinrich Klassen<br/>
                                              <span className="text-muted">Wk-Batter</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Surya Kumar Yadav (C)<br/>
                                              <span className="text-muted">Batter</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c352481/player_face.jpg" />
                                            </div>
                                          </div>
                                          
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c537800/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Ryan Rickelton<br/>
                                              <span className="text-muted">Wk-Batter</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Abhishek Sharma<br/>
                                              <span className="text-muted">Batting-Allrounder</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c153963/player_face.jpg" />
                                            </div>
                                          </div>
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c351828/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Reeza Hendricks<br/>
                                              <span className="text-muted">Batter</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Tilak Varma<br/>
                                              <span className="text-muted">Batter</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c226525/player_face.jpg" />
                                            </div>
                                          </div>
                                          
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c538836/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Tristan Stubbs<br/>
                                              <span className="text-muted">WK-Batter</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Hadrik Pandya<br/>
                                              <span className="text-muted">Batting-Allrounder</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c352482/player_face.jpg" />
                                            </div>
                                          </div>    
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c351831/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">David Miller<br/>
                                              <span className="text-muted">Batter</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Rinku Singh<br/>
                                              <span className="text-muted">Batter</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c279125/player_face.jpg" />
                                            </div>
                                          </div>
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c351832/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Marco Jansen<br/>
                                              <span className="text-muted">Bowling-Allrounder</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Axar Patel<br/>
                                              <span className="text-muted">Bowling-Allrounder</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c332897/player_face.jpg" />
                                            </div>
                                          </div>
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c351631/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Gerald Coetzee<br/>
                                              <span className="text-muted">Bowler</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Arshdeep Singh<br/>
                                              <span className="text-muted">Bowler</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c244971/player_face.jpg" />
                                            </div>
                                          </div>
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c537828/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Kesav Maharaj<br/>
                                              <span className="text-muted">Bowler</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Ravi Bishnoi<br/>
                                              <span className="text-muted">Bowler</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c226280/player_face.jpg" />
                                            </div>
                                          </div>
                                        </a>
                                    </div>
                                        <hr/>

                                    <div className="d-flex justify-content-between align-content-center  squad_round_img">
                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="pe-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c182026/player_face.jpg" />
                                            </div>
                                            <div className="mt-1">
                                              <p className="text-dark">Lutho Sipamala<br/>
                                              <span className="text-muted">Bowler</span></p>
                                            </div>
                                          </div> 
                                        </a>

                                        <a href="#" className="text-decoration-none">
                                          <div className="d-flex p-2">
                                            <div className="mt-1">
                                              <p className="text-dark">Varun Chakravarthy<br/>
                                              <span className="text-muted">Bowler</span></p>
                                            </div>
                                            <div className="ps-2">
                                              <img src="https://static.cricbuzz.com/a/img/v1/40x40/i1/c226220/player_face.jpg" />
                                            </div>
                                          </div>
                                        </a>
                                    </div>
                                        <hr/>
                                    
                                </div>

                                  <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className=" bg-light featured_videos">
                                                 <h5 className="text-success mt-3 ms-3">FEATURED VIDEOS</h5>
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
                                         </div>
                                    </div>
                                  </div>
                             </div>
                         </div>

              
          </div>
        </>
    )
}
export default Squad;