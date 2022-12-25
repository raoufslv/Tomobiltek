import React from "react";
import Navbar from "../components/Header/NavigationBar";
import Card from "../components/Card";
import axios from "axios";
import { useEffect } from "react";
import MyContext from "../utils/MyContext";
import { useNavigate } from "react-router-dom";

const Achat = () => {
  const navigate = useNavigate();
  const [voitureRech, setVoitureRech] = React.useState([null]);
  const [voitureReg, setVoitureReg] = React.useState([null]);
  const { connected, setConnected } = React.useContext(MyContext);

  // use MyContext

  // remplissage de la liste des voitures par region
  // const ListVoitureReg = {
  //   Alger: [
  //     {
  //       id: 1,
  //       nom: "Audi A4",
  //       prix: 10000,
  //       annee: 2010,
  //       region: "Alger",
  //       carburant: "petrol",
  //       image:
  //         "https://www.audi.com/content/dam/gbp2/experience-audi/vehicles/a4/saloon/2019/overview/19-a4-saloon-overview-01.jpg?imwidth=1920",
  //     },
  //     {
  //       id: 2,
  //       nom: "Audi A5",
  //       prix: 20000,
  //       annee: 2015,
  //       region: "Alger",
  //       carburant: "petrol",
  //       image:
  //         "https://www.audi.com/content/dam/gbp2/experience-audi/vehicles/a5/sportback/2019/overview/19-a5-sportback-overview-01.jpg?imwidth=1920",
  //     },
  //   ],
  //   Blida: [
  //     {
  //       id: 3,
  //       nom: "Audi A6",
  //       prix: 30000,
  //       annee: 2020,
  //       region: "Blida",
  //       carburant: "petrol",
  //       image:
  //         "https://www.audi.com/content/dam/gbp2/experience-audi/vehicles/a6/saloon/2019/overview/19-a6-saloon-overview-01.jpg?imwidth=1920",
  //     },
  //     {
  //       id: 4,
  //       nom: "Audi A7",
  //       prix: 40000,
  //       annee: 2021,
  //       region: "Blida",
  //       carburant: "petrol",
  //       image:
  //         "https://www.audi.com/content/dam/gbp2/experience-audi/vehicles/a7/sportback/2019/overview/19-a7-sportback-overview-01.jpg?imwidth=1920",
  //     },
  //   ],
  // };

  // setVoitureReg(ListVoitureReg);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Achat:Region")
      .then((res) => {
        setVoitureReg(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default refresh of the page
    const data = new FormData(e.target); // Get the form data from the event object
    const value = Object.fromEntries(data.entries()); // Convert the form data to an object with key/value pairs for each field in the form (e.g. { name: "John", age: 30 })
    console.log(value);
    axios
      .post("http://localhost:5000/api/Achat:Recherche", value)
      .then((res) => {
        setVoitureRech(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar bgnavbar={true} />

      {/* Bar de Recherche */}
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
              <input
                type="text"
                name="nom"
                className=" inputform h-9"
                placeholder="Nom de la voiture"
              />
            </div>
            <div className="flex justify-center mt-5 gap-5">
              <div className="flex flex-col items-end flex-1">
                <div className="flex flex-1 gap-1">
                  <input
                    name="prixMin"
                    type="number"
                    className="inputform h-9 w-44"
                    placeholder="Prix Min"
                    min={0}
                    max={100000000}
                  />
                  <input
                    name="prixMax"
                    type="number"
                    className="inputform h-9 w-44"
                    placeholder="Prix Max"
                    min={1000}
                    max={100000000000}
                  />
                </div>

                <select type="text" name="region" className="inputform h-9">
                  <option value="">Region</option>
                  <option value="1">Adrar</option>
                  <option value="2">Chlef</option>
                  <option value="3">Laghouat</option>
                  <option value="4">Oum El Bouaghi</option>
                  <option value="5">Batna</option>
                  <option value="6">Bejaia</option>
                  <option value="7">Biskra</option>
                  <option value="8">Bechar</option>
                  <option value="9">Blida</option>
                  <option value="10">Bouira</option>
                  <option value="11">Tamanrasset</option>
                  <option value="12">Tebessa</option>
                  <option value="13">Tlemcen</option>
                  <option value="14">Tiaret</option>
                  <option value="15">Tizi Ouzou</option>
                  <option value="16">Alger</option>
                  <option value="17">Djelfa</option>
                  <option value="18">Jijel</option>
                  <option value="19">Setif</option>
                  <option value="20">Saida</option>
                  <option value="21">Skikda</option>
                  <option value="22">Sidi Bel Abbes</option>
                  <option value="23">Annaba</option>
                  <option value="24">Guelma</option>
                  <option value="25">Constantine</option>
                  <option value="26">Medea</option>
                  <option value="27">Mostaganem</option>
                  <option value="28">MSila</option>
                  <option value="29">Mascara</option>
                  <option value="30">Ouargla</option>
                  <option value="31">Oran</option>
                  <option value="32">El Bayadh</option>
                  <option value="33">Illizi</option>
                  <option value="34">Bordj Bou Arreridj</option>
                  <option value="35">Boumerdes</option>
                  <option value="36">El Tarf</option>
                  <option value="37">Tindouf</option>
                  <option value="38">Tissemsilt</option>
                  <option value="39">El Oued</option>
                  <option value="40">Khenchela</option>
                  <option value="41">Souk Ahras</option>
                  <option value="42">Tipaza</option>
                  <option value="43">Mila</option>
                  <option value="44">Ain Defla</option>
                  <option value="45">Naama</option>
                  <option value="46">Ain Temouchent</option>
                  <option value="47">Ghardaia</option>
                  <option value="48">Relizane</option>
                </select>
              </div>
              <div className=" flex-1">
                <input
                  type="number"
                  name="annee"
                  min="1900"
                  max="2099"
                  step="1"
                  className="inputform h-9"
                  placeholder="year"
                />
                <select type="text" name="fuel" className="inputform h-9">
                  <option value="">Fuel</option>
                  <option value="petrol">petrol</option>
                  <option value="DSL">DSL</option>
                  <option value="LPG">LPG</option>
                  <option value="CNG">CNG</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                name="recherhce"
                type="submit"
                className=" px-3 pt-1 pb-2 my-5"
                id="chercheBtn"
              >
                {" "}
                <span className="text-sm">Rechercher</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Recherche Cars */}
      {voitureRech[0] != null ? (
        <section className="flex justify-center align-middle items-center content-center my-10">
          <div id="venderDiv" className="mx-10 raduis flex flex-col gap-5 p-10">
            <h1 className="text-white text-4xl">VEHICULES TROUVES</h1>
            <div className="flex flex-wrap justify-center gap-5">
              {voitureRech.map((voiture) => (
                <Card voiture={voiture} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}

      {/* Region Cars */}
      {voitureReg[0] != null ? (
        <section className="flex justify-center align-middle items-center content-center my-10">
          <div id="venderDiv" className="mx-10 raduis flex flex-col gap-5 p-10">
            <h1 className="text-center colorPrimary text-4xl">
              VEHICULES DANS VOTRE REGION
            </h1>
            <div className="flex flex-wrap justify-center gap-5">
              {voitureReg.map((voiture) => (
                <Card voiture={voiture} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}

      <section className="mt-5">
        <h1 className="text-center colorPrimary text-4xl">
          Des voitures dans votre région
        </h1>
        <div className="grid grid-cols-4 gap-5 mt-5 mb-3 mx-40">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="grid grid-cols-4 gap-5 my-3 mx-40">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      {/* Poster */}
      <section className="flex justify-center align-middle items-center content-center my-10">
        <div id="venderDiv" className="mx-10 raduis flex flex-col gap-5 p-10">
          <h1 className="text-white text-4xl">
            VENDRE VOTRE VEHICULE <br />
            AUJOURD'HUI
          </h1>
          <button
            id="btnPublier"
            className=" text-white "
            onClick={()=>connected ? navigate("/Vendre") : navigate("/Signup")}
          >
            Publier votre annonce
          </button>
        </div>
      </section>
    </div>
  );
};

export default Achat;
