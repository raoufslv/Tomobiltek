import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text="button", color="bg-puprle-secondary", raduis="rounded-full", margin="m-1", padding="px-5 py-2", size="text-xl", text_color="text-white", link="/", additionalClass="" }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`${raduis} ${color} ${margin} ${padding} ${size} ${text_color} ${additionalClass}`}
      onClick={() => navigate(`${link}`)}
    >
      {text}
    </button>
  );
};

export default Button;
