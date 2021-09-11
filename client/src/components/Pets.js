import React, { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "semantic-ui-react";
import Pet from "./Pet";
import { Link } from "react-router-dom";

const Pets = () => {
const [pets, setPets] = useState([]);
useEffect(()=>{
  getPets()
}, []);

const deletePet = async (id) => {
  try {
    await axios.delete(`/api/pets/${id}`)
    setPets(pets.filter((p)=> p.id !== id))
  } catch (err) {

  }
};

const getPets = async () => {
  try {
    let res = await axios.get("/api/pets")
    console.log(res.data)
    setPets(res.data)
  } catch (err) {

  }
};

const renderPets = () => {
  return (
    pets.map((p)=>{
      return (
        <Pet key={p.id} {...p} deletePet={deletePet}/>
      )
    })
  )
};








  return (
    <div>
      <h1>Pets</h1>
      <Link to="/pets/new">
        <Button color="green">Add a Pet</Button>
      </Link>
      {renderPets()}
    </div>
  )
};

export default Pets;