'use client';
import { useEffect, useState } from 'react';

import {getTips} from '../../../lib/utils';

import NewTipModal from '../NewTipModal';
import TarjetaTip from '../TarjetaTip';

const TipsComp = () => {

  const [tipModal, setTipModal] = useState(false);
  const [tips, setTips] = useState([]);

  const handleTipModal = () => {
    setTipModal(!tipModal);
  }

  useEffect(() => {
    try{
      const getData = async () => {
        let res = await getTips();
        if(res !== null){
          setTips(res);
        }
      }
      getData();
    }catch(e){
      console.log("Error al hacer la llamada a la API por los tips: ", e);
    }

  }, []);

  return(
    <div className="flex flex-col flex-grow justify-center items-center">
      <div className="container mainWall flex-col h-full md:rounded-xl md:shadow-xl md:my-2">
        <div className="flex justify-center p-4 md:p-8 my-4">
          <button onClick={()=>handleTipModal()} className="rounded-md mainBtn w-full p-2 shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-110 md:w-32"><i className="bi bi-plus text-2xl"></i></button>
        </div>
        <div className="flex flex-col md:grid gap-4 mx-2 md:grid-cols-4 lg:grid-cols-5 p-4 md:p-2">
          {
            tips.map((tip, index) => {
              return(
                <TarjetaTip key={index} title={tip.titulo} content={tip.descripcion} id={tip.id} id_user={tip.id_usuario}/>
              )
            })
          }
        </div>
      </div>
      {tipModal && <NewTipModal openModal={handleTipModal}/>}
    </div>
  );
};

export default TipsComp;