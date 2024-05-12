'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {getTips, isLoggedIn} from '../../../lib/utils';

import NewTipModal from '../NewTipModal';
import EditTipModal from '../EditTipModal';
import TarjetaTip from '../TarjetaTip';

const TipsComp = () => {

  const [tipModal, setTipModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [tips, setTips] = useState([]);
  const [tipId, setTipId] = useState('');

  const handleTipModal = () => {
    setTipModal(!tipModal);
  }

  const handleEditModal = () =>{
    setEditModal(!editModal);
    const getData = async () => {
      let res = await getTips();
      if(res !== null){
        setTips(res);
      }
    }
    getData();
  }

  const doNewTip = async (form) => {
    try{
      const res = await axios.post('http://localhost:5000/create-tip', form);
      if(res.data.status === 'success'){
        const loadTips = await getTips();
        if(loadTips !== null){
          setTips(loadTips);
        }
        return true;
      }else{
        return false;
      }
    }catch(e){
      console.log("Error al hacer la llamada a la API por el nuevo tip: ", e);
    }
  }

  const getId = (id) => {
    setTipId(id);
    handleEditModal();
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
        { isLoggedIn() ? (
          <div className="flex justify-center p-4 md:p-8 my-4">
            <button onClick={()=>handleTipModal()} className="rounded-md mainBtn w-full p-2 shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-110 md:w-32"><i className="bi bi-plus text-2xl"></i></button>
          </div>
          ): (
          <div className="flex justify-center p-4 md:p-8 my-4">
            <span>Para publicar un tip, inicia sesion</span>
          </div>
        )}
        <div className="flex flex-col md:grid gap-4 mx-2 md:grid-cols-4 lg:grid-cols-5 p-4 md:p-2">
          {
            tips.map((tip, index) => {
              return(
                <TarjetaTip key={index} title={tip.titulo} content={tip.descripcion} id={tip.id} id_user={tip.id_usuario} getId={getId}/>
              )
            })
          }
        </div>
      </div>
      {tipModal && <NewTipModal openModal={handleTipModal} handleNewTip={doNewTip}/>}
      { editModal && <EditTipModal openModal={handleEditModal} id={tipId} /> }
    </div>
  );
};

export default TipsComp;