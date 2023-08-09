import { NavLink, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Loader from './components/Loader/Loader';

function App() {

  
  const [loading, setLoading] = useState(true);
  
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      
    }, []);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // You can use 'auto' for instant scrolling
      });
    };

  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/))


  return (
    <div className=''>
      
        <Loader visible={loading}/>
     
        <div className={`App ${loading ? 'hidden' : 'visible'}`}>
      <header id='header' className={`header ${scrolled ? 'scrolled' : ''}`} >
            <div className='container d-flex flex-row align-items-center justify-content-between'>
              <div className="img col-2 d-flex justify-content-between">
                 <img onClick={handleScrollToTop} src={ images['logo-1.png'] } alt=""/>
              </div>
              <nav className="col-8 d-flex justify-content-center nav" >

                  {/* <AnchorLink className="col-2" href='#hero'>About Us</AnchorLink>  */}
                  <AnchorLink className="col-3" href='#services'>Services</AnchorLink> 
                  <AnchorLink className="col-3" href='#process'>Process</AnchorLink>
                  <AnchorLink className="col-3" href='#contact'>Contact Us</AnchorLink>{/* 
                  <AnchorLink className="col-2" href='#hero'><NavLink>Blog</NavLink></AnchorLink> */}
                  
              </nav>
              <div className='col-2 nav_button'>
                  <NavLink className="callus"  to={'tel::+998957009002'}><button  >Call Us</button> </NavLink>
              </div>
              <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            
        </header>
        <div>
        <Routes>
          <Route path="/" element={<Main />} />
            {/* <Route path="/allcourses" element={<AllCourses />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/" element={""} /> */}
        </Routes>
      </div>
      <footer className='footer'>
        <div className="container d-flex flex-column align-items-center justify-content-around footer_block">
            <div className='footer_img'><img onClick={handleScrollToTop} src={ images['logo 1.svg'] } alt=""/></div>
            <div className='privacy'><p>© 2023 Arctiq. All Rights Reserved.</p> </div>
            <div className='social_media'>
            <NavLink className='icon' to={''}><FontAwesomeIcon  icon={icon({name: 'instagram', style: 'brands'})} /></NavLink> 
            <NavLink className='icon' to={''}><FontAwesomeIcon  icon={icon({name: 'telegram', style: 'brands'})} /></NavLink> 
            <NavLink className='icon' to={''}><FontAwesomeIcon  icon={icon({name: 'twitter', style: 'brands'})} /></NavLink> 
            <NavLink className='icon' to={''}><FontAwesomeIcon  icon={icon({name: 'linkedin', style: 'brands'})} /></NavLink> 
            </div>
            
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;

