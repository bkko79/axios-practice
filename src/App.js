import React, { Component } from 'react';
import { Header } from './Components';
import { PostContainer } from './Containers';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostContainer/>
      </div>
    );
  }
}

export default App;