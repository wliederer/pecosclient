import React , {useState} from 'react';
import axios from 'axios';
import Weather from './Weather';

function Home() {
    const [data, setData] = useState([]);
    let weatherDisplay = null;//make state for
    
    React.useEffect(() => {
        axios.get('http://localhost:8080/search')
        .then(res =>{
            console.log(res);
        }).catch(err =>{
            console.log(err);
        })
    },[]);

        return(
            <div>
                home page Pecos Weather Outlook
                <br/>
                <p>{!data ? "loading..." : data.message}</p>
            </div>
        );
}


export default Home;