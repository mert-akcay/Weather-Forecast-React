import {useState,createContext,useContext} from 'react'

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [weatherData,setWeatherData] = useState({})

    const values = {
        weatherData,
        setWeatherData,
    };



    return (
        <DataContext.Provider value={values}>{ children }</DataContext.Provider>
    )
};


export const useData = () => useContext(DataContext);
