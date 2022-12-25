import React from "react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { Button, Radio } from "flowbite-react";
import Navbar from "../components/Header/NavigationBar";
import { useNavigate } from "react-router-dom";
import MyContext from "../utils/MyContext";
import axios from "axios";

const Vendre = () => {
  const navigate = useNavigate();
  const { connected, setConnected } = React.useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);
    axios
      .post("http://localhost:3001/api/v1/annonce", formData)
      .then((res) => {
        console.log(res);
        navigate("/Achat");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar bgnavbar="true" />
      <div className="flex justify-center">
        <div className="flex  mx-auto gap-10 shadow shadow-stone-800 raduis">
          <form className="p-4 pt-3">
            <div>
              <h1>Créer votre annonce :</h1>
              <hr className=" w-24 nice_line mb-0" />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Nom"
                name=""
                id=""
                className="inputform w-52 rounded "
              />
              <input
                type="text"
                placeholder="Année"
                name=""
                id=""
                className="inputform w-52 rounded mt-2"
              />
              <input
                type="text"
                placeholder="Kilometrage"
                name=""
                id=""
                className="inputform w-52 rounded mt-2"
              />
              <select
                type="text"
                name="Carburant"
                className="inputform  w-52 rounded mt-2"
              >
                <option value="">Fuel</option>
                <option value="petrol">petrol</option>
                <option value="DSL">DSL</option>
                <option value="LPG">LPG</option>
                <option value="CNG">CNG</option>
              </select>
              <input
                type="text"
                placeholder="Moteur"
                name=""
                id=""
                className="inputform w-52 rounded mt-2"
              />
              <input
                type="text"
                placeholder="Puissance Max"
                name=""
                id=""
                className="inputform w-52 rounded mt-2"
              />
              <input
                type="text"
                placeholder="Places"
                name=""
                id=""
                className="inputform w-52 rounded mt-2"
              />
              <select
                type="text"
                name="main"
                className="inputform  w-52 rounded mt-2"
              >
                <option value="">La main</option>
                <option value="1">premiere main</option>
                <option value="2">deuxieme main</option>
                <option value="3">Troisieme main</option>
                <option value="+4">quatre ou plus</option>
              </select>
              <div className="flex justify-end ">
                <img src="../../public/Addpic.png" className="w-10" alt="" />
              </div>
            </div>
            <div className="flex justify-center mt-1">
              <button type="submit" id="chercheBtn" className="px-2 py-1 w-40">
                deposer
              </button>
            </div>
          </form>
          <div>
            <img src="../../public/carPost.png" className="w-44" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendre;
