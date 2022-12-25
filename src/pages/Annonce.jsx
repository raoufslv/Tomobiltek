import React from "react";
import Navbar from "../components/Header/NavigationBar";
import axios from "axios";

const Annonce = () => {

  // recupere l'id de l'annonce
  const id = window.location.pathname.split(":")[1];

  // recupere les infos de l'annonce
  const [annonce, setAnnonce] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/annonce/${id}`)
      .then((res) => {
        setAnnonce(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <div>
      <Navbar bgnavbar={true} />
      <div className=" mx-10">
        <section className="mx-10">
          <div>
            <h1 className=" secondaryColor ml-10 text-4xl font-bold">
              Annonce
            </h1>
            <hr className=" w-72 nice_line" />
          </div>
          <div className="flex justify-between">
            <div className="ml-4">
              <h1 className="font-semibold text-3xl mt-1 mb-8">Audi RS3 <span>{/*annonce.name*/}</span></h1>
              <div className="ml-4">
                <p className="mb-3">
                  Année:{" "}
                  <span className=" secondaryColor font-semibold">2018<span>{/*annonce.year*/}</span></span>
                </p>
                <p className="mb-3">
                  Kilométrage:{" "}
                  <span className=" secondaryColor font-semibold">20000km<span>{/*annonce.kilometrage*/}</span></span>
                </p>
                <p className="mb-3">
                  Région:{" "}
                  <span className=" secondaryColor font-semibold">Alger<span>{/*annonce.region*/}</span></span>
                </p>
                <p className="mb-3">
                  Prix:{" "}
                  <span className=" secondaryColor font-semibold">2018<span>{/*annonce.prix*/}</span></span>
                </p>
              </div>
            </div>
            <div>
              <img
                src="../../public/RS3Vcomplet.png" // path to image:  'annonce.path'
                id="imgAnonce"
                className=" "
                alt=""
              />
            </div>
          </div>
          <div className=" mx-20">
            <hr className=" w-80 nice_line" />
            <div className="flex justify-between">
              <p className="font-semibold  text-2xl text-purple-900">
                Vous voulez savoir l'estimation du prix du modèle
                <br /> sur le marché?{" "}
              </p>
              <button className="btn_Estimer px-10 py-2 font-semibold">
                Estimer
              </button>
            </div>
            <hr className=" w-80 nice_line mlefto" />
          </div>
        </section>
        <section className="divProfil my-10 mx-auto flex justify-between">
          <div className=" flex">
            <img src="../../public/raouf.png" className="profilPic" alt="" />
            <h1 className=" flex justify-center align-middle items-center">
              Yanis Zaim <span>{/*annonce.user*/}</span>
            </h1>
          </div>
          <div className="flex gap-4 justify-center align-middle content-center">
            <div className="flex gap-1"> 
              <img src="../../public/star.svg" className="w-6" alt="" />
              <img src="../../public/star.svg" className="w-6" alt="" />
              <img src="../../public/star.svg" className="w-6" alt="" />
              <img src="../../public/star.svg" className="w-6" alt="" />
              <img src="../../public/star.svg" className="w-6" alt="" />
            </div>
            <div className=" flex justify-center align-middle items-center">
              <img src="../../public/message.svg" className="w-8" alt="" />
            </div>
            <div className=" flex justify-center align-middle items-center" >
              <button className="voirProfil"onClick=''>voir profil</button>
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
      </div>
    </div>
  );
};

export default Annonce;
