
const MeetingComp = () => {
  return(
    <div className="flex flex-col flex-grow justify-center items-center">
      <div className="container mainWall flex-col h-full md:rounded-xl md:shadow-xl md:my-2">
        <div className="flex justify-center p-4 md:p-8 my-4 items-center">
          <span className="mx-4">Nueva publicacion:</span> 
          <button className="rounded-md mainBtn w-full p-2 shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-110 md:w-32"><i className="bi bi-plus text-2xl"></i></button>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mx-2 p-4 md:p-2">
          {/* *El col-span es uno si y dos no */}
          <div className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl h-64 min-h-64 col-span-2`}>
            <div className="text-center flex justify-center items-center">
                <h4 className="p-4 text-2xl">Titulo de la publicacion</h4>
                <span className="text-lg">Fecha: 10/10/20</span>
            </div>
            <hr />
            <div className="overflow-y-auto max-h-44">
              <div className="text-left p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae libero natus sint repudiandae, laboriosam fuga harum aut sunt iusto. Dolores reprehenderit repellat, cupiditate provident quae nesciunt ad facilis excepturi.
              </div>
            </div>
          </div>

          <div className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl h-64 min-h-64 col-span-1`}>
            <div className="text-center flex justify-center items-center">
                <h4 className="p-4 text-2xl">Titulo de la publicacion</h4>
                <span className="text-lg">Fecha: 10/10/20</span>
            </div>
            <hr />
            <div className="overflow-y-auto max-h-44">
              <div className="text-left p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae libero natus sint repudiandae, laboriosam fuga harum aut sunt iusto. Dolores reprehenderit repellat, cupiditate provident quae nesciunt ad facilis excepturi.
              </div>
            </div>
          </div>

          <div className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl h-64 min-h-64 col-span-1`}>
            <div className="text-center flex justify-center items-center">
                <h4 className="p-4 text-2xl">Titulo de la publicacion</h4>
                <span className="text-lg">Fecha: 10/10/20</span>
            </div>
            <hr />
            <div className="overflow-y-auto max-h-44">
              <div className="text-left p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae libero natus sint repudiandae, laboriosam fuga harum aut sunt iusto. Dolores reprehenderit repellat, cupiditate provident quae nesciunt ad facilis excepturi.
              </div>
            </div>
          </div>

          <div className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl h-64 min-h-64 col-span-2`}>
            <div className="text-center flex justify-center items-center">
                <h4 className="p-4 text-2xl">Titulo de la publicacion</h4>
                <span className="text-lg">Fecha: 10/10/20</span>
            </div>
            <hr />
            <div className="overflow-y-auto max-h-44">
              <div className="text-left p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae libero natus sint repudiandae, laboriosam fuga harum aut sunt iusto. Dolores reprehenderit repellat, cupiditate provident quae nesciunt ad facilis excepturi.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MeetingComp;