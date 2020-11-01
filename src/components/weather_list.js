import React from "react";
import data from '../data.json'

const WeatherList = () => {
    const parseData = () => {
        const res=[]
        for (const [key, value] of Object.entries(data)) {
            res.push( <tr key={key}>
                <td>{value.name}</td>
                <td>{value.description}</td>
                <td>{value.temprature}</td>
                <td>{value.humidity}</td>
                <td>{value.wind}</td>
                <td><img src={value.icon} alt={`${value.description} icon`}/></td>
            </tr>)
        }
        return res;
    }
    return (
        <table>
            <thead>
            <tr>
                <th>City</th>
                <th>Description</th>
                <th>Temperature(°C)</th>
                <th>Humidity(%)</th>
                <th>Wind</th>
                <th>Icon</th>
            </tr>
            </thead>
            <tbody>
            {parseData()}
            </tbody>
        </table>
    )
}

export default WeatherList;