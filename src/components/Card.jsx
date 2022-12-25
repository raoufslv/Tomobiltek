import React from "react";

const Card = ({ voiture }) => {
  return (
    <a href='/Annonce:{voiture.id}'>{}
      <div id="cradcar" className="flex items-end">
        <div className=" text-white flex justify-between bgTransParent flex-1 pb-1 px-3">
          <div>
            <h4 className=" font-semibold">Audi RS3 <span>{/*voiture.name*/}</span></h4>
            <h4 className=" text-sm">Blida<span>{/*voiture.Region*/}</span></h4>
          </div>
          <div>
            <h4 className=" text-sm">2021<span>{/*voiture.Year*/}</span></h4>
            <h4 className=" text-sm familyyy">2000000 da <span>{/*voiture.prix*/}</span></h4>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
