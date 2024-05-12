
const TarjetaPost = ({id, title, date, descrip, id_user, cat}) =>{
  return(
    <div className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl h-64 min-h-64 ${cat!=1 ? 'col-span-2' : 'col-span-1'}`}>
      <div className="text-center flex justify-center items-center bg-verde-chido-full text-white rounded-t-md">
          <h4 className="p-4 text-2xl">{title}</h4>
          <span className="text-lg">Fecha: {date}</span>
      </div>
      <hr />
      <div className="overflow-y-auto max-h-40">
        <div className="text-left p-4">
          {descrip}
        </div>
      </div>
    </div>
  );
};

export default TarjetaPost;