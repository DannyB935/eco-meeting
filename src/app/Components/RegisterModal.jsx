'use client'
import { useState } from 'react';

import { register } from '@/lib/utils';

const RegisterModal = ({openModal}) => {

  const [formData, setFormData] = useState({
    name: '',
    fLastName: '',
    sLastName: '',
    email: '',
    user_name: '',
    password: '',
    passwordConfirm: ''
  });

  const [errors, setErrors] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const validateForm = () => {
    for(let key in formData){
      if(formData[key] === ''){
        return false;
      }
    }
    return true;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(formData.password !== formData.passwordConfirm){
      setErrors(true);
      return;
    }else{
      if(!validateForm()){
        setErrors(true);
        return;
      }else{
        try{
          const doRequest = async (form) =>{
            let res = await register(form);
            if(res){
              openModal();
            }else{
              console.log('Error al registrar');
              return;
            }
          }
          //*Se crea el objeto del form
          let form = new FormData();
          for(let key in formData){
            form.append(key, formData[key]);
          }
          doRequest(form);

        }catch(e){
          console.log("Error al hacer el registro: ", e);
        }
      }
    }
  }

  const onClose = (e) => {
    if(e.target.id === 'registerModal'){
      openModal();
    }
  };

  return(
    <div id="registerModal" onClick={onClose} className='flex justify-center fixed inset-0 z-50 items-center bg-black bg-opacity-40'>
      <div className='container bg-slate-100 flex-col p-4 rounded-lg max-w-sm md:max-w-md mx-auto'>
        <div className="flex justify-between bg-verde-lima-custom p-2 rounded-t-lg">
          <h4 className="text-2xl p-2">Registrarse</h4>
          <button onClick={()=>openModal()} className="transition-transform duration-500 hover:scale-150"><i className="bi bi-x-lg"></i></button>
        </div>
        <hr />
        <div className="flex flex-col h-auto p-4">
          <form id="registerForm" name="registerForm" onSubmit={handleSubmit}>

            <label htmlFor="name">Nombre: </label>
            <input type="text" name="name" value={formData.name} onChange={(e)=>handleChange(e)} placeholder="Escriba su nombre" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="fLastName">Apellido paterno: </label>
            <input type="text" name="fLastName" value={formData.fLastName} onChange={(e)=>handleChange(e)} placeholder="Escriba su nombre" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="sLastName">Apellido materno: </label>
            <input type="text" name="sLastName" value={formData.sLastName} onChange={(e)=>handleChange(e)} placeholder="Escriba su nombre" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="email" className="left-0">Email: </label>
            <input type="text" name="email" value={formData.email} onChange={(e)=>handleChange(e)} placeholder="nombre@ejemplo.com" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="user_name" className='left-0'>Usuario: </label>
            <input type="text" name="user_name" value={formData.user_name} onChange={(e)=>handleChange(e)} placeholder="Usuario" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="password" className="left-0">Contraseña: </label>
            <input type="password" name="password" value={formData.password} onChange={(e)=>handleChange(e)} placeholder="Contraseña" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="passwordConfirm" className="left-0">Confirmar contraseña: </label>
            <input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={(e)=>handleChange(e)} placeholder="Repetir contraseña" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            {errors && <p className="text-red-500 text-italics">Las contraseñas no coinciden</p>}

            <input type="submit" value="Registrarse" className="mainBtn p-2 w-full my-2 rounded-md"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;