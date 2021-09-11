import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Pets from './components/Pets';
import NewPet from './components/NewPet';
import Pet from './components/Pet';
import EditPet from './components/EditPet';
import Home from './components/Home';
import Items from './components/Items';
import About from './components/About';
import Item from './components/Item';

function App() {
  return (
<div>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pets" component={Pets} />
      <Route exact path="/pets/new" component={NewPet} />
      <Route exact path="/pets/:id" component={Pet} />
      <Route exact path="/pets/:id/edit" component={EditPet} />
      <Route exact path="/pets/:pet_id/items" component={Items} />
      <Route exact path="/pets/:pet_id/items/:id" component={Item} />
      {/* <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/jobs/new" component={NewJob} />
      <Route exact path="/jobs/:id" component={Job} />
      <Route exact path="/jobs/:id/edit" component={EditJob} /> */}
      <Route exact path="/about" component={About} />
      
    </Switch>
  </Container>  
</div>
  )};
 
export default App;
