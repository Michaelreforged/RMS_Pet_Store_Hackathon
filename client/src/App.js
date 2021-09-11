import React from 'react';
import './App.css';
import { Container } from "semantic-ui-react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

// import Pizzas from "./components/Pizzas";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import JobNew from "./components/JobNew";
// import PizzaEdit from "./components/PizzaEdit";
// import Topping from "./components/Topping";
// import Toppings from "./components/Toppings";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/jobs/new" component={JobNew} />
          {/* <Route exact path="/jobs/:id" component={Job} />
          <Route exact path="/jobs/:id/edit" component={JobEdit} /> */}
        </Switch>
      </Container>  
      <Footer />
    </>
  );
}

export default App;
