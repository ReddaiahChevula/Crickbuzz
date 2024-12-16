import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Carousel from './Components/OwlCarousel';
import Commentary from './Components/Commentary';
import Scorecard from './Components/ScoreCard';
import Highlights from './Components/HighLights';
import Fullcommentary from './Components/FullCommentary';
import Liveblog from './Components/LiveBlog';
import Matchfacts from './Components/MatchFacts';
import News from './Components/News';
import Photos from './Components/Photos';
import Squad from './Components/Squads';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scrolltop from './Components/ScrollTop';
import Login from './Components/Login';
import Navbar1 from './Components/Navbar1';


function App() {
  return (
    <div className="App">
      <Scrolltop/>
      <Router>
      <Navbar1/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path='/commentary' element={<Commentary/>} />
          <Route path='/Scorecard' element={<Scorecard/>} />
          <Route path='/' element={<Scorecard/>} />
          <Route path='/Squad' element={<Squad/>} />
          <Route path='//Highlights' element={<Highlights/>} />
          <Route path='/Fullcommentary' element={<Fullcommentary/>} />
          <Route path='/Liveblog' element={<Liveblog/>} />
          <Route path='/Matchfacts' element={<Matchfacts/>} />
          <Route path='/News' element={<News/>} />
          <Route path='/Photos' element={<Photos/>} />
        </Routes>
        <Footer/>
      </Router> 
      
    </div>
  );
}

export default App;
