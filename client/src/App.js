import React from 'react';
import './App.css';
import { Container } from "semantic-ui-react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Jobs from "./components/Jobs";
import JobNew from "./components/JobNew";
import JobEdit from "./components/JobEdit";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <div>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/jobs/new" component={JobNew} />
              {/* <Route exact path="/jobs/:id" component={Job} /> */}
              <Route exact path="/jobs/:id/edit" component={JobEdit} />
            </Switch>
          </Container>  
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
