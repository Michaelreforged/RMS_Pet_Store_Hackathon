import React from "react"
import { Form } from "semantic-ui-react";

const EditPet = () => {
  return (
    <Form>
      <Form.Field>
        <label>Name:</label>
        <Form.Input />
      </Form.Field>
    </Form>
  )
}

export default EditPet;