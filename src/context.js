import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isMegamenuOpen, setIsMegamenuOpen] = useState(true);

   const openSidebar = () => {
      setIsSidebarOpen(true);
   };

   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };

   const openMegamenu = () => {
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
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
