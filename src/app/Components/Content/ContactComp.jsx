'use client';
import { useState } from "react";
import axios from "axios";

import { isLoggedIn } from "@/lib/utils";

const ContactComp = () => {

  const [formContact, setFormContact] = useState({
    email: '',
    motivo: '',
    tipo: '',
    categoria: '',
    cuerpo: '',
    id_user: localStorage.getItem('id')
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormContact({
      ...formContact,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      e.stopPropagation();

      for(let key in formContact){
        if(formContact[key]==''){
          setError(true);
          return;
        }else{

          let form = new FormData();
          for(let key in formContact){
            form.append(key, formContact[key]);
          }

          const res = await axios.post(process.env.NEXT_PUBLIC_RUTA+'/create-message', form);
          if(res.data.status === 'success'){
            setError(false);
            window.location.href = '/comunidad';
          }else{
            setError(true);
          }

        }
      }
    }catch(e){
      console.log("Error al enviar el mensaje: ", e);
    }
  }

  return(
    <div className="flex flex-col flex-grow justify-center items-center">
      <div className="container bg-slate-100 md:rounded-md md:shadow-xl md:my-2 h-full md:h-auto md:w-1/2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="p-4 text-4xl text-center">Contacta con nosotros!</h1>
          <hr />
          {isLoggedIn() ? (
            <h4 className="p-4 text-lg">Rellena este formulario para enviar cualquier tipo de feedback o si eres una empresa y estas interesada en apoyarnos</h4>
          ) : (
            <h4 className="p-4 text-lg">
              Por favor, inicia sesion para poder enviarnos un mensaje directo.
              <br /> 
              Tambien puedes intentar contactar con uno de nuestros correos: eco-meeting@correo.mx
            </h4>
          )}
        </div>
        <hr />
        {isLoggedIn() && (
          <div className="flex flex-col p-4">
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className="p-2 my-1">
                <label htmlFor="email" className="block">Email: </label>
                <input type="email" name="email" id="email" value={formContact.title} onChange={(e)=>handleChange(e)}className="rounded-md p-2 w-full md:w-2/5 border-2 border-slate-300" placeholder="tu-correo@ejemplo.com" />
              </div>
              <div className="p-2 my-1">
                <label htmlFor="motivo" className="block">Motivo: </label>
                <input type="text" name="motivo" id="motivo" value={formContact.motivo} onChange={(e)=>handleChange(e)}className="rounded-md p-2 w-full md:w-2/5 border-2 border-slate-300" placeholder="Escriba el motivo para contactarnos" />
              </div>
              <div className="p-2 my-1 flex">
                <label htmlFor="persona" className="mr-2">Persona: </label>
                <input type="radio" name="tipo" id="persona" value="1" onChange={(e)=>handleChange(e)}className="w-4"/>

                <label htmlFor="empresa" className="mr-2 ms-4">Empresa: </label>
                <input type="radio" name="tipo" id="empresa" value="2" onChange={(e)=>handleChange(e)}className="w-4"/>
              </div>
              <div className="p-2 my-1">
                <label htmlFor="categoria" className="block">Categoria: </label>
                <select name="categoria" id="categoria" value={formContact.categoria} onChange={(e)=>handleChange(e)} className="select form-select rounded-md w-full md:w-2/5 bg-lime-300 border border-lime-300 py-2 focus:outline-none focus:border-lime-300">
                  {/* *1 = feedback, 2 = reporte de errores, 3 = apoyo monetario, 4 = aportar al proyecto */}
                  <option className="hover:bg-lime-700" value="1">Retroalimentacion</option>
                  <option className="hover:bg-lime-700" value="2">Reportar errores</option>
                  <option className="hover:bg-lime-700" value="3">Apoyarnos monetariamente</option>
                  <option className="hover:bg-lime-700" value="4">Apoyar al proyecto</option>
                </select>
              </div>
              <div className="p-2 my-1 flex flex-col">
                <label htmlFor="cuerpo" className="block">Mensaje: </label>
                <textarea name="cuerpo" id="cuerpo" value={formContact.cuerpo} onChange={(e)=>handleChange(e)}className="h-36 rounded-md w-full border border-slate-300" placeholder="Escriba su mensaje"></textarea>
              </div>

              {error && (
                <p className="text-red-500 text-sm italics">Rellene todos los campos vacios</p>
              )}

              <div className="p-2 my-1 flex justify-center items-center">
                <button type="submit" className="rounded-md mainBtn w-full p-2 shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-110 md:w-32"><i className="text-lg bi bi-check"></i> Enviar</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactComp;