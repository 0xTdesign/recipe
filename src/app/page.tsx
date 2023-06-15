import Image from "next/image";
import SectionOne from "./Componets/SectionOne/SectionOne";
import SectionTwo from "./Componets/SectionTwo/SectionTwo";
import SectionThree from "./Componets/SectionThree/SectionThree";

export default function Home() {
  return (
    <>
      <div className="container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
}
