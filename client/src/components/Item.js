<<<<<<< HEAD
import React from "react"

const Item = () => {
  return (
    <div>
      <h1>Item</h1>
    </div>
  )
}

export default Item;
=======
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Item = (props) => {
  const history = useHistory()
  const{petName,id,name,description,price,} = props
  
  return(
    <div>
      <h1>{petName}</h1>
      <h2>{name}</h2>
      <h4>Product Description</h4>
      <p>{description} </p>
      <p>Price is: $ {price}</p>
      <button onClick={() => deleteItem(id)}> Delete Item</button>
      <button onClick={() => history.goBack()}>Back</button><br></br>
    </div>
  )
};

export default Item
>>>>>>> 6ac8af46b332a0ad3bce79bf6cd523c6f8730071
