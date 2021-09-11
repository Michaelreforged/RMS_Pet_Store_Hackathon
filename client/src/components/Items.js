import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios"
import ItemForm from "./ItemForm";
// import Item from "./Item";

const Items = (props) => {
  const history = useHistory()
  const [items, setItems] = useState([]);
  const [pets, setPets] = useState([])
  const [showform, setShowform] = useState(true)
  const pets_id = props.match.params.pets_id;

  useEffect(() => {
    getProps()
  },[]);

  const getProps = async ()=>{
    try {
      let res = await axios.get(`/api/pets/${pets_id}/items`);
      setItems(res.data.item);
      setPets(res.data.pet);
    } catch (error) {
      console.log("failed to get props")
      console.log(error)
    }
  }

  const addItem = async (item) =>{
    try {
      let res = await axios.post( `/api/pets/${pets_id}/items`, item)
      setItems([res.data.item, ...items])
      console.log(item)
    } catch (error) {
      console.log(error)
    }
  }

  const editItem = async (item) =>{
    console.log(items)
    try {
      let res = await axios.put(`/api/pets/${pets_id}/items/${item.id}`, item)
      let newitems = items.map((i)=> (i.id === item.id) ? item : i);
      setItems(newitems)
    } catch (error) {
      
    }
  }

  const deleteItem = async (id) => {
    try {
      let res = await axios.delete(`/api/pets/${pets_id}/items/${id}`);
      setItems(items.filter((i) => i.id !==id));
    } catch (error) {
    console.log(error)  
    };
  };

  const renderItems = () => {
    return items.map((i)=>(
      <div key={i.id}>

        <h2>{i.name}</h2>
        <h4>Product Description</h4>
        <p>{i.description} </p>
        <p>Price is: $ {i.price}</p>
        <button onClick={() => deleteItem(i.id)}> Delete Item</button>
        <button onClick={() => setShowform(!showform)}> {showform?"Cancel Edit Item":"Edit Item"}</button>
        {showform && <ItemForm
        {... i}
        editItem = {editItem}

        />}

        {/* <Item
        petName={pets.name}
        {... i}

        /> */}
      </div>
    ))
  };

  return(
    <div>

      <button onClick={() => history.goBack()}>Back</button><br></br>
      <h1>{pets.name}</h1>
      <ItemForm
      addItem={addItem}
      />
      {addItem}
      {renderItems()}
    </div>
  )
};

export default Items
