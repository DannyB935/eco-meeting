import Image from "next/image";
import NavbarComp from "./Components/NavbarComp";
import FooterNavComp from "./Components/FooterComp";
import LandingComp from "./Components/Content/LandingComp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComp />
      <LandingComp />
      <FooterNavComp />
    </div>
  );
}
