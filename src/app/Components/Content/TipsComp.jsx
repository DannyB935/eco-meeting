'use client';
import { useState } from 'react';

import NewTipModal from '../NewTipModal';

const TipsComp = () => {

  const [tipModal, setTipModal] = useState(false);

  const handleTipModal = () => {
    setTipModal(!tipModal);
  }

  return(
    <div className="flex flex-col flex-grow justify-center items-center">
      <div className="container mainWall flex-col h-full md:rounded-xl md:shadow-xl md:my-2">
        <div className="flex justify-center p-4 md:p-8 my-4">
          <button onClick={()=>handleTipModal()} className="rounded-md mainBtn w-full p-2 shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-110 md:w-32"><i className="bi bi-plus text-2xl"></i></button>
        </div>
        <div className="flex flex-col md:grid gap-4 mx-2 md:grid-cols-4 lg:grid-cols-5 p-4 md:p-2">
          <div className="bg-slate-100 rounded-md shadow-lg w-full h-56 min-h-56 transition-transform duration-500 hover:scale-110 hover:shadow-xl">
            <div className="text-center text-xl flex flex-col items-center">
                <h4>Titulo del tip</h4>
            </div>
            <hr />
            <div className="overflow-y-auto max-h-44">
              <div className="text-left p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae libero natus sint repudiandae, laboriosam fuga harum aut sunt iusto. Dolores reprehenderit repellat, cupiditate provident quae nesciunt ad facilis excepturi.
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-md shadow-lg w-full h-56 min-h-56 transition-transform duration-500 hover:scale-110 hover:shadow-xl">
            <div className="text-center text-xl flex flex-col items-center">
              <h4>Titulo del tip</h4>
            </div>
            <hr />
            <div className="overflow-y-auto max-h-44">
              <div className="text-left p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae libero natus sint repudiandae, laboriosam fuga harum aut sunt iusto. Dolores reprehenderit repellat, cupiditate provident quae nesciunt ad facilis excepturi.
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-md shadow-lg w-full h-56 min-h-56 transition-transform duration-500 hover:scale-110 hover:shadow-xl">
            <div className="text-center text-xl flex flex-col items-center">
              <h4>Titulo del tip</h4>
            </div>
            <hr />
            <div className="overflow-y-auto max-h-44">
              <div className="text-left p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae libero natus sint repudiandae, laboriosam fuga harum aut sunt iusto. Dolores reprehenderit repellat, cupiditate provident quae nesciunt ad facilis excepturi.
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-md shadow-lg w-full h-56 min-h-56 transition-transform duration-500 hover:scale-110 hover:shadow-xl">
            <div className="text-center text-xl flex flex-col items-center">
              <h4>Titulo del tip</h4>
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
      {tipModal && <NewTipModal openModal={handleTipModal}/>}
    </div>
  );
};

export default TipsComp;