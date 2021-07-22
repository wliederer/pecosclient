import React, { Component } from 'react';
import { getCookies, createCookie } from '../utility/Util';
import axios from "axios";
import { ThemeProvider, Button, createUseStyles, Label } from "@playpickup/core";

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

    useStyles = createUseStyles((DefaultTheme) => ({
            root: {
                display: "flex",
                position: "relative",
                padding: DefaultTheme.spacing.base * 2,
                justifyContent: "center"
            }
    }))

    ButtonDiv = ({ children}) => {
        let classes = this.useStyles();
        return <div className={classes.root}>{children}</div>
    }


    render() {
        return (
            <ThemeProvider>
            <div style={{maxWidth:"400px", margin:"auto" }}>
                {this.props.isLoggedIn ? `welcome try clicking search` :
                    <div style={{padding:"20px"}}>
                        <div>
                        {this.state.check ? "sign up" : "sign in"}
                        <br/>
                            <br/>
                            <Label><input type="checkbox" value="check" onChange={this.toggleSign} />toggle between sign in/ sign up </Label>
                            
                            <form onSubmit={this.handleSubmit}>
                                <Label>
                                    username
                                    <input style={{float:"left"}} type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                                </Label>
                                
                                
                                <Label>
                                    password
                                    <input style={{float:"left"}} type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                                </Label>
                                <br/>
                                <div style={{color:"red"}}>
                                {this.state.error}

                                </div>
                                
                        
                                    <this.ButtonDiv>
                                    <Button style={{fontSize:"15px"}} className ="root" type="submit" value="Submit" >Submit</Button>
                                    </this.ButtonDiv>
                            </form>
                        </div>
                    </div>
                }
            </div>
                </ThemeProvider>
        );
    };
}

export default SignIn;
