import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Button, Form, Popup } from "semantic-ui-react";

const EditPet = (props) => {
const [name, setName] = useState(props.match.params.name)
useEffect(()=>{
  getPet()
}, [])

const getPet = async () => {
  try {
    let res = await axios.get(`/api/pets/${props.match.params.id}`)
    setName(res.data.name)
    console.log(res.data.name)
  } catch {

  }
};

const handleSubmit = async (e) => {
  try {
    let res = await axios.put(`/api/pets/${props.match.params.id}`, {name})
    props.history.push("/pets")
  } catch {

  }
};

  return (
    <div>
      <h1>Job Edit</h1>
      <Link to={`/pets`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="teal" />} />
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name:</label>
          <Form.Input 
          required
          value={name}
          onChange={(e, { value }) => setName(value)}
          />
          <div><Button class="ui button" color='teal' type={'submit'}>Update</Button></div>
        </Form.Field>
      </Form>
    </div>
  );
};

export default EditPet;