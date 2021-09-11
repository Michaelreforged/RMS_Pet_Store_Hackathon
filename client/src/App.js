import { Container } from "semantic-ui-react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Jobs from "./components/Jobs";
import JobNew from "./components/JobNew";
import JobEdit from "./components/JobEdit";
import Pets from './components/Pets';
import NewPet from './components/NewPet';
import Pet from './components/Pet';
import EditPet from './components/EditPet';
import Items from './components/Items';
import About from './components/About';
import Item from './components/Item';
import Job from "./components/Job";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <div>
          <Container>
            <Switch>
              <Route exact path="/pets" component={Pets} />
              <Route exact path="/pets/new" component={NewPet} />
              <Route exact path="/pets/:id" component={Pet} />
              <Route exact path="/pets/:id/edit" component={EditPet} />
              <Route exact path="/pets/:pet_id/items" component={Items} />
              <Route exact path="/pets/:pet_id/items/:id" component={Item} />
              <Route exact path="/" component={Home} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/jobs/new" component={JobNew} />
              <Route exact path="/jobs/:id" component={Job} />
              <Route exact path="/jobs/:id/edit" component={JobEdit} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Container>  
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
export default App;
