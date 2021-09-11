import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react"

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
      <Link to="/pets">
        <Button color="gray">Back</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name:</label>
          <Form.Input 
          required
          value={name}
          onChange={(e, {value})=>setName(value)}
          />
          <Button color="green">Add</Button>
        </Form.Field>
      </Form>
    </div>
  )
};

export default NewPet;