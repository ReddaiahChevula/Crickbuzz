import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Carousel = () => {
  const options = {
    loop:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin: 10,
    nav: true,
    dots:false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  };

  return (
    <div className='container'>
      <div className='row mt-3'>
    <OwlCarousel className="owl-theme owl-carousel" {...options}>
        <div className="item">
             <div>
                  <a href='#' className='text-decoration-none text-dark'> <p className='p-2'> 3rd T20I .India tour of South Africa,2024 <button className='badge bg-secondary '>T20I</button> </p>
                    </a>
                    <div className='m-2'>
                      <table>
                        <tbody >
                            <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172126/south-africa.jpg' />
                              </td>
                              <td>&nbsp;South Africa</td>
                              </tr>
                              <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172115/india.jpg' />
                              </td>
                              <td>&nbsp;India</td>
                               </tr>                
                             </tbody>
                      </table>
                    </div>

                      <a href='#' className='text-decoration-none'></a>  <p className=' m-2 mt-3 text-primary'>Today, 8:30 PM</p>
                      <div className='item_last_div text-end'>
                        <p>FANTASY HANDBOOK &nbsp;  &nbsp; SCHEDULE &nbsp;</p>
                      </div>
             </div>
        </div>
        <div class="item">
             <div>
                  <a href='#' className='text-decoration-none text-dark'> <p className='p-2'> 25th Match .Womens Big Bash League <button className='badge bg-secondary '>T20I</button> </p>
                    </a>
                    <div className='m-2'>
                      <table>
                        <tbody >
                            <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172403/hobart-hurricanes-women.jpg' />
                              </td>
                              <td>&nbsp;HBHW</td>
                              <td>106-1(12)</td>
                              </tr>
                              <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172401/adelaide-strikers-women.jpg' />
                              </td>
                              <td>&nbsp;ADSW</td>
                               </tr>                
                             </tbody>
                      </table>
                    </div>

                      <a href='#' className='text-decoration-none'></a>  <p className=' m-2 mt-3 text-danger'>Adelaide Strikers Women opt to bowl</p>
                      <div className='item_last_div text-end'>
                        <p>FANTASY HANDBOOK &nbsp;  &nbsp; SCHEDULE &nbsp;</p>
                      </div>
             </div>
        </div>
        <div class="item">
             <div>
                  <a href='#' className='text-decoration-none text-dark'> <p className='p-2'> 1st ODI .Sri Lanka vs New Zealand <button className='badge bg-secondary '>T20I</button> </p>
                    </a>
                    <div className='m-2'>
                      <table>
                        <tbody >
                            <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172119/sri-lanka.jpg' />
                              </td>
                              <td>&nbsp;Sri Lanka</td>
                              </tr>
                              <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172128/new-zealand.jpg' />
                              </td>
                              <td>&nbsp;New Zealand</td>
                               </tr>                
                             </tbody>
                      </table>
                    </div>

                      <a href='#' className='text-decoration-none'></a>  <p className=' m-2 mt-3 text-info'>Today, 02:30 PM</p>
                      <div className='item_last_div text-end'>
                        <p>FANTASY HANDBOOK &nbsp;  &nbsp; SCHEDULE &nbsp;</p>
                      </div>
             </div>
        </div>
        <div class="item">
             <div>
                  <a href='#' className='text-decoration-none text-dark'> <p className='p-2'> 1st T20I .Netherlands tour of Oman <button className='badge bg-secondary '>T20I</button> </p>
                    </a>
                    <div className='m-2'>
                      <table>
                        <tbody >
                            <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172353/oman.jpg' />
                              </td>
                              <td>&nbsp;Oman</td>
                              </tr>
                              <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172138/netherlands.jpg' />
                              </td>
                              <td>&nbsp;Netherlands</td>
                               </tr>                
                             </tbody>
                      </table>
                    </div>

                      <a href='#' className='text-decoration-none'></a>  <p className=' m-2 mt-3 text-success'>Today, 03:30 PM</p>
                      <div className='item_last_div text-end'>
                        <p>FANTASY HANDBOOK &nbsp;  &nbsp; SCHEDULE &nbsp;</p>
                      </div>
             </div>
        </div>
        <div class="item">
             <div>
                  <a href='#' className='text-decoration-none text-dark'> <p className='p-2'> 3rd ODI .Bangladesh vs Afghanistan <button className='badge bg-secondary '>T20I</button> </p>
                    </a>
                    <div className='m-2'>
                      <table>
                        <tbody >
                            <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172120/bangladesh.jpg' />
                              </td>
                              <td>&nbsp;Bangladesh</td>
                              <td className='ps-5'>244-8 (50)</td>
                              </tr>
                              <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172188/afghanistan.jpg' />
                              </td>
                              <td>&nbsp;Afghanistan</td>
                              <td className='ps-5'>246-5 (48.2)</td>
                               </tr>                
                             </tbody>
                      </table>
                    </div>

                      <a href='#' className='text-decoration-none'></a>  <p className=' m-2 mt-3 text-danger'>Afghanistan won by 5 wkts</p>
                      <div className='item_last_div text-end'>
                        <p>FANTASY HANDBOOK &nbsp;  &nbsp; SCHEDULE &nbsp;</p>
                      </div>
             </div>
        </div>
        <div class="item">
             <div>
                  <a href='#' className='text-decoration-none text-dark'> <p className='p-2'> 1st Unofficial Test .Sri Lanka vs Pak.. <button className='badge bg-secondary '>T20I</button> </p>
                    </a>
                    <div className='m-2'>
                      <table>
                        <tbody >
                            <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172150/sri-lanka-a.jpg' />
                              </td>
                              <td>&nbsp;Sri Lanka</td>
                              <td className='ps-5'>115 & 214-4</td>
                              </tr>
                              <tr>
                              <td>
                                 <img src='https://static.cricbuzz.com/a/img/v1/25x18/i1/c172375/pakistan-a.jpg' />
                              </td>
                              <td>&nbsp;Pakistan</td>
                              <td className='ps-5'>258</td>
                               </tr>                
                             </tbody>
                      </table>
                    </div>

                      <a href='#' className='text-decoration-none'></a>  <p className=' m-2 mt-3 text-danger'>Day 3: Lunch Break - Sri Lanka A lead by...</p>
                      <div className='item_last_div text-end'>
                        <p>FANTASY HANDBOOK &nbsp;  &nbsp; SCHEDULE &nbsp;</p>
                      </div>
             </div>
        </div>
        
    </OwlCarousel>
      </div>
    </div>
  );
};

export default Carousel;