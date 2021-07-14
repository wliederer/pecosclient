import React , {useState} from 'react';
import Weather from './Weather';


function Home() {
    const [data, setData] = useState([]);
    let weatherDisplay = <Weather weather = {data}/>;

    React.useEffect(() => {
        fetch("http://localhost:8080/weather")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
            
    }, []);
  
        return(
            <div>
                home page Pecos Weather Outlook
                <br/>
                <p>{!data ? "loading..." : weatherDisplay}</p>
            </div>
        );
}


export default Home;