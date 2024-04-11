import React,{useEffect, useState} from "react";

function PlantCard({name, image, price}) {
  const [stock, setStock] = useState(true)

  function handleClick (){
    setStock(!stock)

  }

  // console.log(image)
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick ={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick ={handleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
