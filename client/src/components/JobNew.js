// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Popup } from "semantic-ui-react";
// import { Link } from "react-router-dom";

// const JobNew = (props) => {
//   const [title, setTitle] = useState("")
//   const [company, setCompany] = useState()
//   const [salary, setSalary] = useState("")
//   const [error, setError] = useState(false)

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   setError(false)
//   try {
//   let res = await axios.post('/api/jobs', {title, company, salary})
//   props.history.push("/jobs");
//   } catch (err) {
//     setError(true);
//   }

// }

//   return (
//       <>
//     <form onSubmit={handleSubmit}>
//       <h1>Create a new Job</h1>
//       <Link to={`/jobs`}>
//         <Popup content='Go Back' trigger={<Button icon="angle left" color="blue" />} />
//       </Link>
//       {/* <div onClick={() => props.history.goBack()}>Back</div> */}
//        {error && <p style={{ color: "red" }}>Error Occurred</p>}
//         <div class="ui inverted segment">
//         <div class="ui inverted form">
//           <div class="two fields">
//             <div class="field">
//               <label>Title:</label>
//               <input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Title" type="text" />
//             </div>
//             <div class="field">
//               <label>Company:</label>
//               <input value={company} onChange={(e)=> setCompany(e.target.value) } placeholder="Company" type="text" />
//             </div>
//             <div class="field">
//               <label>Salary:</label>
//               <input value={salary} onChange={(e)=> setSalary(e.target.value) } placeholder="Salary" type="float" />
//             </div>
//           </div>
//           <div><Button class="ui button" inverted color='blue' type={'submit'}>Add Job</Button></div>
//         </div>
//       </div>
//     </form>
//     </>
//   );
// };

// export default JobNew;

import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Input, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

// const options = [
//   { key: "1", text: "Gin", value: "jin" },
//   { key: "2", text: "Juice", value: "juice" },
// ];

const JobNew = (props) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [titleError, setTitleError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "") {
      setTitleError(true);
      return;
    }
    // axios call
    // we could use our standard, the older way
    axios
      .post(`/api/jobs`, { title, company, salary })
      .then((res) => {
        props.history.push("/jobs");
      })
      .catch((err) => {
        console.log(err);
      });

      // new way to axios

      // const handleSubmit = async (e) => {
      //   e.preventDefault()
      //   setError(false)
      //   try {
      //   let res = await axios.post('/api/jobs', {title, company, salary})
      //   props.history.push("/jobs");
      //   } catch (err) {
      //     setError(true);
      //   }
  };
  const titleChanged = (e, { value }) => {
    if (setTitleError && value != "") {
      setTitleError(false);
    }
    setTitle(value);
  };
  return (
    <>
      
      <h1>Job New</h1>
      <Link to={`/jobs`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="teal" />} />
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Position:</label>
          <Form.Input
            error={titleError && "title can't be blank"}
            value={title}
            onChange={titleChanged}
          />
          <label>Company:</label>
          <Form.Input
            value={company}
            onChange={(e, { value }) => setCompany(value)}
          />
          <label>Salary:</label>
          <Form.Input
            value={salary}
            onChange={(e, { value }) => setSalary(value)}
          />
          {/* <Button type="submit" color="blue">
            Add
          </Button> */}
          <div><Button class="ui button" color='teal' type={'submit'}>Add Job</Button></div>
        </Form.Field>
      </Form>
    </>
  );
};

export default JobNew;