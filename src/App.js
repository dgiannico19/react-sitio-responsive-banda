import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Musica from './paginas/Musica';
import Contacto from './paginas/Contacto';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/musica">
          <Musica />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
