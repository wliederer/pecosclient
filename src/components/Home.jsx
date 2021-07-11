import React, {Component} from 'react';
import Weather from './Weather';


function Home() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:8080/weather")
            .then((res) => res.json())
            .then((data) => {
                setData(data.name)
            })
            
    }, []);
  
        return(
            <div>
                home page
                <p>{!data ? "loading..." : data}</p>
            </div>
        );
}


export default Home;