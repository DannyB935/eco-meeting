'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const EditPostModal = ({openModal, id}) => {

  const [editPost, setEditPost] = useState({
    title: '',
    content: '',
    category: '',
    link: '',
    id_user: localStorage.getItem('id'),
    id: id
  });

  const [error, setError] = useState(false);

  const handleChange = (e) =>{
    setEditPost({
      ...editPost,
      [e.target.name]: e.target.value
    });
  }

  const hanldeSubmit = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    //*Comprueba que no esten vacios los campos
    for(let key in editPost){
      if(editPost[key] == ''){
        setError(true);
        return;
      }else{
        let form = new FormData();
        for(let key in editPost){
          form.append(key, editPost[key]);
        }
        //*Hacer llamada
        const res = await axios.post(process.env.NEXT_PUBLIC_RUTA+'/edit-post', form);
        if(res.data.status === 'success'){
          setError(false);
          openModal();
        }
      }
    }
  }

  const onClose = (e) => {
    if(e.target.id === 'editPost'){
      openModal();
    }
  }

  return(
    <div id="editPost" onClick={onClose} className='flex justify-center fixed inset-0 z-50 items-center bg-black bg-opacity-40'>
      <div className='container bg-slate-100 flex-col p-4 rounded-lg max-w-sm md:max-w-lg mx-auto'>
        <div className="flex justify-between">
          <h4 className="text-2xl p-2">Editar publicacion</h4>
          <button onClick={()=>openModal()} className="transition-transform duration-500 hover:scale-150"><i className="bi bi-x-lg"></i></button>
        </div>
        <hr />
        <div className="flex flex-col h-5/6 p-4">
          <form id="newPostForm" name="newPostForm" onSubmit={(e)=>hanldeSubmit(e)}>
            <label htmlFor="title">Titulo: </label>
            <input type="text" name="title" onChange={(e)=>handleChange(e)} placeholder="Escriba el titulo para su publicacion" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="category">Categoria: </label>
            <select name="category" id="category" onChange={(e)=>handleChange(e)} className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500">
              <option value="1">Encuesta</option>
              <option value="2">Reunion</option>
              <option value="3">Informacion de interes</option>
            </select>             

            <label htmlFor="link">Enlace: </label>
            <input type="text" name="link" onChange={(e)=>handleChange(e)} placeholder="Ingrese un enlace relacionado" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="content">Contenido: </label>
            <textarea name="content" id="content" onChange={(e)=>handleChange(e)} className="p-2 my-2 w-full h-36 rounded-md border border-lime-300 focus:border-lime-500"></textarea>

            {error && (
              <p className="text-red-500 text-xs italics">Por favor, rellene todos los campos</p>
            )}

            <input type="submit" value="Publicar" className="mainBtn p-2 w-full my-2 rounded-md"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditPostModal;