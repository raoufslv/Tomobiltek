import React from "react";
import Navbar from "../components/Header/NavigationBar";
import axios from "axios";
import MyContext  from "../utils/MyContext";
import { redirect } from "react-router-dom";

const SignIn = () => {
  
  const { Connected, setConnected } = React.useContext(MyContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signin", {
        email,
        password,
        username,
      })
      .then((res) => {
        console.log(res);
        setConnected(true);
        redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar bgnavbar="bg-primary-purple" />
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
            <input type="password" id="password" name="password" className="inputform h-9"  placeholder="mot de passe" />
          </div>
          <div className="flex justify-center">
            <button type="submit" name="submit" id="btnSubmitinsc" className="">Se connecter</button>
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
