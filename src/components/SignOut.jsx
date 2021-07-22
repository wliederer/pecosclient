import React from 'react';
import axios from 'axios';
import { deleteCookie } from '../utility/Util';
import styled from 'styled-components';
import { Button } from "@playpickup/core";


class SignOut extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }

    handleClick = () => {
        let cookie = document.cookie.split('=');
        let cookieJsn = {};
        for(let i=0;i<cookie.length-1;i+=2){
            cookieJsn[cookie[i]] = cookie[i+1];
            
        }
        axios.get('http://localhost:8080/logout',{
            headers:{
                'test': cookieJsn.sessionID,
            }
        })
        .then(res =>{
            deleteCookie("authenticated");
            deleteCookie("sessionID");
            this.props.logout();
        }).catch(err =>{
            console.log(err);
        })
      }

      
      render() {
        //   const Button = styled.button`
        //     border-radius: 4px;
        //     background: #808080;
        //     padding: 10px 22px;
        //     color: white;
        //     outline: none;
        //     border: none;
        //     cursor: pointer;
        //     transition: all 0.2s ease-in-out;
        //     text-decoration: none;
        //     /* Second Nav */
        //     margin-left: 24px;
        //     &:hover {
        //     transition: all 0.2s ease-in-out;
        //     background: #fff;
        //     color: ;
        //     }
        //   `;
          return (
              <Button style={{padding:"10px",margin:"10px",fontSize:"15px" }} onClick={this.handleClick}>
                  Sign Out
              </Button>
          )
      }
}
export default SignOut;