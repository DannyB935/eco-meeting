'use client';

import { useState } from 'react';

import NavbarComp from '../Components/NavbarComp';
import FooterNavComp from '../Components/FooterComp';
import TabviewComp from '../Components/TabviewComp';
import TipsComp from '../Components/Content/TipsComp';
import MeetingComp from '../Components/Content/MeetingComp';
import ContactComp from '../Components/Content/ContactComp';

const ComunidadComp = () => {

   // *Para saber que componente se debe mostrar en todo momento
  //? 1 = Tips, 2 = Eventos, 3 = Contacto
  const [actTab, setActTab] = useState(1);

  const handleTab = (tab) => {
    setActTab(tab);
  }

  let showComp;

  if(actTab == 1){
    showComp = <TipsComp />
  }else{
    if(actTab == 2){
      showComp = <MeetingComp />
    }else{
      showComp = <ContactComp />
    }
  }

  return (
    <div className='flex flex-col min-h-screen h-screen'>
      <NavbarComp />
      <TabviewComp tab={actTab} setTab={handleTab}/>
      {showComp}
      <FooterNavComp />
    </div>
  )
};

export default ComunidadComp;