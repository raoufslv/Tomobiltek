import React from "react";
import Navbar from "../components/Header/NavigationBar";
import axios from "axios";
import MyContext  from "../utils/MyContext";


export default function SignUp() {

  const { Connected, setConnected } = React.useContext(MyContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", {
        email,
        password,
        username,
      })
      .then((res) => {
        console.log(res);
        setConnected(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };


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
        <form className=" w-1/2 mx-auto border mt-5 shadowFormulair">
          <h1 className="colorPrimary titleInsc text-center">Inscription</h1>
          <div className="flex justify-center">
            <input
              id="username"
              type="text"
              name="username"
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
              id="password"
              name="password"
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
