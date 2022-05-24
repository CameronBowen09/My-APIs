import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    alert('Hello!');
  }
  
  return (
    <button onClick={this.sayHello}>
      Click me!
    </button>
  );
}

export default App;