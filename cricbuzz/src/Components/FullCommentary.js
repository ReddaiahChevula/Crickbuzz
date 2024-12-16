import React from "react";
import { Link } from "react-router-dom";

const Fullcommentary = () => {

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
                                  <Link to="/Commentary" class="nav-link active text-dark" aria-current="page" href="#">Commentary</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Scorecard" class="nav-link text-dark" href="#">ScoreCard</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Squad" class="nav-link text-dark" href="#">Squads</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Highlights" class="nav-link text-dark" href="#">Highlights</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Fullcommentary" class="nav-link active text-success" href="#">Full Commentary</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Liveblog" class="nav-link text-dark">Live Blog</Link>
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
                                    <button className="btn btn-success ind_butn me-3">Preview</button>
                                    <button className="btn btn-secondary ind_butn me-3">IND 1st INNs</button>
                                    <button className="btn btn-secondary ind_butn">RSA 1st INNs</button>
                                 </div>
                          </div>


                          <div className="container bg-light">
                            <div className="row">
                                 <div className="col-lg-3 mt-4">
                                     <div className="bg-secondary">
                                        <h5 className="ps-3">MATCH INFO</h5>
                                     </div>

                                     <div className="d-flex match_info">
                                        <div className="p-2">
                                            <span className="fw-bold">Match</span>
                                        </div>
                                        <div className="p-2">
                                            <p>RSA v IND, India tour of South Africa, 2024</p>
                                        </div>
                                     </div>
                                     <hr/>

                                     <div className="d-flex match_info">
                                        <div className="p-2">
                                            <span className="fw-bold">Date</span>
                                        </div>
                                        <div className="p-2">
                                            <p>Nov 13, 2024</p>
                                        </div>
                                     </div>
                                     <hr/>

                                     <div className="d-flex match_info">
                                        <div className="p-2">
                                            <span className="fw-bold">Toss</span>
                                        </div>
                                        <div className="p-2">
                                            <p>South Africa (Bowling)</p>
                                        </div>
                                     </div>
                                     <hr/>

                                     <div className="d-flex match_info">
                                        <div className="p-2">
                                            <span className="fw-bold">Time</span>
                                        </div>
                                        <div className="p-2">
                                            <p>8:30 PM GMT</p>
                                        </div>
                                     </div>
                                     <hr/>

                                     <div className="d-flex match_info">
                                        <div className="p-2">
                                            <span className="fw-bold">Venue</span>
                                        </div>
                                        <div className="p-2">
                                            <p>SuperSport Park, Centurion</p>
                                        </div>
                                     </div>
                                     <hr/>

                                 </div>

                                 <div className="col-lg-7 mt-4 match_info_para">
                                    <div>
                                        <p>The national anthems are done. Both teams have made one change each. South Africa have left out their 
                                            leggie Peter and brought in a pacer - Sipamla, while India have bolstered their batting by bringing 
                                            in an all-rounder - Ramandeep - in place of a regular bowler. Spin has not played a role here but 
                                            the wicket seems dry. Will there be any help for the slower bowlers? The Indian openers walk out to
                                             the middle. Jansen will get us underway. The countdown begins..3..2..1..PLAY
                                        </p>
                                        <p>
                                           We have made changes to our pre-toss Expert XI teams. You can check them out at Fantasy Handbook
                                        </p>

                                        <span className="fw-bold">Teams:</span>

                                        <p><span className="fw-bold"> India </span> (Playing XI): Sanju Samson(w), Abhishek Sharma, Suryakumar Yadav(c), Tilak Varma, Hardik Pandya, 
                                            Rinku Singh, Axar Patel, Ramandeep Singh, Arshdeep Singh, Ravi Bishnoi, Varun Chakaravarthy
                                        </p>

                                        <p><span className="fw-bold"> South Africa</span> (Playing XI): Ryan Rickelton, Reeza Hendricks, Aiden Markram(c), Tristan Stubbs, Heinrich Klaasen(w), David Miller, Marco Jansen, 
                                            Andile Simelane, Gerald Coetzee, Keshav Maharaj, Lutho Sipamla
                                        </p>

                                        <p><span className="fw-bold"> Suryakumar Yadav:</span> It is okay. We have done well in the last two games while batting first. The boys have come out with 
                                            clear plans and are executing it, I have been really happy 
                                            with that. Just be clear, go out and enjoy yourself (the message from him and the management).
                                             These boys have made my job easier. We have one change - Ramandeep makes his debut. Avesh has 
                                             done well for us but one of the two bowlers had to make a sacrifice.
                                        </p>

                                        <p><span className="fw-bold"> Aiden Markram:</span> We are going to bowl first again. The wicket looks good. Not quite at our best. We are 
                                            making slow progress. The bowlers did a good job in the last game. The batters need to spend time in
                                             the middle and not be too desperate. We have full trust in our batting unit and hope we do something 
                                             special tonight.
                                        </p>

                                        <span className="fw-bold">South Africa have won the toss and have opted to field</span>

                                        <p><span className="fw-bold"> Pitch and Conditions:</span> "There is a big rain storm that came last night and hope it stays away. Looks like a 
                                            bit dry. A typical Centurion wicket will have a bit of sheen which is not there. The spinners will 
                                            have a part to play. The batters enjoy batting here because of the bounce. The boundary size is 
                                            pretty small; 59 and 64 meters square and 82 meters down the ground," inform Shaun Pollock and 
                                            Ashwell Prince.
                                        </p>

                                        <p><span className="fw-bold"> Update:</span> VVS Laxman hands a cap to Hardik Pandya who in return 
                                            hands it over to Ramandeep Singh. The all-rounder is going to make his debut.
                                        </p>

                                        <p>"Hello from Centurion, where a hot morning has melted into a cloudy afternoon. A thunderstorm last night soaked
                                             the place, but the thirsty earth has swallowed every last drop" - greets <span className="fw-bold"> Telford Vice</span> from the venue.
                                        </p>

                                        <p> <span className="fw-bold"> 16:00 Local Time, 14:00 GMT, 19:30 IST:</span> The series is tied 1-1 as we welcome you to the third encounter. India won the first T20 in a 
                                            comprehensive manner thanks to a hundred by Sanju Samson while South Africa clinched a low-scoring 
                                            second T20. India have looked the better of the two sides even though the series is level and the 
                                            reason for that is their bowling attack, especially the spinners - Varun Chakravarthy and Ravi 
                                            Bishnoi. The pair have picked up 12 wickets between them in the two games and comfortably outbowled 
                                            South Africa's spinners. They almost defended a partly total of 124 in the second game and were 
                                            denied a victory by Tristan Stubbs. South Africa's batters have to come up with better plans to 
                                            counter the Indian duo if they're to take the lead in the series. The winner of today's game will 
                                            ensure they don't lose the series and that is a big incentive for the two teams. SKY has lost the 
                                            toss in both games but he was happy to bat first in both. Will the flip of the coin go his way today? 
                                            Or will it be 3 out of 3 for Markram? We shall find out soon..
                                        </p>

                                        <p><span className="fw-bold"> Preview </span> by <span className="fw-bold"> Telford Vice</span> </p>
                                        <p>India were clear winners at Kingsmead on Friday. South Africa hung tough in a tight game at St George's Park on Sunday to level matters. What might Wednesday in 
                                            Centurion bring? And Friday at the Wanderers?
                                        </p>

                                        <p>For a men's T20I series that was short on context at the outset, the prospect of two more games is suddenly appealing. To avert a drawn rubber, another three would 
                                            have been better. Indeed, CSA did ask the BCCI to play five matches. India countered that the series,
                                             postponed because of the pandemic, originally consisted of three games. So the boards compromised
                                              on four.
                                        </p>
                                    </div>
                                 </div>
                            </div>
                          </div>



              </div>
         </div>
        </>
    )
}

export default Fullcommentary;