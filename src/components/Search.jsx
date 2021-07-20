import React from 'react';
import { useInput } from '../hooks/UseInput';

function Search() {
    const { value:hub, bind: bindHub, reset:resetHub }= useInput("");
    const { value:area, bind: bindArea, reset:resetArea }= useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`submitting Name ${hub} ${area}`);
        resetHub();
        resetArea();
    }

    return(
        <div>
            Search page
            <form onSubmit={handleSubmit}>
                <label>
                    Enter US State:
                    <input type="text" {...bindHub}/>
                </label>
                <label>
                    Enter US City:
                    <input type="text" {...bindArea}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Search;