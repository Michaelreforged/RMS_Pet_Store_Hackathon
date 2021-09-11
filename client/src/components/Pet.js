import React from "react"
import { Link } from "react-router-dom";
import { Button, Card, Icon, Popup } from "semantic-ui-react";


const Pet = (props) => {
  console.log("props")
  return (
    <div>
      <Card>
        <Card.Content><h3>Category: {props.name}</h3></Card.Content>
        {/* <Card.Content>{props.id}</Card.Content> */}
        <Link to={`/pets/${props.id}/items`}>
          <Button color="teal">Items</Button>
        </Link>
        <Button.Group basic centered vertical>
          <Link to={`/pets/${props.id}/edit`}>
            <Button icon>
              <Popup content='Edit' trigger={<Icon name="edit" color="teal" />} />
            </Button>
          </Link>
          <Button.Group>
              <Button icon>
                <Popup content='Delete' trigger={<Icon name='trash' color="red" background="red" onClick={() => props.deletePet(props.id)} />} />
              </Button>
            </Button.Group>
        </Button.Group>
      </Card>
    </div>
  )
};

export default Pet;