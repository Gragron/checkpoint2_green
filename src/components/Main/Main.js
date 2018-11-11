import React, { Component } from 'react';

// Router
import { Route, Switch } from "react-router-dom";

// Components
import Usuarios from './Usuarios/Usuarios';
import Dependientes from './Dependientes/Dependientes';
import AddUser from './Usuarios/AddUser/AddUser';


class Main extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" render={()=> <Usuarios/> }></Route>
          <Route exact path="/dependiente" render={()=> <Dependientes/> }></Route>
          <Route exact path="/AddUser" render={()=> <AddUser></AddUser> }></Route>
        </Switch>
    )
  }
}

export default Main;