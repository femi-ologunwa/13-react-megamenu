import React, { useContext } from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Navbar = () => {
   const { openSidebar, openMegamenu, closeMegamenu } = useContext(AppContext);

   const displayMegamenu = (e) => {
      //get the menu item that was hovered upon, so that we can subsequently get the text and its coordinates (location x,y on page). The coordinates will help to properly position its sub megamenu under it.

      //get the menu item
      const menuLink = e.target;
      console.log(menuLink);

      //get the menu item text
      const menuLinkText = e.target.textContent;
      console.log(menuLinkText);

      //get the coordinates of the menu item - The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
      const menuLinkPageCoordinates = e.target.getBoundingClientRect();
      console.log(menuLinkPageCoordinates);

      //get the center of the menuLink so as to center align the container of its submegamenu with it.
      const center =
         (menuLinkPageCoordinates.left + menuLinkPageCoordinates.right) / 2;
      console.log(center);

      //get the bottom coord of the menuLink so as to position the container of its submegamenu properly from the bottom. We will push up the submenu container by 3px
      const bottom = menuLinkPageCoordinates.bottom - 3;
      console.log(bottom);

      openMegamenu(menuLinkText, { center, bottom });
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
