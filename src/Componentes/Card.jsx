import React from "react";

const Card = ({
  name = "Anonimo",
  photo = "https://randomuser.me/api/portraits/lego/1.jpg",
  alt = "Anonimo"
}) => {
  return (
    <>
      <div className="Card">
        <img className="user-photo" src={photo} alt="Karen Diaz" />
        <p>{name}</p>
      </div>
    </>
  );
};

export default Card;
