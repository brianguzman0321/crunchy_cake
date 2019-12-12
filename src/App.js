import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CrunchyBird from './functions/bird';
import CrunchyLady from './functions/lady';
import CrunchyMonkey from './functions/monkey';
import CrunchyLovers from './functions/lovers';
import CrunchyCycle from './functions/cycle';
import CrunchyLogo from './functions/logo';
import CrunchyBaby from './functions/baby';
import CrunchyDonkey from './functions/donkey';
import CrunchyVolcano from './functions/volcano';
import CrunchyFeedback from './functions/feedback';
import CrunchyReview from './functions/review';
import Show from './components/show_feedback';


const Home = () => {
  return (
    <>
      <CrunchyBird />
      <CrunchyLady />
      <CrunchyMonkey />
      <CrunchyLovers />
      <CrunchyCycle />
      <CrunchyLogo />
      <CrunchyBaby />
      <CrunchyDonkey />
      <CrunchyVolcano />
      <CrunchyReview />
      <CrunchyFeedback />
    </>
  );
}


const App = () => {
  return(
    <Router>
      <Switch>
       <Route exact path = "/">
         <Home />
       </Route>
       <Route exact path = "/show_feedback">
         <Show />
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
