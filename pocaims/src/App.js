import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    axios.get('/api/user')
    .then(res => {
      this.setState({users: res.data});
      console.log(this.state.users);
    })
  }

  render(){
    return(
      <div class="container">
      <div class="panel panel-default">
      <div class="panel-heading">
      <h3 class="panel-title">
        USER LIST
      </h3>
      </div>
      
      <div class="panel-body">
      <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Add User</Link></h4>
      <table class="table table-stripe">
      <thead>
        <tr>
          <th>Role</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>

      <tbody>
        {this.state.users.map(user =>
        <tr>
          <td><Link to={`/show/${user._id}`}>{user.role}</Link></td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
        </tr>
        )}
      </tbody>
      </table>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
