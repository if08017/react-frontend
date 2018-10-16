import React, { Component } from 'react';
import Axios from 'axios';
import Login from './components/Login';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      res: '',
      email: ''
    }
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if(user){
      Axios.get(`http://localhost:8000/user/${user}?api_token=4ca96d9818173b1f90c7d84df2c96cbee1f1d34b`)
      .then((res) => {
        const email = res.data.get_user[0].email;
        this.setState({ email });
        console.log(res);
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Login getUser = { this.getUser } />
        { this.state.email ? <p>Email: { this.state.email } </p>: <p>Please enter the corrrect username</p>}
        </header>
      </div>
    );
  }
}

export default App;
