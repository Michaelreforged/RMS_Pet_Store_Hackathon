import React, { useState } from "react";
import { Button, Card, Icon, Segment } from "semantic-ui-react";
import JobForm from "./JobForm";

const Job = (props) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Card style={{ width: "100%", padding: "20px" }}>
      <Card.Content header={props.title} />
      {showForm && (
        <JobForm
          setShowForm={setShowForm}
          id={props.id}
          updateThing={props.updateJob}
          {...props}
        />
      )}
      <Button.Group style={{ width: "40px" }}>
        <Button color="blue" onClick={() => setShowForm(!showForm)}>
          <Icon name="pencil" />
        </Button>
        <Button color="red" onClick={() => props.deleteJob(props.id)}>
          <Icon name="trash" />
        </Button>
      </Button.Group>
    </Card>
  );
};
export default Job;