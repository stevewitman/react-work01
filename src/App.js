import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {

state = {
  username: 'Stan',
  views: 0
}

incrementViewsHandler = () => {
  let newViews = this.state.views + 1;
  this.setState({views: newViews});
}

changeUsernameHandler = (event) => {
  let newUsername = event.target.value;
  console.log(newUsername)
  this.setState({username: newUsername});
}

  render() {
    return (
      <div className="App">
        {this.state.views} <button onClick={this.incrementViewsHandler}>Click</button>
        <UserInput username={this.state.username} change={this.changeUsernameHandler}/>
        <UserOutput username={this.state.username} />
        <UserOutput username="Megan" />
      </div>
    );
  }
}

export default App;
