import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from './context';

const Submenu = () => {
   const {
      isMegamenuOpen,
      location,
      page: { page, links },
   } = useContext(AppContext);

   //setup useRef to target the submegamenu container so as to add some styling to it.
   const container = useRef(null);

   const [columns, setColumns] = useState('col-2');

   useEffect(() => {
      setColumns('col-2');
      const submegamenu = container.current;
      const { center, bottom } = location;
      submegamenu.style.left = `${center}px`;
      submegamenu.style.top = `${bottom}px`;

      if (links.length === 3) {
         setColumns('col-3');
      }

      if (links.length > 3) {
         setColumns('col-4');
      }
   }, [location, links]);

   return (
      <aside
         className={`${isMegamenuOpen ? 'submenu show' : 'submenu'}`}
         ref={container}
      >
         <h4>{page}</h4>
         <div className={`submenu-center ${columns}`}>
            {links.map((link, index) => {
               const { label, icon, url } = link;
               return (
                  <a key={index} href={url}>
                     {icon}
                     {label}
                  </a>
               );
            })}
         </div>
      </aside>
   );
};

export default Submenu;
