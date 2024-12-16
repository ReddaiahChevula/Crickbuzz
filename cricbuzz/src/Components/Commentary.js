import React from "react";
import { Link } from "react-router-dom";

const Commentary = () => {
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
                            <div class="collapse navbar-collapse commentary_div" id="navbarNav">
                              <ul class="navbar-nav">
                                <li class="nav-item p-2">
                                  <Link to="/commentary" class="nav-link active text-success z-3" aria-current="page">Commentary</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Scorecard" class="nav-link text-dark z-3">ScoreCard</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Squad" class="nav-link text-dark" >Squads</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Highlights"  class="nav-link text-dark">Highlights</Link>
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
                                  <Link to="/News" class="nav-link text-dark" href="#">News</Link>
                                </li>
                                <li class="nav-item p-2">
                                  <Link to="/Photos" class="nav-link text-dark" >Photos</Link>
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
                          <div className="player_of_match col-lg-7">
                             <div> 
                               <h5 className="text-muted">IND 219/6 (20)</h5>
                               <h5>RSA 208/7 (20)</h5>
                               <p className="text-primary mt-3">India won by 11 runs</p>
                               <p className="text-muted">PLAYER OF THE MATCH</p>
                               <a href="#" className=" text-dark">Tilak Varma</a>
                             </div>
                              <hr/>
                           </div>

                        <div className="row">

                           <div className="col-lg-8">
                             <div className="col-lg-12">
                                <div className="zaheer_khan">
                                   <div className="p-3">
                                        <p>India's discipline earned them the thrilling victory: Zaheer Khan</p>
                                        <a href="#" className="text-decoration-none ">  <img src="https://static.cricbuzz.com/a/img/v1/569x320/i1/c574445/image.jpg" width="100%" className="image" /> <i class="fa-solid fa-circle-play"></i> </a>
                                        <a href="#" className="text-decoration-none icons"> <i class="fa-brands fa-twitter"></i> Tweet </a>
                                        <a href="#" className="text-decoration-none icons ps-5"> <i class="fa-brands fa-facebook-f"></i> Share </a>
                                        <a href="#" className="text-decoration-none icons ps-5"> <i class="fa-solid fa-link"></i> Comment </a>
                                   </div>
                               </div>
                             </div>
                         
                             <div className="col-lg-12 surya_kumar">
                                 <div className="mt-2">
                                        <p>The difference between the two sides today was the discipline in bowling. The batters from both teams hit almost the same number of fours and sixes, but South Africa conceded 19 extras whereas India gave 
                                            away just 6 extras. That is something the home side has to look back on. India have taken a 2-1 lead and in the process ensured the series cannot be lost. South Africa have to do all the work if they are
                                             to draw the series in Joburg. That final game is on Friday and we will be here with all the action. Until next time, goodbye and stay safe..
                                        </p>
                                        <p> <span className="fw-bold">Suryakumar Yadav:</span> Very happy. What we spoke about in the team meeting, we played the brand of cricket we discussed. That's what we have been telling them to do. They do that for the franchise, they do that in 
                                            the nets. Very happy with the way things are going. Aggression and intent is always not about talking. They have made my job easier when I see them bat like that. I feel we are in the right direction. First 
                                            time we were 6-7 minutes ahead on the field. He (Tilak) came to my room at Gqeberha and said give me a chance at No. 3, I want to do well and I said go out there and express yourself. He asked for it and he delivered. 
                                            Very happy for him and his family.
                                        </p>
                                        <p><span className="fw-bold"> Aiden Markram:</span> Proud of the effort to get that close. Good to see the contributions from the lower order. It was just down to executing what we discussed. This is a ground where you can chase 220. I feel it is almost an over by over thing. 
                                            If you win those overs you have a great chance. We will see areas to improve for the next game.
                                        </p>
                                        <p><span className="fw-bold"> Tilak Varma | Player of the Match:</span> I am okay. It was a difficult chance but I am happy we won the game. I cannot put it in words. It was my dream to play for the country and the hundred came at the right time when the team needed it. 
                                            All credit to Mr. Suryakumar Yadav, our captain. He gave me the opportunity to bat at 3 and told me to express myself. Thanks to him again (turns back at SKY and smiles). I just backed my basics. Pitch was two paced to start with and it wasn't 
                                            easy for the new batters coming in when Abhishek got out. I was ready to bat long and was waiting for one partnership.
                                        </p>
                                        <p><span className="fw-bold"> Fastest T20I 50s for South Africa (balls faced)</span><br/>
                                               15 Quinton de Kock vs WI Centurion 2023<br/>
                                               16 Marco Jansen vs Ind Centurion 2024<br/>
                                               17 Quinton de Kock vs Eng Durban 2020<br/>
                                               19 Tristan Stubbs vs Eng Bristol 2022
                                        </p>
                                        <p><span className="fw-bold"> Fastest T20I 50s vs India (balls faced)</span><br/>
                                              16 Marco Jansen Centurion 2024<br/>
                                              19 Cameron Green Hyderabad 2022<br/>
                                              20 Johnson Charles Lauderhill 2016<br/>
                                              20 Dasun Shanaka Pune 2023
                                        </p>
                                 </div>
                             </div>
                         
                             <div className="col-lg-12">
                                 <div className="zaheer_khan">
                                   <div className="p-3">
                                       <p>CricBuzz Live: South Africa vs India, 3rd T20I, Post-match show</p>
                                       <a href="#" className="text-decoration-none ">  <img src="https://static.cricbuzz.com/a/img/v1/569x320/i1/c574445/image.jpg" width="100%" className="image" /> <i class="fa-solid fa-circle-play"></i> </a>
                                       <a href="#" className="text-decoration-none icons"> <i class="fa-brands fa-twitter"></i> Tweet </a>
                                       <a href="#" className="text-decoration-none icons ps-5"> <i class="fa-brands fa-facebook-f"></i> Share </a>
                                       <a href="#" className="text-decoration-none icons ps-5"> <i class="fa-solid fa-link"></i> Comment </a>
                                  </div>
                                 </div>
                             </div>
                         
                             <div className="col-lg-12 surya_kumar">
                                <div className="mt-2">
                                     <p> <span className="fw-bold"> 21:13 Local Time, 19:13 GMT, 00:43 IST:</span> India hold their nerve to clinch this thriller and get ahead in the series.
                                       When Klaasen took down Varun it looked so on for the Proteas but Arshdeep got him. When Jansen smacked it around it 
                                       looked so tense but again Arshdeep put his hand up and got him. Two key wickets at key times and India are over the line. 
                                       At a venue where chasing has been fun, South Africa fancied their chances. Both their openers got starts and threw it away.
                                        Markram looked like finally getting a big innings but Varun prised him out. It was a real struggle for Miller at the start but
                                         with Klaasen smacking Varun for 23 runs in an over lifted the mood. When Hardik offered him a hit-me ball he got going but Axar 
                                         took a stunner to get him eventually. It looked like India had the game in the bag but Jansen smacked 26 off the penultimate over 
                                         to keep the hosts alive. Arshdeep bowled a fine last over to seal the deal.
                                     </p>
                                </div>
                             </div>

                             <div className="d-flex col-lg-12">
                                <div className="lastover">
                                  <p> <span className="fw-bold">19.6</span> </p>
                                </div>
                                <div>
                                  <p className="lastover_para">Arshdeep Singh to Gerald Coetzee, 1 run, fullish delivery, Coetzee toe-ends the slog to long-on and that will do for India.<span className="fw-bold"> They lead the series 2-1</span></p>
                                </div>
                             </div>

                             <div className="d-flex col-lg-12">
                                 <div className="lastover">
                                  <p> <span className="fw-bold">19.5</span> </p>
                                 </div>
                                 <div>
                                    <p className="lastover_para">Arshdeep Singh to Gerald Coetzee, 1 run, fullish delivery, Coetzee toe-ends the slog to long-on and that will do for India.<span className="fw-bold"> They lead the series 2-1</span></p>
                                 </div>
                             </div>

                             <div className="d-flex col-lg-12">
                                 <div className="lastover">
                                     <p> <span className="fw-bold">19.4</span></p>
                                 </div>
                                 <div>
                                    <p className="lastover_para ">Arshdeep Singh to Simelane, <span className="fw-bold">FOUR,</span> full toss, Simelane manages to loft it over cover for four. Fielder dives in the deep but loses the battle</p>
                                 </div>
                             </div>

                                  <p className="fw-bold">Andile Simelane, right handed bat, comes to the crease</p>

                             <div className="d-flex col-lg-12">
                                 <div className="lastover p-2">
                                     <p> <span className="fw-bold">19.3</span></p>
                                 </div>
                                 <div className="lastover_para p-2">
                                    <p>Arshdeep Singh to Marco Jansen, out Lbw!! Arshdeep Singh got a bit of late away tail on this fullish delivery, Jansen went back to swing it across the line, missed and got hit on the back leg.
                                      Question was if it pitched in line with the stumps. Onfield ump felt it didn't. Arshdeep put out a loud appeal and literally pleaded. India used the review to get three reds. End of a brilliant 
                                      innings from Jansen but he'll be disappointed he didn't take his team over the line.<span className="fw-bold"> Marco Jansen lbw b Arshdeep Singh 54(17) [4s-4 6s-5]</span>
                                     </p>
                                 </div>
                             </div>

                             <div className="col-lg-12 ps-4">
                                   <p className="lastover_para">Arshdeep Singh to Marco Jansen,<span className="fw-bold"> THATS OUT!!</span> Lbw!!</p>
                                   <p className="lastover_para">Arshdeep pleads for LBW and India review again. Nah, pitched outside leg again. No, that is actually in line. Looked like just outside on the first look which is why the onfield ump said no.</p>
                             </div>

                             <div className="d-flex col-lg-12">
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

                             <div className="d-flex col-lg-12">
                                 <div className="lastover p-2">
                                     <p> <span className="fw-bold">19.1</span></p>
                                 </div>
                                 <div className="lastover_para p-2">
                                    <p>Arshdeep Singh to Gerald Coetzee, leg byes, 1 run, full toss from Arshdeep Singh, Coetzee 
                                        swung and missed. Had the impact been on the back foot he would have been given out. Enough 
                                        doubt to say no on-field
                                     </p>
                                 </div>
                             </div>
                         
                             <div className="col-lg-8 load_more_butn pb-3">
                                   <button className="btn">Load More Commentary</button>
                             </div>
                            
                        </div>

                            <div className="col-lg-3">
                                <div className="">
                                    <div className="col-lg-12">
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
                                                 <button className="btn btn-success mt-4 mb-3 more_videos_butn">More Videos</button>
                                            </div>
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

export default Commentary;