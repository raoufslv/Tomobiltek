import React from "react";
import { redirect } from "react-router-dom";
import Navbar from "../components/Header/NavigationBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" bg-lenear-purple heighto ">
        <Navbar />
        <div className="flex">
          <div className="flex flex-col  w-1/2 heroSection">
            <div className="heroTitle text-white">TOMOBILTEK</div>
            <p className="text-white">
              Le premier site en Algérie a permettre l’achat ou la vente parmis
              un large éventail de voitures venant de tout le pays !
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2">
            <img src="../../public/loto.png" width={"2000px"} alt="loto" />
          </div>
        </div>
      </div>
      <div>
        <button
          className=" raduis buttonStart text-white"
          onClick={() => navigate("/signUp")}
        >
          get started
        </button>
      </div>
    </div>
  );
};

export default Home;
