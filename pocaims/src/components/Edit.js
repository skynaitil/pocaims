import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Edit extends Component{
    constructor(props){
        super(props);
        this.state={
            user: {}
        };
    }

    componentDidMount(){
        axios.get('/api/user'+this.props.match.params.id)
        .then(res=>{
            this.setState({user: res.data});
            console.log(this.state.user);
        });
    }

    onChange = (e) => {
        const state = this.state.user
        state[e.target.name] = e.target.value;
        this.setState({user:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {id, firstName, lastName, password,email, role,telNumber,validUser,admin} = this.state.user;

        axios.put('/api/user'+this.props.match.params.id, {id, firstName, lastName, password,email, role,telNumber,validUser,admin})
        .then((result) => {
            this.props.history.push("/show/"+this.props.match.params.id)
        });
    }

    render(){
        return(
            <div class="container">
            <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">EDIT USER</h3>          
            </div>

            <div class="panel-body">
            <h4><Link to={`/show/${this.state.user._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>User List</Link></h4>

            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="id">ID: </label>
                <input type="text" class="form-control" name="id" value={this.state.user.id} onChange={this.onChange} placeholder="ID"/>                
            </div>
            
            <button type="submit" class="btn btn-default">Submit</button>
            </form>
            </div>          
            </div>
            </div>
        );
    }
}

export default Edit;