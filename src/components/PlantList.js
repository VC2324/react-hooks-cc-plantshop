import React from "react";
import PlantCard from "./PlantCard";
import { useState, useEffect } from "react";

function PlantList() {
const [plants, setPlants] =useState ([])
useEffect (()=>{
  fetch (`http://localhost:6001/plants`)
  .then (response => response.json())
  .then (plantsArray => setPlants(plantsArray))
},[])
 const mappedPlants = plants.map (plant =>{
  return <PlantCard key ={plant.id} plant ={plant} name={plant.name} price={plant.price} image = {plant.image}/>
  ///why is it plan and not plants because we use plants as a param for the .map ?
 })
  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
