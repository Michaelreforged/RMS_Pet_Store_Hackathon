import React, { useEffect, useState } from "react"
import axios from "axios"
import { Button, Popup } from "semantic-ui-react";
import Pet from "./Pet";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router'


const Pets = (props) => {
const history = useHistory()
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
        <div>
        <Pet key={p.id} {...p} deletePet={deletePet}/>
        </div>
      )
    })
  )
};


  return (
    <div>
      <h1>Pets</h1>
      <Link to={`/pets/new`}>
        <Popup content='New' trigger={<Button icon="file" color="teal" />} />
      </Link>
      <br />
      <br />
      {renderPets()}
    </div>
  )
};

export default Pets;