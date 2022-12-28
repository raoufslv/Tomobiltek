import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLink = ({ text, active, link }) => {
  const navigate = useNavigate();
  return (
    <div
      className="mx-10 mt-3 hover:cursor-pointer hover:text-purple-800 font-semibold item_navbar FadeIn"
      onClick={() => navigate(`${link}`)}
    >
      {text}
      {active ? <hr className="active_line mx-auto" /> : ""}
    </div>
  );
};

export default NavbarLink;
