import React, { useState } from "react";

const ItemForm = (props) =>{
  const[name, setName] = useState(props.name ? props.name : "");
  const[description, setDescription] = useState(props.description ? props.description : "");
  const[price, setPrice] = useState(props.price ? props.price : "");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (props.id) {
        props.editItem({id: props.id, name,description,price})
      }else{
      try {
        props.addItem({name,description,price})
      } catch (error) {
        console.log(error)
      }
    }
  }

  return(
    <div>
    <h1>{props.name ? "Edit Item":"New Item"}</h1>
    <form onSubmit={handleSubmit}>
    <p>Item Name</p>
    <input value={name}
    onChange = {(e) => {
      setName(e.target.value)}}
    />
    <p>Item Description</p>
    <input value={description}
    onChange = {(e) => {
      setDescription(e.target.value)}}
    />
    <p>Item Price</p>
    <input value={price}
    onChange = {(e) => {
      setPrice(e.target.value)}}
    />
    <br></br>
    <button>{props.name ?"Edit Item" : "Add Item"}</button>
    </form>
    </div>
  )

}

export default ItemForm