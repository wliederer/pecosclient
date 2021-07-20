import React , {useState} from 'react';
import Weather from './Weather';

function Home() {
    const [data, setData] = useState([]);
    let weatherDisplay = null;//make state for
    
    React.useEffect(() => {
        fetch("http://localhost:8080/pingweather")
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        }).catch(function() {
            console.log("error");
        })
    },[]);

        return(
            <div>
                home page Pecos Weather Outlook
                <br/>
                <p>{!data ? "loading..." : data}</p>
            </div>
        );
}


export default Home;