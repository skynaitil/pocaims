import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Create extends Component{

    constructor(){
        super();
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            role: '',
            telNumber: '',
            validUser: 'true',
            admin:'true'
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {id, firstName, lastName, password,email, role,telNumber,validUser,admin} = this.state;
        
        axios.post('/api/user', {id, firstName, lastName, password, email, role,telNumber,validUser,admin})
        .then((result) => {
            this.props.history.push("/")
        });
    }

    render(){
        const {id, firstName, lastName, password,email, role, telNumber} = this.state;

        return (
            <div class="container">
            <div class="panel panel-default">
            
            <div class="panel-heading">
            <h3 class="panel-title"> ADD USER</h3>    
            </div>

            <div class="panel-body">
            <h4><Link to="/"><span class="fa fa-user" aria-hidden="true"></span>User List</Link></h4>
            
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="id">ID:</label>
                <input type="text" class="form-control" name="id" value={id} onChange={this.onChange} placeholder="ID" />
              </div>
              <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" class="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="First Name" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" class="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="text" class="form-control" name="password" value={password} onChange={this.onChange} placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>
               <div class="form-group">
                <label for="role">Email:</label>
                <input type="text" class="form-control" name="role" value={role} onChange={this.onChange} placeholder="Role" />
              </div>
              <div class="form-group">
                <label for="telNumber">Tel Number:</label>
                <input type="text" class="form-control" name="telNumber" value={telNumber} onChange={this.onChange} placeholder="Telephone Number" />
              </div>    

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;