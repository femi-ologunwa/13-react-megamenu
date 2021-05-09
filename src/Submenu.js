import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from './context';

const Submenu = () => {
   const { isMegamenuOpen, location } = useContext(AppContext);

   //setup useRef to target the submegamenu container so as to add some styling to it.
   const container = useRef(null);

   useEffect(() => {
      const submegamenu = container.current;
      const { center, bottom } = location;
      submegamenu.style.left = `${center}px`;
      submegamenu.style.top = `${bottom}px`;
   }, [location]);

   return (
      <aside
         className={`${isMegamenuOpen ? 'submenu show' : 'submenu'}`}
         ref={container}
      >
         submenu
      </aside>
   );
};

export default Submenu;
