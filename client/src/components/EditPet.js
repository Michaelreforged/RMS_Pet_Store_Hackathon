import axios from "axios";
import React, { useEffect, useState } from "react"
import { Button, Form } from "semantic-ui-react";

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
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Name:</label>
        <Form.Input 
        required
        value={name}
        onChange={(e, { value }) => setName(value)}
        />
        <Button color="blue">Update</Button>
      </Form.Field>
    </Form>
  )
}

export default EditPet;