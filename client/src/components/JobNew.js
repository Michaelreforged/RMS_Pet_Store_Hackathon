import React, { useState } from 'react';
import axios from 'axios';
import { Button, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

const JobNew = (props) => {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState()
  const [salary, setSalary] = useState("")
  const [error, setError] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  setError(false)
  try {
  let res = await axios.post('/api/jobs', {title, company, salary})
  props.history.push("/jobs");
  } catch (err) {
    setError(true);
  }

}

  return (
      <>
    <form onSubmit={handleSubmit}>
      <h1>Create a new Job</h1>
      <Link to={`/jobs`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="blue" />} />
      </Link>
      {/* <div onClick={() => props.history.goBack()}>Back</div> */}
       {error && <p style={{ color: "red" }}>Error Occurred</p>}
        <div class="ui inverted segment">
        <div class="ui inverted form">
          <div class="two fields">
            <div class="field">
              <label>Title:</label>
              <input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Title" type="text" />
            </div>
            <div class="field">
              <label>Company:</label>
              <input value={company} onChange={(e)=> setCompany(e.target.value) } placeholder="Company" type="text" />
            </div>
            <div class="field">
              <label>Salary:</label>
              <input value={salary} onChange={(e)=> setSalary(e.target.value) } placeholder="Salary" type="float" />
            </div>
          </div>
          <div><Button class="ui button" inverted color='blue' type={'submit'}>Add Job</Button></div>
        </div>
      </div>
    </form>
    </>
  );
};

export default JobNew;