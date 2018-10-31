import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Usuarios from './components/Usuarios/Usuarios';
import Dependientes from './components/Dependientes/Dependientes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={()=> <Usuarios></Usuarios> }></Route>
          <Route exact path="/dependiente" render={()=> <Dependientes></Dependientes> }></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
