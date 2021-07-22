import React , {useState} from 'react';
import axios from 'axios';
import { getCookies } from '../utility/Util';
import Weather from './Weather';

function Home() {
    const [data, setData] = useState([]);
    const [weatherDisplay, setWeatherDisplay] = useState([]);
    document.body.style = 'background: #f2f2f2;';


    React.useEffect(() => {
        let cookieJsn = getCookies();
        axios.get('http://localhost:8080/home',{
            headers:{
                'test': cookieJsn.sessionID,
            }
        })
        .then(res =>{
            setData(data);
            setWeatherDisplay(<Weather weather = {res.data}/> )
        }).catch(err =>{
            console.log(err);
        })
    },[]);

    const mystyle = {
    }

        return(
            <div style={{mystyle}}>
                
                home page Pecos Weather Outlook
                <br/>
                <p>{!data ? "loading..." : weatherDisplay}</p>
              
            </div>
        );
}


export default Home;