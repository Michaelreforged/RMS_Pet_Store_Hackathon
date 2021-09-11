import React from "react"
import { Button, Card, Segment } from "semantic-ui-react";

const Pet = (props) => {
  return (
    <div>
      <Card>
        <Card.Content>{props.name}</Card.Content>
        <Button onClick={()=>props.deletePet(props.id)} color="red">Delete</Button>
      </Card>
    </div>
  )
};

export default Pet;