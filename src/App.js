import React, { Component } from 'react';
import './App.css';

// Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

// store
import store from './state/store/store';
import { Provider } from 'react-redux';


// Components
import Usuarios from './components/Usuarios/Usuarios';
import Dependientes from './components/Dependientes/Dependientes';

class App extends Component {
  render() {
    return (

      <Provider store={store}>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=> <Usuarios></Usuarios> }></Route>
            <Route exact path="/dependiente" render={()=> <Dependientes></Dependientes> }></Route>
          </Switch>
        </BrowserRouter>

      </Provider>

    );
  }
}

export default App;
