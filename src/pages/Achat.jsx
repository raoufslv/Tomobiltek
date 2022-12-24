import React from "react";
import Navbar from "../components/Header/NavigationBar";
import Card from "../components/Card";

const Achat = () => {
  return (
    <div>
      <Navbar bgnavbar={true} />
      <section>
        <div>
          <h1
            id="Khayer"
            className="text-center font-bold colorPrimary text-4xl mb-4"
          >
            Kheyer Tonobiltek
          </h1>
          <p className="text-center font-bold text-sm">
            Rechercher la voiture de vos reves selon les critères que vous
            voulez
          </p>
        </div>
        <div>
          <form id="" action="" method="">
            <div className="flex justify-center mt-5">
              <input type="text" className=" inputform h-9" placeholder="Nom de la voiture"/>
            </div>
            <div className="flex justify-center mt-5 gap-5">
              <div className="flex flex-col items-end flex-1">
                <select type="text" className="inputform h-9"/>
                <select type="text" className="inputform h-9" />
              </div>
              <div className=" flex-1">
                <select type="text" className="inputform h-9" />
                <select type="text" className="inputform h-9" />
              </div>
            </div>
            <div className="flex justify-center">
              <button className=" px-3 pt-1 pb-2 my-5" id="chercheBtn">
                {" "}
                <span className="text-sm">Rechercher</span>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="mt-5">
        <h1 className="text-center colorPrimary text-4xl">Des voitures dans votre région</h1>
        <div className="grid grid-cols-4">
            <Card/>
        </div>
        <div className="grid grid-cols-4">
            <Card/>
        </div>
      </section>
      <section className="flex justify-center align-middle items-center content-center my-10">
        <div id="venderDiv" className="mx-10 raduis flex flex-col gap-5 p-10">
            <h1 className="text-white text-4xl">VENDRE VOTRE VEHICULE <br/>AUJOURD'HUI</h1>
            <button id='btnPublier' className=" text-white ">Publier votre annonce</button>
        </div>
      </section>
    </div>
  );
};

export default Achat;
