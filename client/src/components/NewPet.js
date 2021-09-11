import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Button, Form, Popup } from "semantic-ui-react"

const NewPet = (props) => {
const [name, setName] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    let res = await axios.post("/api/pets", {name})
    props.history.push("/pets")
  } catch {

  }
};



  return (
    <div>
      <h1>Category New</h1>
      <Link to={`/pets`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="teal" />} />
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name:</label>
          <Form.Input 
          required
          value={name}
          onChange={(e, {value})=>setName(value)}
          />
          <div><Button class="ui button" color='teal' type={'submit'}>Add Category</Button></div>
        </Form.Field>
      </Form>
    </div>
  )
};

export default NewPet;