import React, { useState } from 'react';
import { useInput } from '../hooks/UseInput';
import { getCookies } from '../utility/Util';
import axios from 'axios';

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

    return (
        <div style={{textAlign:"center"}}>
            <div>
                Search page
            </div>
        {!signin ? "sign in to view search" :
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter US State:
                        <input type="text" {...bindHub} />
                    </label>
                    <br/>
                    <label>
                        Enter US City:
                        <input type="text" {...bindArea} />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
                }
        </div>

    );
}

export default Search;