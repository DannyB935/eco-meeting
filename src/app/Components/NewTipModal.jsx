
const NewTipModal = ({openModal}) => {

  const onClose = (e) => {
    if(e.target.id === 'newTip'){
      openModal();
    }
  };

  return(
    <div id="newTip" onClick={onClose} className='flex justify-center fixed inset-0 z-50 items-center bg-black bg-opacity-40'>
      <div className='container bg-slate-100 flex-col p-4 rounded-lg w-5/6 h-3/6 md:w-1/4 md:h-2/6'>
        <div className="flex justify-between">
          <h4 className="text-2xl p-2">Nuevo consejo</h4>
          <button onClick={()=>openModal()} className="transition-transform duration-500 hover:scale-150"><i className="bi bi-x-lg"></i></button>
        </div>
        <hr />
        <div className="flex flex-col h-5/6 p-4">
          <form id="newTipForm" name="newTipForm" action="#">
            <label htmlFor="title">Titulo: </label>
            <input type="text" name="title" placeholder="Escriba el titulo para su consejo" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="descrip">Descripcion del consejo: </label>
            <textarea name="descrip" id="descrip" className="p-2 my-2 w-full h-36 rounded-md border border-lime-300 focus:border-lime-500"></textarea>

            <input type="submit" value="Publicar" className="mainBtn p-2 w-full my-2 rounded-md"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTipModal;