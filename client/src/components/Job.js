import React from "react";
import { Button, Card, Icon, Segment } from "semantic-ui-react";
import { useHistory } from "react-router";

const Job = (props) => {
  const {title,company,salary} = props.location.state[0]
  const history = useHistory()

  return (
    <div>
      <h1>{title}</h1>
      <h3>{company}</h3>
      <p>Salary per year ${salary}</p>
      <button onClick={() => history.goBack()}>Back </button>
    </div>
  );
};
export default Job;