import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Button, Card, Icon, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      let res = await axios.get("/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJob = async (id) => {
    try {
      let res = await axios.delete(`/api/jobs/${id}`);
      setJobs(jobs.filter((j) => j.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const renderJobs = () => {
    return jobs.map((j) => {
      return (
        <Card>
        <Card.Content><h3>Position: {j.title}</h3></Card.Content>
        <Card.Content><h4>Company: {j.company}</h4></Card.Content>
        <Card.Content><h4>Salary: {j.salary}</h4></Card.Content>
        <Button.Group vertical>
          <Button.Group basic centered vertical>
            <Link to={`/jobs/${j.id}/edit`}>
              <Button icon>
                <Popup content='Edit' trigger={<Icon name="edit" color="teal" />} />
              </Button>
            </Link>
            <Button.Group>
              <Button icon>
                <Popup content='Delete' trigger={<Icon name='trash' color="red" background="red" onClick={() => deleteJob(j.id)} />} />
              </Button>
            </Button.Group>
          </Button.Group>
        </Button.Group>
        </Card>
      );
    });
  };

  return (
    <div>
      <h1>Jobs</h1>
      <Link to={`/jobs/new`}>
        <Popup content='New' trigger={<Button icon="file" color="teal" />} />
      </Link>
      <br />
      <br />
      <Card.Group>{renderJobs()}</Card.Group>
      
    </div>
  );
};

export default Jobs;

