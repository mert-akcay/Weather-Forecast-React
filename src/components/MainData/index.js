import {useEffect, React} from 'react'
import axios from 'axios'
import {useData} from '../../contexts/DataContext'
import {useCoords} from '../../contexts/CoordsDataContext'
import './styles.css'

/* https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,minutely&appid=cd9627f52cd66d3c8523176411238956 */
/* https://jsonplaceholder.typicode.com/comments  */

function MainData() {
    const {weatherData, setWeatherData} = useData();
    const {coords} = useCoords(); 
    let day = new Date();


    const getDays = (x) =>{
        switch(day.getDay()+x>= 6 ? day.getDay()+x-6 : day.getDay()+x){
        case 1:
            return "MON"
        case 2:
            return "TUE"
        case 3:
            return "WED"
        case 4:
            return "THU"
        case 5: 
            return "FRI"
        case 6:
            return "SAT"
        case 0:
            return "SUN"
        default:
            return

    }}
    
   
    useEffect(async () => {
        await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,minutely&appid=cd9627f52cd66d3c8523176411238956&units=metric`).then(res => setWeatherData(res.data))
    }, [coords] )


    

    return (
        <div className="forecastContainer">
            <ul className="list-container">
                <li className="list-item">
                    <div className="forecast forecast-today">
                        <div className="day">{getDays(0)}</div>
                        {weatherData.daily && <img src={`http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`} alt="" />}
                        <div className="temp">{weatherData.daily && (weatherData.daily[0].temp.min)}°C || {weatherData.daily && (weatherData.daily[0].temp.max)}°C</div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="forecast">
                        <div className="day">{getDays(1)}</div>
                        {weatherData.daily && <img src={`http://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@2x.png`} alt=""/>}
                        <div className="temp">{weatherData.daily && (weatherData.daily[1].temp.min)}°C || {weatherData.daily && (weatherData.daily[1].temp.max)}°C</div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="forecast">
                        <div className="day">{getDays(2)}</div>
                        {weatherData.daily && <img src={`http://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}@2x.png`} alt=""/>}
                        <div className="temp">{weatherData.daily && (weatherData.daily[2].temp.min)}°C || {weatherData.daily && (weatherData.daily[2].temp.max)}°C</div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="forecast">
                        <div className="day">{getDays(3)}</div>
                        {weatherData.daily && <img src={`http://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}@2x.png`} alt=""/>}
                        <div className="temp">{weatherData.daily && (weatherData.daily[3].temp.min)}°C || {weatherData.daily && (weatherData.daily[3].temp.max)}°C</div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="forecast">
                        <div className="day">{getDays(4)}</div>
                        {weatherData.daily && <img src={`http://openweathermap.org/img/wn/${weatherData.daily[4].weather[0].icon}@2x.png`} alt=""/>}
                        <div className="temp">{weatherData.daily && (weatherData.daily[4].temp.min)}°C || {weatherData.daily && (weatherData.daily[4].temp.max)}°C</div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="forecast">
                        <div className="day">{getDays(5)}</div>
                        {weatherData.daily && <img src={`http://openweathermap.org/img/wn/${weatherData.daily[5].weather[0].icon}@2x.png`} alt=""/>}
                        <div className="temp">{weatherData.daily && (weatherData.daily[5].temp.min)}°C || {weatherData.daily && (weatherData.daily[5].temp.max)}°C</div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="forecast">
                        <div className="day">{getDays(6)}</div>
                        {weatherData.daily && <img src={`http://openweathermap.org/img/wn/${weatherData.daily[6].weather[0].icon}@2x.png`} alt=""/>}
                        <div className="temp">{weatherData.daily && (weatherData.daily[6].temp.min)}°C || {weatherData.daily && (weatherData.daily[6].temp.max)}°C</div>
                    </div>
                </li>
                
            </ul>
       
        </div>
    )
}

export default MainData
