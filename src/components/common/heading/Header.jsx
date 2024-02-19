import React, {useState} from 'react'
import Head from './Head'
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import './header.css'
import { HiOutlineX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import SupportEngine from '../../supportChat/SupportEngine/Index';
// import SupportEngine from '../../supportChat/SupportEngine/index';



const Header = () => {
  const [click, setClick] = useState(false)
  const location = useLocation();
  const { t } = useTranslation();

   // Check if the current location is login or signup
   const isLoginPage = location.pathname === '/login';
   const isSignupPage = location.pathname === '/signup';
   const isActive = (path) => window.location.pathname === path;

   // Render the header only if not on login or signup pages
   if (isLoginPage || isSignupPage) {
       return null;
   }

  //  // Scroll to the desired section when a RouterLink is clicked
  // const handleRouterLinkClick = (event, sectionId) => {
  //   event.preventDefault();
  //  // Ensure that the sectionId starts with '#'
  //   if (sectionId && sectionId.startsWith('#')) {
  //     document.querySelector(sectionId).scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   }  
  // };

  return (
    <>
    
       <Head />
       <header activeClassName="text-blue-500">
         <nav className='flexSB flex justify-between' >
         <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)} >
           {/* <li><Link  >About</Link></li> */}
            <li><RouterLink  to='/' className={`text-xl font-light mr-6 ${isActive('/') ? 'text-black' : ''}`}>{t('homeLink')}</RouterLink></li>
            <li><RouterLink  to='/findTutor'  className={`text-xl font-light mr-6 ${isActive('/findTutor') ? 'text-black' : ''}`}>{t('findatutorLink')}</RouterLink></li>
            <li><RouterLink  to='/becomeTutor'  className={`text-xl font-light mr-6 ${isActive('/becomeTutor') ? 'text-black' : ''}`}>{t('becometutorLink')}</RouterLink></li>
            <li><ScrollLink  to='about' smooth={true} offset={300} duration={500} className={`text-xl font-light mr-6 ${isActive('/about') ? 'text-black' : ''}`}>{t('aboujtusLink')}</ScrollLink></li>
            <li><ScrollLink  to='pricing' smooth={true} offset={-200} duration={500} className={`text-xl font-light mr-6 ${isActive('/pricing') ? 'text-black' : ''}`}>{t('priceLink')}</ScrollLink></li>
            <li><ScrollLink  to='contactUs' smooth={true} offset={200} duration={500} className={`text-xl font-light mr-6 ${isActive('/contactUs') ? 'text-black' : ''}`}>{t('contactLink')}</ScrollLink></li>
          </ul>
          <div className="social flex space-x-4 text-white font-light">
               <FaInstagram />
               <FaFacebook />
               <FaTwitter />
               <FaYoutube />
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <HiOutlineX /> : <FaBars />}
          </button>
         </nav>
        {/* <a onClick={this.scrollToTop}>To the top!</a> */}
        <SupportEngine />
       </header>
    </>
  )
}

export default Header