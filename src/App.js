import React, { Component } from 'react';
import TodosContainer from './containers/TodosContainer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>this is my react</h1>
        <TodosContainer />
        </div>
    );
  }
}

export default App;
