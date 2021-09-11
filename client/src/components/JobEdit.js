import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Popup } from "semantic-ui-react";

// 1. grab data from db
// 2. set state
// 3. render form with values
// 4. set change handlers
// 5 handlesubmit function
// 6 axios put
// 7 route to index page

const JobEdit = (props) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    try {
      let res = await axios.get(`/api/jobs/${props.match.params.id}`);
      setTitle(res.data.title);
      setCompany(res.data.company);
      setSalary(res.data.salary);
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = async (e) => {
    try {
      let res = await axios.put(`/api/jobs/${props.match.params.id}`, {
        title,
        company,
        salary,
      });
      props.history.push("/jobs");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <h1>JobFormEdit</h1>
      <Link to={`/jobs`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="blue" />} />
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Position:</label>
          <Form.Input
            required
            value={title}
            onChange={(e, { value }) => setTitle(value)}
          />
          <label>Comany:</label>
          <Form.Input
            value={company}
            onChange={(e, { value }) => setCompany(value)}
          />
          <label>Salary:</label>
          <Form.Input
            value={salary}
            onChange={(e, { value }) => setSalary(value)}
          />
        </Form.Field>
        <div><Button class="ui button" color='blue' type={'submit'}>Update</Button></div>
      </Form>
    </div>
  );
};

export default JobEdit;

