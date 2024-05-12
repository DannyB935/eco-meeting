'use client';

import { useState } from "react";

const NewTipModal = ({openModal, handleNewTip}) => {

  const [formTip, setFormTip] = useState({
    title: '',
    descrip: '',
    id_user: localStorage.getItem('id')
  });
  const [error, setError] = useState(false);

  const handleChange = (e) =>{
    setFormTip({
      ...formTip,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    //*Comprueba que no esten vacios los campos
    for(let key in formTip){
      if(formTip[key] == ''){
        setError(true);
        return;
      }else{
        let form = new FormData();
        for(let key in formTip){
          form.append(key, formTip[key]);
        }
        let ans = await handleNewTip(form);
        if(ans){
          setError(false);
          openModal();
        }
      }
    }
  }

  const onClose = (e) => {
    if(e.target.id === 'newTip'){
      openModal();
    }
  };

  return(
    <div id="newTip" onClick={onClose} className='flex justify-center fixed inset-0 z-50 items-center bg-black bg-opacity-40'>
      <div className='container bg-slate-100 flex-col p-4 rounded-lg max-w-sm md:max-w-md mx-auto'>
        <div className="flex justify-between">
          <h4 className="text-2xl p-2">Nuevo consejo</h4>
          <button onClick={()=>openModal()} className="transition-transform duration-500 hover:scale-150"><i className="bi bi-x-lg"></i></button>
        </div>
        <hr />
        <div className="flex flex-col h-5/6 p-4">
          <form id="newTipForm" name="newTipForm" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="title">Titulo: </label>
            <input type="text" name="title" value={formTip.title} onChange={(e)=>handleChange(e)} placeholder="Escriba el titulo para su consejo" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="descrip">Descripcion del consejo: </label>
            <textarea name="descrip" id="descrip" value={formTip.descrip} onChange={(e)=>handleChange(e)} className="p-2 my-2 w-full h-36 rounded-md border border-lime-300 focus:border-lime-500"></textarea>

            {error && (
              <p className="text-red-500 text-sm italics">Rellene los campos que estan vacios</p>
            )}

            <input type="submit" value="Publicar" className="mainBtn p-2 w-full my-2 rounded-md"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTipModal;