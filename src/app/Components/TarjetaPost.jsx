import axios from "axios";

const TarjetaPost = ({id, title, date, descrip, id_user, cat, link, interesados, getPostId, loadPosts}) =>{

  const handleInteres = async () => {
    try{
      let newForm = new FormData();
      newForm.append('id', id);
      const res = await axios.post(process.env.NEXT_PUBLIC_RUTA+'/interes-post', newForm);
      if(res.data.status === 'success'){
        interesados++;
        loadPosts();
        return true;
      }else{
        console.log("Error al hacer el interes: ", res.data.message);
        return false;
      }
    }catch(e){
      console.log("Error al hacer el interes: ", e);
    }
  }

  return(
    <div className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl h-64 min-h-64 ${cat!=1 ? 'col-span-2' : 'col-span-1'}`}>
      <div className="text-center flex justify-center items-center bg-verde-chido-full text-white rounded-t-md">
          <h4 className="p-4 text-2xl">{title}</h4>
          <span className="text-lg">Fecha: {date}</span>
      </div>
      <hr />
      <div className="overflow-y-auto max-h-40 hover:cursor-pointer" onClick={()=>getPostId(id)}>
        <div className="text-left p-4">
          {descrip}
        </div>
      </div>
      <div className="text-left p-4">
        <span className="text-bold">Enlace de interes: </span> <a href={link} className="underline text-sky-400">{link}</a>
      </div>
      <div className="flex justify-center">
        <button className="p-2" onClick={()=>handleInteres()}>
          <i className="text-yellow-400 bi bi-emoji-surprise-fill"></i> Interesados: {interesados}
        </button>
      </div>
    </div>
  );
};

export default TarjetaPost;