import {useState,createContext,useContext} from 'react'

const CoordsDataContext = createContext();

export const CoordsDataProvider = ({ children }) => {
    const [coords,setCoords] = useState({lat:"41.015", lon:"28.98"})

    const values = {
        coords,
        setCoords,
    };

    return (
        <CoordsDataContext.Provider value={values}>{ children }</CoordsDataContext.Provider>
    )
};


export const useCoords = () => useContext(CoordsDataContext);
