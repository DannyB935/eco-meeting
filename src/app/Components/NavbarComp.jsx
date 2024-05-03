// !Use client para los hooks, los cambios y acciones solo son reflejados en el cliente, no el servidor
'use client';
import { useState } from 'react';

const NavbarComp = () =>{

  const [isOpen, setisOpen] = useState(false);

  return(
    <nav className="navbarClass h-24 p-6 relative flex items-center">
      <div className="flex flex-grow items-center">
        <img src="Logo.png" alt="Logo" className="h-24 bg-slate-100 rounded-md" />
      </div>
      <div className="flex">
        <button className="px-2 mx-4 mainBtn rounded-md md:hidden" onClick={()=>setisOpen(!isOpen)}><i className='bi bi-list text-4xl text-black'></i></button>
      </div>
      <div className="container mx-auto hidden md:flex md:flex-row justify-between">
        <div>
          <h2 className='text-6xl'>EcoMeeting</h2>
        </div>
        <div>
          <input type="button" value="Comunidad" className='py-2 px-4 mx-2 thirdBtn rounded-md'/>
        </div>
        <div>
          <input type="button" value="Iniciar Sesion" className="mainBtn p-2 mx-2 rounded-md"/>
          <input type="button" value="Registrarse" className="secBtn p-2 mx-2 rounded-md"/>
        </div>
      </div>
      {isOpen &&(
        <div className="container mx-auto md:hidden flex-col top-24 navbarClass w-full left-0 py-8 px-2 absolute z-10">
          <div>
            <input type="button" value="Comunidad" className='py-2 px-4 mx-2 thirdBtn rounded-md'/>
          </div>
          <div className='mt-2'>
            <input type="button" value="Iniciar Sesion" className="mainBtn p-2 mx-2 rounded-md"/>
            <input type="button" value="Registrarse" className="secBtn p-2 mx-2 rounded-md"/>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavbarComp;