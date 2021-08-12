import React, { } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Launches from './pages/Launches';
import Ships from './pages/Ships';
import Crew from './pages/Crew';
import MenuBar from './components/MenuBar';
import SingleShip from './pages/SingleShip';
import SingleLaunch from './pages/SingleLaunch';
import SingleCrew from './pages/SingleCrew';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Container fluid className='fullPage'>
        <MenuBar />
        <Route exact path="/" component={Launches} />
        <Route exact path="/launches" component={Launches} />
        <Route exact path="/launches/:launchId" component={SingleLaunch} />
        <Route exact path="/ships" component={Ships} />
        <Route exact path="/ships/:shipId" component={SingleShip} />
        <Route exact path="/crew" component={Crew} />
        <Route exact path="/crew/:crewId" component={SingleCrew} />
      </Container>
      <Footer />
    </Router>
  )
}

export default App
