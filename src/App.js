import React, { Component } from 'react';
import './App.css';

import { RootProvider } from "./RootContext";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <RootProvider>
        <div className="App">
          <h1>Todo:</h1>
          <Header />
          <List />
          <Form />
        </div>
      </RootProvider>
    );
  }
}

export default App;
