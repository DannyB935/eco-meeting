
const LoginModal = ({openModal}) => {

  const onClose = (e) => {
    if(e.target.id === 'modalWrapper'){
      openModal();
    }
  };

  return(
    <div id="modalWrapper" onClick={onClose} className='flex top-0 left-0 w-full h-full justify-center fixed inset-0 z-50 items-center bg-black bg-opacity-40'>
      <div className='container bg-slate-100 flex-col p-4 rounded-lg max-w-sm mx-auto'>
        <div className="flex justify-between bg-verde-lima-custom p-2 rounded-t-lg">
          <h4 className="text-2xl p-2">Iniciar Sesion</h4>
          <button onClick={()=>openModal()} className="transition-transform duration-500 hover:scale-150"><i className="bi bi-x-lg"></i></button>
        </div>
        <hr />
        <div className="flex flex-col h-5/6 p-4">
          <form id="loginForm" name="loginForm" action="#">
            <label htmlFor="email" className="left-0">Email: </label>
            <input type="text" name="email" placeholder="nombre@ejemplo.com" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>
            <label htmlFor="password" className="left-0">Contraseña: </label>
            <input type="password" name="password" placeholder="Contraseña" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>
            <input type="submit" value="Iniciar Sesion" className="mainBtn p-2 w-full my-2 rounded-md"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;