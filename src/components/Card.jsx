import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ i }) => {
  const nav = useNavigate();
  const goToDetail = () => {
    nav(`/recipes/${i.id}`);
  };
  return (
    <div
      className=" w-[136px] sm:w-56  shadow-lg rounded-lg overflow-hidden hover:scale-[1.03] hover:shadow-xl hover:shadow-first/20 transition duration-500"
      onClick={goToDetail}
    >
      <img
        src={`/img/${i.Name}.jpg`}
        alt={i.Name}
        className=" w-full h-36 sm:h-64 object-cover rounded-lg"
      />
      <p className=" mt-4 mb-6 mx-4 font-medium truncate text-sm">{i.Name}</p>
    </div>
  );
};

export default Card;
