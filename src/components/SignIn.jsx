import React, { Component } from 'react';
import { getCookies, createCookie } from '../utility/Util';
import axios from "axios";

const initialState = {
    username: "",
    password: "",
    check: false,
    response: {},
    error:""
};

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let cookieJsn = getCookies();
        axios.get('http://localhost:8080/checkAuthentication',{
            headers:{
                'test': cookieJsn.sessionID,
            }
        })
        .then(res =>{
            if(res.data.authenticated === true){
                createCookie("authenticated",true);
            }
        }).catch(err =>{
            console.log(err);
        })
    }

    toggleSign = (e) => {
        this.setState(prevState => ({
            check: !prevState.check
        }))
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    validate = () => {
        let error = "";
        if(this.state.username.length < 3){
            error = "username must be at least 3 characters";
            this.setState({error:error});
            return false;
        }
        if(this.state.password.length < 3){
            error = "password must be at least 3 characters";
            this.setState({error:error});
            return false;
        }
        this.setState({error:""});
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let isValid = this.validate();
        if(isValid){
            let uri = "signup";
            if (!this.state.check) {
                uri = "signin"
            }
            axios.post('http://localhost:8080/' + uri, {
                username: this.state.username,
                password: this.state.password
            })
                .then(res => {
                    if (res.status == 200) {
                        this.setState({response: res.data.user})
                        this.props.login();
                        createCookie("sessionID", res.data.sessionID);
                    }
                }).catch(err => {
                    if(uri=="signin"){
                        this.setState({error:"username or password was wrong try again or signup"})
                    }
                    console.log(err);
                })
            this.setState({ password: "" })
        }
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                {this.props.isLoggedIn ? `welcome try clicking search` :
                    <div>
                        <div>
                            <label><input type="checkbox" value="check" onChange={this.toggleSign} />toggle between {this.state.check ? "sign up" : "sign in"} </label>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    username:
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                                </label>
                                <br/>
                                <label>
                                    password:
                                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                                </label>
                                <br/>
                                <div style={{color:"red"}}>
                                {this.state.error}

                                </div>
                                
                                <br/>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                }
            </div>
        );
    };
}

export default SignIn;
