
const FooterNavComp = () => {
  return(
    <footer className="navbarClass sticky button-0 h-24 flex flex-col md:flex-row p-4 text-center justify-center">
      EcoMeeting &copy; {new Date().getFullYear()}.
      <p className="px-4">
        Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default FooterNavComp;