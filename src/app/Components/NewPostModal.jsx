
const NewPostModal = ({openModal}) => {

  const onClose = (e) => {
    if(e.target.id === 'newPost'){
      openModal();
    }
  };

  return(
    <div id="newPost" onClick={onClose} className='flex justify-center fixed inset-0 z-50 items-center bg-black bg-opacity-40'>
      <div className='container bg-slate-100 flex-col p-4 rounded-lg max-w-sm md:max-w-lg mx-auto'>
        <div className="flex justify-between">
          <h4 className="text-2xl p-2">Nueva publicacion</h4>
          <button onClick={()=>openModal()} className="transition-transform duration-500 hover:scale-150"><i className="bi bi-x-lg"></i></button>
        </div>
        <hr />
        <div className="flex flex-col h-5/6 p-4">
          <form id="newPostForm" name="newPostForm" action="#">
            <label htmlFor="title">Titulo: </label>
            <input type="text" name="title" placeholder="Escriba el titulo para su publicacion" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500"/>

            <label htmlFor="category">Categoria: </label>
            <select name="category" id="category" className="p-2 my-2 w-full rounded-md border border-lime-300 focus:border-lime-500">
              <option value="1">Encuesta</option>
              <option value="2">Reunion</option>
              <option value="3">Informacion de interes</option>
            </select>             

            <label htmlFor="content">Contenido: </label>
            <textarea name="content" id="content" className="p-2 my-2 w-full h-36 rounded-md border border-lime-300 focus:border-lime-500"></textarea>

            <input type="submit" value="Publicar" className="mainBtn p-2 w-full my-2 rounded-md"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;