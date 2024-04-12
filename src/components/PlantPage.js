import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage() {
  const [plants, setPlants] =useState ([])
  const [search, setSearch] =useState('')
  function createPlant(newPlant){
    setPlants([...plants, newPlant])

  }
 const filteredPlants = plants.filter(plants =>plants.name.toLowerCase().includes(search))
  return (
    <main>
      <NewPlantForm createPlant = {createPlant}/>
      <Search plants ={plants} setPlants={setPlants} search={search} setSearch={setSearch}/>
      <PlantList plants ={filteredPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
