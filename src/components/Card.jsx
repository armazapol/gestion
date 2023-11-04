import React from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ icon, title, body, link }) => {
  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="shadow-md p-5 flex flex-col gap-3 hover:shadow-lg cursor-pointer" onClick={()=>navigate(link)} >
      <div className="flex gap-3">
        <img src={icon} alt={title} />
        <p className="text-2xl">{title} </p>
      </div>
      <div>
        <p className="capitalize">{body} </p>
      </div>
    </div>
  );
};

export default Card;
