import React from "react";
import { redirect } from "react-router-dom";
import Navbar from "../components/Header/NavigationBar";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" bg-lenear-purple heighto ">
        <Navbar Home={true}/>
        <div className="flex">
          <div className="flex flex-col  w-1/2 pt-24 pl-10 pr-20 heroSection"> 
            <div className="TitleFont text-white text-6xl mb-2 ">TOMOBILTEK</div>
            <p className="text-white text-lg pHero">
              Le premier site en Algérie a permettre l'achat ou la vente parmis
              un large éventail de voitures venant de tout le pays !
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2">
            <img src="../../public/lotoP.png" className="Hero_Pic" width={"2000px"} alt="loto" />
          </div>
        </div>
      </div>
      <div>
        <Button text="get started" margin="m-10" link="/signUp" additionalClass="hover:bg-purple-900  font-semibold buttonSlide" />
      </div>
    </div>
  );
};

export default Home;
