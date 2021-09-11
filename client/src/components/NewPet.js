import axios from "axios"
import React, { useState } from "react"
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

      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name:</label>
          <Form.Input 
          value={name}
          onChange={(e, {value})=>setName(value)}
          />
          <Button color="green">Add</Button>
        </Form.Field>
      </Form>
  )
}

export default NewPet;