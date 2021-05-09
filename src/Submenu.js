import React, { useContext } from 'react';
import { AppContext } from './context';

const Submenu = () => {
   const { isMegamenuOpen } = useContext(AppContext);

   return (
      <aside className={`${isMegamenuOpen ? 'submenu show' : 'submenu'}`}>
         submenu
      </aside>
   );
};

export default Submenu;
