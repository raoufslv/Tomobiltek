import React from "react";
import Navbar from "../components/Header/NavigationBar";

const SignIn = () => {
  return (
    <div>
      <Navbar bgnavbar={true} />
      <div className="flex content-center justify-center">
        <div className="flex flex-col items-center content-center">
          <p>Connectez-vous pour profiter de toutes les fonctionnalitées</p>
          <p className="">de notre site</p>
        </div>
      </div>
      <div>
        <form id="" action="" method=""  className=" w-1/2 mx-auto border mt-5 shadowFormulair" >
          <h1 className="colorPrimary titleInsc text-center">Connexion</h1>
          <div className="flex justify-center">
            <input id="email" type="text" name="email" className="inputform h-9" placeholder="Email"></input>
          </div>
          <div className="flex justify-center">
            <input type="password" className="inputform h-9"  placeholder="mot de passe" />
          </div>
          <div className="flex justify-center">
            <button type="submit" id="btnSubmitinsc" className="">Se connecter</button>
          </div>
          <div>
            <p className="text-center colorPrimary samlltexto">Vous n'avez pas de compte ? <a href="/Signup" className=" font-bold">créer un nouveau compte</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
