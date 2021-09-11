import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios"
import { Button, Card, Icon, Popup } from "semantic-ui-react";
import { Link } from 'react-router-dom'; 
import ItemForm from "./ItemForm";
import Item from "./Item";

const Items = (props) => {
  const history = useHistory()
  console.log(props)
  const [items, setItems] = useState([]);
  const [pets, setPets] = useState([])
  const [showform, setShowform] = useState(false)
  const [showform2, setShowform2] = useState(false)
  const pets_id = props.match.params.pet_id;

  useEffect(() => {
    getProps()
  },[]);

  const getProps = async ()=>{
    try {
      let res = await axios.get(`/api/pets/${pets_id}/items`);
      console.log(res)
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
      console.log(res.data)
      setItems([res.data, ...items])
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
    return items.map((item)=>(
      
      <div key={item.id}>

        <h2>{item.name}</h2>
        <h4>Product Description</h4>
        <p>{item.description} </p>
        <p>Price is: $ {item.price}</p>
        <button onClick={() => deleteItem(item.id)}> Delete Item</button>
        <button onClick={() => setShowform(!showform)}> {showform?"Cancel Edit Item":"Edit Item"}</button>
        {showform && <ItemForm
        {... item}
        editItem = {editItem}

        />}
        <button onClick={() => history.push(`/pets/${pets_id}/items/${item.id}`,[pets, item])}>Show Item</button>
      </div>
    ))
  };

  return(
    <div>
      <h1>{pets.name}</h1>
      <Link to={`/pets`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="teal" />} />
      </Link>
      <br />
      <br />
      {/* <button onClick={() => history.goBack()}>Back</button><br></br> */}
      <Button color='teal' onClick={() => setShowform2(!showform2)}> {showform2?"Cancel Add Item":"AddItem"}</Button>
      {showform2&&<ItemForm
      addItem={addItem}
      />}
      {addItem}
      <br />
      <br />
      {renderItems()}
    </div>
  )
};

export default Items
