import React from "react"
import { Link } from "react-router-dom";
import { Button, Card, Segment } from "semantic-ui-react";


const Pet = (props) => {
  console.log("props")
  return (
    <div>
      <Card>
        <Card.Content>{props.name}</Card.Content>
        <Card.Content>{props.id}</Card.Content>
        <Link to={`/pets/${props.id}/edit`}>
        <Button color="blue">Edit</Button>
        </Link>
        <Button onClick={()=>props.deletePet(props.id)} color="red">Delete</Button>
      </Card>
    </div>
  )
};

export default Pet;