import React from "react";
import { Button, Card, Icon, Segment } from "semantic-ui-react";
import { useHistory } from "react-router";

const Job = (props) => {
  const {title,company,salary} = props.location.state[0]
  const history = useHistory()

  return (
<<<<<<< HEAD
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
=======
    <div>
      <h1>{title}</h1>
      <h3>{company}</h3>
      <p>Salary per year ${salary}</p>
      <button onClick={() => history.goBack()}>Back </button>
    </div>
>>>>>>> e08412c6a5e8572fa73bb23e3ad9c457116b5848
  );
};
export default Job;