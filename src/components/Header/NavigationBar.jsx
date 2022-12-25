import React from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../utils/MyContext";

const NavigationBar = ({ bgnavbar }) => {
  const navigate = useNavigate();
  const { connected, setConnected } = React.useContext(MyContext);
  
  return (
    <navbar
      className={`flex justify-between mb-10 ${
        bgnavbar ? "bg-primary-purple" : ""
      }`}
    >
      <button
        className="text-white text-xl font-bold font-mono p-2 m-2"
        onClick={() => navigate("/")}
      >
        <img src="../../../public/logo.svg" alt="" className=" w-11" />
      </button>
      <div className="flex text-white mt-2">
        <div className="itemsbar" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="itemsbar" onClick={() => navigate("/AboutUs")}>
          About us
        </div>
        <div className="itemsbar" onClick={() => navigate("/Achat")}>
          Our cars
        </div>
      </div>
      <div className="flex gap-4 p-2 pr-3 mb-1">
        {connected ? (
          <div className="flex gap-4 flex-row-reverse">
            <a href="/Compte"><img src="../../public/raouf.png" className="profilPic2" alt="" /></a> 
        
            <button className="raduis itemsbar text-white m-1" onClick={()=>{navigate("/Vendre")}}>
              Post a car
            </button>
          </div>
        ) : (
          <button
            className="raduis text-purple-700 btnConnect m-1"
            onClick={() => navigate("/signIn")}
          >
            Se connecter
          </button>
        )}
      </div>
    </navbar>
  );
};

export default NavigationBar;
