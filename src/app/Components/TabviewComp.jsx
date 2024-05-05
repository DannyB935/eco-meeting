
const TabviewComp = (props) => {

  return(
    <div className="flex my-4 justify-center">
      <div className="flex flex-row tabView text-center justify-center items-center w-2/8 min-w-2/8 p-4 rounded-xl border-2 border-green-400">
       <button type='button' onClick={()=>props.setTab(1)} className={`mx-4 ${props.tab == 1? 'activeTab p-2 rounded-md': 'text-black'}`}>Consejos</button>
       <button type='button' onClick={()=>props.setTab(2)} className={`mx-4 ${props.tab == 2? 'activeTab p-2 rounded-md': 'text-black'}`}>Meetings</button>
       <button type='button' onClick={()=>props.setTab(3)} className={`mx-4 ${props.tab == 3? 'activeTab p-2 rounded-md': 'text-black'}`}>Contacto</button>
      </div>
    </div>
  );
};

export default TabviewComp;