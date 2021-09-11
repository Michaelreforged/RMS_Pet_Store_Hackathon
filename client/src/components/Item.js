import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Item = (props) => {
  console.log(props)
  const{name,description,price} = props
  
  return(
    <div >
      <h2>{name}</h2>
      <h4>Product Description</h4>
      <p>{description} </p>
      <p>Price is: $ {price}</p>
    </div>
  )
};

export default Item