import React from 'react';

const Weather = (props) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>main</th>
                        <th>description</th>
                        <th>icon</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.weather.map(i => (<tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.main}</td>
                            <td>{i.description}</td>
                            <td>{i.icon}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Weather;