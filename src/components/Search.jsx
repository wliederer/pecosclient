import React, { useState } from 'react';
import { useInput } from '../hooks/UseInput';
import { getCookies } from '../utility/Util';
import axios from 'axios';
import styled from 'styled-components';
import { ThemeProvider, Button, createUseStyles, Label } from "@playpickup/core";


function Search(props) {
    const { value: hub, bind: bindHub, reset: resetHub } = useInput("");
    const { value: area, bind: bindArea, reset: resetArea } = useInput("");
    const [signin, setSignin] = useState(false);

    React.useEffect(() => {
        let cookieJsn = getCookies();
        axios.get('http://localhost:8080/search', {
            headers: {
                'test': cookieJsn.sessionID,
            }
        })
            .then(res => {
                setSignin(true);
            }).catch(err => {
                console.log(err);
                setSignin(false);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`this does nothing ${hub} ${area}`);
        resetHub();
        resetArea();
    }

    const useStyles = createUseStyles((DefaultTheme) => ({
        root: {
            display: "flex",
            position: "relative",
            padding: DefaultTheme.spacing.base * 2,
            justifyContent: "center",
            
        }
    }))

    const ButtonDiv = ({ children }) => {
        let classes = useStyles();
        return <div className={classes.root}>{children}</div>
    }



    return (
        <ThemeProvider>
            <div style={{ maxWidth: "400px", margin: "auto" }}>
                <div style={{ padding: "10px" }}>
                    Search page
                </div>
                {!signin ? "sign in to view search" :
                    <div>
                        <form style={{}} onSubmit={handleSubmit}>
                            <Label>
                                Enter US State
                                <input style={{ float: "left" }} type="text" {...bindHub} />
                            </Label>

                            <Label>
                                Enter US City
                                <input style={{ float: "left" }} type="text" {...bindArea} />
                            </Label>

                            <ButtonDiv>
                                <Button style={{fontSize:"15px"}}className="root"type="submit" value="Submit" >Submit</Button>
                            </ButtonDiv>
                        </form>
                    </div>
                }
            </div>
        </ThemeProvider>

    );
}

export default Search;