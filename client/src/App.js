import React from 'react';
import './App.css';
// import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Items from "./components/Items"

function App() {
  return (
    <div className="App">
      
      <Switch>
      <Route exact path="/pets/:pets_id/Items/" component={Items} />
      </Switch>
    </div>
  );
}

export default App;
