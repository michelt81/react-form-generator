import React, { Component } from 'react';
import Nav from './components/Nav';
import Content from './components/Content'
import formData from './data/formulier.json';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav items={formData.list}/>
        <Content items={formData.list}/>
      </div>
    );
  }
}

export default App;
