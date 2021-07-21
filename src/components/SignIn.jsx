import React, { Component } from 'react';
import axios from "axios";

const initialState = {
    username:"",
    password:""
};

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleClear = (e) => {
        console.log("clearing state")
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/signin',{
            username:this.state.username,
            password:this.state.password
        })
        .then(res =>{
            document.cookie = "test" + " = " + "test";

            console.log(res);
        }).catch(err =>{
            console.log(err);
        })
        this.setState({password:""})
    }

    render() {
        return (
            <div>
                SIGN IN PAGE
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                        password:
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    };
}

export default SignIn;
