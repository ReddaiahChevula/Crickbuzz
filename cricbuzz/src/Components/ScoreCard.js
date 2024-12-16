import React from "react";
import { Link } from "react-router-dom";
const Scorecard = () => {

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
                                  <Link to="/Commentary" class="nav-link  text-dark" aria-current="page">Commentary</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/" class="nav-link active text-success" href="#">ScoreCard</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Squad"  class="nav-link text-dark" href="#">Squads</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link class="nav-link text-dark" to="/Highlights">Highlights</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Fullcommentary" class="nav-link text-dark">Full Commentary</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Liveblog" class="nav-link text-dark">Live Blog</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Matchfacts" class="nav-link text-dark">Match Facts</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link class="nav-link text-dark" to="/News">News</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link class="nav-link text-dark" to="/Photos">Photos</Link>
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
                          <div href="Commentary" className="border col-12 col-md-8 col-lg-8 p-2" >
                            <table className="table" style={{width:'100%'}}>
                               <thead className="thead-dark"> 
                                 <tr><th>Batter</th><th>B</th><th>R</th><th>4s</th><th>6s</th><th>SR</th></tr>
                                 </thead>
                                 
                                      <tr><td>Rinku Singh</td><td>16</td><td>47</td><td>0</td><td>0</td> <td>247</td></tr>
                                      <tr><td>Tilak Varma</td><td>52</td><td>107</td><td>14</td><td>8</td><td>201</td></tr>
                                      <tr><td>Sam Konstas</td><td>14</td><td>41</td><td>0</td><td>0</td><td>280</td></tr>
                                      <thead className="thead-dark"> 
                                      <tr>
                                       
                                       <th>Bowler</th><th>O</th><th>M</th><th>R</th><th>W</th><th>ECO</th></tr></thead> 
                                       <tr><td>Nitish Reddy</td><td>2</td><td>0</td><td>5</td><td>0</td><td>2.50</td></tr>
                                       <tr><td>Arshdeep Singh </td><td>4</td><td>0</td><td>18</td><td>2</td><td>4.25</td></tr>
                                       <tr><td> Rinku Singh </td><td>1</td><td>0</td><td>5</td><td>0</td><td>5</td></tr>
                               
                            </table>
                          </div>

                              <div className="col-lg-4 col-md-8 col-sm-8 mb-4">
                                    <div className="row">
                                        <div className="col-12">
                                           <h5 className="text-success">LATEST NEWS</h5>
                                        </div>
                                        <div className="col-lg-4 mt-2 live_blog_letest_news_img">
                                            <img src="https://static.cricbuzz.com/a/img/v1/100x77/i1/c574714/the-2025-edition-will-be-the-f.jpg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#" className="text-decoration-none text-dark"> Amid uncertainty,ICC sends CT trophy to pakistan for official tour </a>
                                            <p>7hago</p>
                                        </div>
                                        <hr/>
          
                                        <div className="col-lg-4 live_blog_letest_news_img">
                                            <img src="https://static.cricbuzz.com/a/img/v1/100x77/i1/c574717/rishabh-pant-kl-rahul-shreya.jpg" className="w-100" />
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#" className="text-decoration-none text-dark"> IPL Auction to have two sets of marquee players </a>
                                            <p>8hago</p>
                                        </div>
                                        <hr/>
          
                                        <div className="col-lg-4 mt-2 live_blog_letest_news_img">
                                            <img src="https://static.cricbuzz.com/a/img/v1/100x77/i1/c574712/south-africa-can-no-longer-win.jpg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#" className="text-decoration-none text-dark"> Heinrich Klassen bemoans South Africa's shrinking status </a>
                                            <p>9hago</p>
                                        </div>
                                        <hr/>
          
                                        <div className="col-lg-4 mt-2 live_blog_letest_news_img">
                                            <img src="https://static.cricbuzz.com/a/img/v1/100x77/i1/c574711/kashyap-bakle-left-and-sneha.jpg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#" className="text-decoration-none text-dark"> Ranji wrap: Shami shines on return; Goa fly with two triple centuries </a>
                                            <p>10hago</p>
                                        </div>
                                        <hr/>
                                        
                                        <div className="col-lg-4  live_blog_letest_news_img">
                                            <img src="https://static.cricbuzz.com/a/img/v1/100x77/i1/c574683/maxwell-hit-5-fours-and-3-sixe.jpg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#" className="text-decoration-none text-dark"> Maxwell,pacers give Australia 1-0 lead </a>
                                            <p>11hago</p>
                                        </div>
                                        <hr/>
          
                                        <div className="col-lg-4 live_blog_letest_news_img">
                                            <img src="https://static.cricbuzz.com/a/img/v1/100x77/i1/c574655/ashraful-right-has-level-3-c.jpg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#" className="text-decoration-none text-dark"> Ashraful kick-starts coaching career at Rangpur Riders </a>
                                            <p>7hago</p>
                                        </div>
                                        
                                        <div className="col-12 text-center mt-3">
                                          <button className="btn btn-success">More News</button>
                                        </div>

                                    </div>
                               </div>
                      </div>
                   </div>        

          </div>
        </>
    )
}

export default Scorecard;