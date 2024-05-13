import axios from "axios";
import  { isLoggedIn } from "@/lib/utils";

const TarjetaTip = ({title, content, id, likes, dislikes, getId, loadTips}) => {

  const handleLike = async () => {
    try{
      const res = await axios.get('http://localhost:5000/like-tip/'+id);
      if(res.data.status === 'success'){
        likes++;
        loadTips();
        return true;
      }else{
        console.log("Error al hacer el like: ", res.data.message);
        return false;
      }
    }catch(e){
      console.log("Error al hacer el like: ", e);
    }
  }

  const handleDislike = async () => {
    try{
      const res = await axios.get(process.env.NEXT_PUBLIC_RUTA+'/dislike-tip/'+id);
      if(res.data.status === 'success'){
        dislikes++;
        loadTips();
        return true;
      }else{
        console.log("Error al hacer el dislike: ", res.data.message);
        return false;
      }
    }catch(e){
      console.log("Error al hacer el dislike: ", e);
    }
  }

  return(
    <div className="bg-slate-100 rounded-md shadow-lg flex flex-col w-full h-56 min-h-56 transition-transform duration-500 hover:scale-110 hover:shadow-xl">
      <div className="text-center text-xl flex flex-col items-center p-2 bg-verde-chido-full text-white rounded-t-md">
          <h4>{title}</h4>
      </div>
      <hr />
      <div className="overflow-y-auto max-h-44 hover:cursor-pointer flex-grow" onClick={()=>getId(id)}>
        <div className="text-left p-4">
          {content}
        </div>
      </div>
      {isLoggedIn() && (
        <div className="flex justify-center gap-4 p-2">
          <button className="mx-2" onClick={()=>handleLike()}>
            <i className="text-lime-700 bi bi-hand-thumbs-up-fill hover:text-lime-500"></i> <span className="text-lime-700">{likes}</span>
          </button>
          <button className="mx-2" onClick={()=>handleDislike()}>
            <i className="text-red-500 bi bi-hand-thumbs-down-fill hover:text-red-400"></i> <span className="text-red-500">{dislikes}</span>
          </button>
        </div>
      )}
    </div>
  )
};

export default TarjetaTip;