import Link from 'next/link';

const LandingComp = () => {
  return(
    <div className="flex-grow">
      <main>
        <div className="flex flex-col justify-center items-center">
          <div className="container flex flex-col md:flex-row bg-slate-100 w-full md:h-96 md:my-8 my-4 w-11/12 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-2xl">
            <img src="./img/sticky-notes.jpg" alt="Seccion tips" className="rounded-md md:h-auto object-cover"/>
            <div className="flex flex-col items-center justify-center p-4">
              <h4 className="text-2xl font-bold mb-2 text-center">Comparte tus mejores consejos!</h4>
              <hr />
              <p className="flex items-center p-2">
                El objetivo principal de nuestra pagina web, es hacer que la comunidad se interese por el medio ambiente y se una a la causa de salvar el planeta con las pequeñas acciones. Sientete libre de acceder a nuestra seccion principal de consejos y compartir los tuyos, ya sean habitos o tecnicas que puedan ayudar al medio ambiente.
              </p>
            </div>
          </div>
          <div className="container flex flex-col md:flex-row bg-slate-100 w-full md:h-96 md:my-8 my-4 w-11/12 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-2xl">
            <div className="flex flex-col items-center justify-center p-4">
              <h4 className="text-2xl font-bold mb-2 text-center">No nos limitemos a lo virtual</h4>
              <hr />
              <p className="flex items-center p-2">
                Ademas de compartir tus consejos en nuestro tablero de tips, tambien puedes organizar distintas actividades o eventos en tu comunidad para ayudar al medio ambiente. Sientete libre de compartir tus eventos o realizar encuestas para crear una comunidad mucho mas unida.
              </p>
            </div>
            <img src="./img/one-world.jpg" alt="Juntos somos mas" className="rounded-md md:h-auto object-cover"/>
          </div>
          <div className="container flex flex-col md:flex-row bg-slate-100 w-full md:h-96 md:my-8 my-4 w-11/12 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-2xl">
            <img src="./img/empresas.jpg" alt="Unete a la causa" className="rounded-md md:h-auto object-cover"/>
            <div className="flex flex-col items-center justify-center p-4">
              <h4 className="text-2xl font-bold mb-2 text-center">Tambien puedes ayudar como empresa</h4>
              <hr />
              <p className="flex items-center p-2">
                Nuestro principal objetivo, es ser una de las principales empresas sin fines de lucro que puedan apoyar el medio ambiente a traves de la tecnologia. Si eres una empresa y quieres ayudar a la causa, no dudes en contactarnos para que podamos trabajar juntos en un proyecto que beneficie al medio ambiente y a tu empresa o apoyarnos de forma economica. Juntos podemos hacer la diferencia!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingComp;