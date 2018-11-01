import React, { Component } from 'react';
import './App.css';

// store
import store from './state/store/store';
import { Provider } from 'react-redux';

// Router
import { BrowserRouter } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar></Navbar>
            <Main></Main>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
