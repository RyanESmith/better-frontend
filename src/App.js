import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EntityEdit from './EntityEdit'
import Home from './Home'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/:entityType/:id' component={EntityEdit}/>
      </Switch>
    </Router>
  );
}

export default App;
