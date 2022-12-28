import React from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../utils/MyContext";
import Button from "../Button";
import NavbarLink from "../NavbarLink";

const NavigationBar = ({
  bgnavbar = "",
  Home = false,
  AboutUs = false,
  OurCars = false,
}) => {
  const navigate = useNavigate();
  const { connected, setConnected } = React.useContext(MyContext);

  return (
    <navbar className={`flex justify-between mb-10 ${bgnavbar}`}>
      <img
        src="../../../public/logo.svg"
        alt=""
        className="p-2 m-2 w-20 FadeIn"
        onClick={() => navigate("/Vendre")}
      />

      <div className="flex text-white mt-2">
        <NavbarLink text="Home" active={Home} link="/" />
        <NavbarLink text="About us" active={AboutUs} link="/AboutUs" />
        <NavbarLink text="Our cars" active={OurCars} link="/Achat" />
      </div>

      <div className="flex gap-4 p-2 pr-3 mb-1">
        {connected ? (
          <div className="flex gap-4 flex-row-reverse">
            <a href="/Compte">
              <img src="../../public/raouf.png" className="profilPic2" alt="" />
            </a>

            <button
              className="raduis itemsbar text-white m-1"
              onClick={() => {
                navigate("/Vendre");
              }}
            >
              Post a car
            </button>
          </div>
        ) : (
          <div>
            <Button
              text="Se connecter"
              color="bg-white"
              text_color="text-purple-700"
              raduis="rounded-full"
              link="/SignIn"
              additionalClass="hover:bg-purple-900 hover:text-white font-semibold active:text-purple-400 FadeIn"
            />
          </div>
        )}
      </div>
    </navbar>
  );
};

export default NavigationBar;
