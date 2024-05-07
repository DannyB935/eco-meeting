
const RegisterModal = ({openModal}) => {

  const onClose = (e) => {
    if(e.target.id === 'registerModal'){
      openModal();
    }
  };

  return(
    <div id="registerModal" onClick={onClose} className='flex justify-center fixed inset-0 z-50 items-center bg-black bg-opacity-40'>
      <div className='container bg-slate-100 flex-col p-4 rounded-lg max-w-sm md:max-w-md mx-auto'>
        <div className="flex justify-between">
          <h4 className="text-2xl p-2">Registrarse</h4>
          <button onClick={()=>openModal()} className="transition-transform duration-500 hover:scale-150"><i className="bi bi-x-lg"></i></button>
        </div>
        <hr />
        <div className="flex flex-col h-auto p-4">
          <form id="registerForm" name="registerForm" action="#">

            <label htmlFor="name">Nombre: </label>
            <input type="text" name="name" placeholder="Escriba su nombre" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="fLastName">Apellido paterno: </label>
            <input type="text" name="fLastName" placeholder="Escriba su nombre" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="sLastName">Apellido materno: </label>
            <input type="text" name="sLastName" placeholder="Escriba su nombre" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="email" className="left-0">Email: </label>
            <input type="text" name="email" placeholder="nombre@ejemplo.com" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="password" className="left-0">Contraseña: </label>
            <input type="password" name="password" placeholder="Contraseña" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="passwordConfirm" className="left-0">Confirmar contraseña: </label>
            <input type="password" name="passwordConfirm" placeholder="Repetir contraseña" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <input type="submit" value="Registrarse" className="mainBtn p-2 w-full my-2 rounded-md"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;