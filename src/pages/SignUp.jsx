import React from "react";
import Navbar from "../components/Header/NavigationBar";

export default function SignUp() {
  return (
    <div>
      <Navbar bgnavbar={true} />
      <div className="flex content-center justify-center">
        <div className="flex flex-col items-center content-center">
          <p>Inscrivez-vous pour profiter de toutes les fonctionnalitées</p>
          <p className="">de notre site</p>
        </div>
      </div>
      <div>
        <form id="" action="" method="" className=" w-1/2 mx-auto border mt-5 shadowFormulair">
          <h1 className="colorPrimary titleInsc text-center">Inscription</h1>
          <div className="flex justify-center">
            <input
              id="nomComplet"
              type="text"
              name="nomComplet"
              className="inputform h-9"
              placeholder="Nom d'utilisateur"
            ></input>
          </div>
          <div className="flex justify-center">
            <input
              id="email"
              type="email"
              name="email"
              className="inputform h-9"
              placeholder="Email"
            ></input>
          </div>
          <div className="flex justify-center">
            <input
              type="password"
              className="inputform h-9"
              placeholder="mot de passe"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" id="btnSubmitinsc" className="">
              S'inscrire
            </button>
          </div>
          <div>
            <p className="text-center colorPrimary s-samlltexto mx-28">
            En cliquant sur Inscrivez vous, vous indiquez que vous avez lu, compris et accepté les conditions d'utilisation.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
