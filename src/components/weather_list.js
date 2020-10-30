import React from "react";
import data from '../data.json'

const WeatherList =()=> {

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
            <tr key={data.name}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.temprature}</td>
                <td>{data.humidity}</td>
                <td>{data.wind}</td>
                <td><img src={data.icon} alt=""/></td>
            </tr>
            </tbody>
        </table>
    )
}

export default WeatherList;

