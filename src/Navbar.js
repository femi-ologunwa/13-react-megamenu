import React, { useContext } from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Navbar = () => {
   const { openSidebar, openMegamenu, closeMegamenu } = useContext(AppContext);

   const displayMegamenu = (e) => {
      console.log('hello world');
      openMegamenu();
   };

   return (
      <nav className='nav'>
         <div className='nav-center'>
            <div className='nav-header'>
               <img src={logo} alt='stripe' className='nav-logo' />
               <button className='btn toggle-btn' onClick={openSidebar}>
                  <FaBars />
               </button>
            </div>
            <ul className='nav-links'>
               <li>
                  <button className='link-btn' onMouseOver={displayMegamenu}>
                     products
                  </button>
               </li>
               <li>
                  <button className='link-btn' onMouseOver={displayMegamenu}>
                     developers
                  </button>
               </li>
               <li>
                  <button className='link-btn' onMouseOver={displayMegamenu}>
                     company
                  </button>
               </li>
            </ul>
            <button className='btn signin-btn'>Signin</button>
         </div>
      </nav>
   );
};

export default Navbar;

/*
When using onMouseOver (for hover effect) to display the sub megamenu of a main menu link, we must look for a way to hide the displayed megamenu.






*/
