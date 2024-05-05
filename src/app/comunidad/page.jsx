'use client';

import { useState } from 'react';

import NavbarComp from '../Components/NavbarComp';
import FooterNavComp from '../Components/FooterComp';
import TabviewComp from '../Components/TabviewComp';

const ComunidadComp = () => {

   // *Para saber que componente se debe mostrar en todo momento
  //? 1 = Tips, 2 = Eventos, 3 = Contacto
  const [actTab, setActTab] = useState(1);

  const handleTab = (tab) => {
    setActTab(tab);
  }

  return (
    <div className='flex flex-col min-h-screen h-screen'>
      <NavbarComp />
      <TabviewComp tab={actTab} setTab={handleTab}/>
      <FooterNavComp />
    </div>
  )
};

export default ComunidadComp;