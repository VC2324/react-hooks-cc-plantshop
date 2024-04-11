import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage() {
  const [plants, setPlants] =useState ([])
  const [search, setSearch] =useState('plaaa')
  function createPlant(newPlant){
    setPlants([...plants, newPlant])

  }
 
  return (
    <main>
      <NewPlantForm plants ={plants} setPlants={setPlants} createPlant = {createPlant}/>
      <Search plants ={plants} setPlants={setPlants} search={search} setSearch={setSearch}/>
      <PlantList plants ={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
