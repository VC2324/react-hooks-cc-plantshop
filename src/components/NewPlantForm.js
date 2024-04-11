import React from "react";
import { useState } from "react";

function NewPlantForm({createPlant}) {

const [name, setName] = useState("")
const [image, setImage] = useState("")
const [price, setPrice] = useState("")

function handleSubmit(event){
  event.preventDefault()
  fetch('http://localhost:6001/plants',{
    method:"POST",
    headers: {
      "Content-Type": 'Application/JSON',
      // "accept": 'application/json', why is this not needed ? test doesnt need it 
    },
    body: JSON.stringify({
      name: name,
      image:image,
      price: price
    })
  })
  .then (response => response.json())

  .then (newPlant => createPlant(newPlant))
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={event => setName(event.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange={event => setImage(event.target.value)}type="text" name="image" placeholder="Image URL" />
        <input onChange={event => setPrice(event.target.value)}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
