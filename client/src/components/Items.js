import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios"
import Item from "./Item";

const Items = (props) => {
  const history = useHistory()
  const [item, setItem] = useState([]);
  const [pet, setPet] = useState([])
  const pets_id = 2; // Temporary hard code

  useEffect(() => {
    getProps()
  },[]);

  const getProps = async ()=>{
    try {
      let res = await axios.get(`/api/pets/${pets_id}/items`);
      console.log (res);
      setItem(res.data.item);
      setPet(res.data.pet);
    } catch (error) {
      console.log("failed to get props")
      console.log(error)
    }
  }

  const renderItems = () => {
    return item.map((i)=>(
      <div>

        <h2>{i.name}</h2>
        <h4>Product Description</h4>
        <p>{i.description} </p>
        <p>Price is: $ {i.price}</p>
        
        {/* <Item
        {... i}
        petName={pet.name}
        /> */}
      </div>
    ))
  };

  return(
    <div>
      <h1>{pet.name}</h1>
      {renderItems()}
    </div>
  )
};

export default Items