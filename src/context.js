import React, { useState, createContext } from 'react';
import sublinks from './data';

const AppContext = createContext();

const AppProvider = (props) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);
   const [location, setLocation] = useState({});

   //state to hold main-menu/page and the links that forms its submegamenu
   const [page, setPage] = useState({ page: '', links: [] });

   const openSidebar = () => {
      setIsSidebarOpen(true);
   };

   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };

   const openMegamenu = (text, coordinates) => {
      const page = sublinks.find((link) => link.page === text);
      setPage(page);
      setLocation(coordinates);
      setIsMegamenuOpen(true);
   };

   const closeMegamenu = () => {
      setIsMegamenuOpen(false);
   };

   return (
      <AppContext.Provider
         value={{
            isMegamenuOpen,
            isSidebarOpen,
            openMegamenu,
            openSidebar,
            closeMegamenu,
            closeSidebar,
            location,
            page,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
