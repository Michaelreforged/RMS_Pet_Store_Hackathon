import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Item = (props) => {
  const history = useHistory()
  const{petName,name,description,price,} = props
  
  return(
    <div>
      <h1>{petName}</h1>
      <h2>{name}</h2>
      <h4>Product Description</h4>
      <p>{description} </p>
      <p>Price is: $ {price}</p>
      <button onClick={() => history.goBack()}>Back</button><br></br>
    </div>
  )
};

export default Item