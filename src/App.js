
import './App.css';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import WatchHistory from './pages/WatchHistory';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchhistory' element={<WatchHistory/>}/>

        
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
