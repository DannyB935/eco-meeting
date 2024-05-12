
const TarjetaTip = ({title, content}) => {
  return(
    <div className="bg-slate-100 rounded-md shadow-lg w-full h-56 min-h-56 transition-transform duration-500 hover:scale-110 hover:shadow-xl">
      <div className="text-center text-xl flex flex-col items-center p-2 bg-verde-chido-full text-white rounded-t-md">
          <h4>{title}</h4>
      </div>
      <hr />
      <div className="overflow-y-auto max-h-44">
        <div className="text-left p-4">
          {content}
        </div>
      </div>
    </div>
  )
};

export default TarjetaTip;