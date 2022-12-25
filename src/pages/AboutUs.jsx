import React from "react";
import Navbar from "../components/Header/NavigationBar";

const AboutUs = () => {
  return (
    <div>
      <Navbar bgnavbar={true} />
      <div className="my-20 widtha mx-auto shadow shadow-fuchsia-200 raduis px-10 py-10 border ">
        <h1 className=" text-center colorPrimary text-3xl mb-2">About us</h1>
        <div className="flex justify-between gap-8">
          <p className=" mr-60">
            Ce site est le résultat répondant au besoin de sites de voitures
            fiables et de qualité en Algérie .  <br />
            Il a été developpé par une équipe
            d'étudiants passionnés par la Tech , et réalisé dans le cadre du
            Training Camp d'Etic .
          </p>
          <img src="../../public/BigLogo.png" className=" w-60" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
