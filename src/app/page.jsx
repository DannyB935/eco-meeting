'use client';
import Image from "next/image";
import { useState } from "react";

import NavbarComp from "./Components/NavbarComp";
import FooterNavComp from "./Components/FooterComp";
import LandingComp from "./Components/Content/LandingComp";
import LoginModal from "./Components/LoginModal";
import RegisterModal from "./Components/RegisterModal";

export default function Home() {

  const [logInOpen, setLogInOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleLogIn = () => {
    setLogInOpen(!logInOpen);
  }

  const handleRegister = () => {
    setRegisterOpen(!registerOpen);
  }

  return (
    <div className="flex flex-col min-h-screen h-screen">
      <NavbarComp openLogIn={handleLogIn} openRegister={handleRegister}/>
      <LandingComp />
      <FooterNavComp />
      {/* *Modal */}
      {logInOpen && (
        <LoginModal openModal={handleLogIn}/>
      )}

      {registerOpen &&(
        <RegisterModal openModal={handleRegister}/>
      )}

    </div>
  );
}
