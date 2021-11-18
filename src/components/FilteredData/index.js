import {useEffect,useState} from 'react'
import { useCoords } from '../../contexts/CoordsDataContext'
import './styles.css'

function FilteredData() {
    const {setCoords} = useCoords();
    const [userLoc,setUserLoc] = useState(false)
    const [userCoords,setUserCoords] = useState({})
    const [value, setValue] = useState(userLoc && "user")

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position){
            if(position.coords.latitude){
                setCoords({lat:position.coords.latitude, lon:position.coords.longitude})
                setUserCoords({lat:position.coords.latitude, lon:position.coords.longitude})
                setUserLoc(true)
            }
        })
},[])


    const onChange = (e) => {
        
        switch (e.target.value){
            case "Istanbul":
                setCoords({lat:"41.015", lon:"28.98"})
                setValue("Istanbul")
                break;
            case "London":
                setCoords({lat:"51.51", lon:"-0.118"})
                setValue("London")
                break;
            case "NewYork":
                setCoords({lat:"40.73", lon:"-73.94"})
                setValue("NewYork")
                break;
            case "Dubai":
                setCoords({lat:"37.15", lon:"46.496"})
                setValue("Dubai")
                break;
            case "user":
                setCoords(userCoords)
                setValue("user  ")
            default:
                break;
        }
    }

    return (
        <div className="container">
            <select className="dropdown" onChange={onChange} value={value}>
                {userLoc && <option value="user">Your Location</option>}
                <option value="Istanbul">İstanbul</option>
                <option value="London">Londra</option>
                <option value="NewYork">New York</option>
                <option value="Dubai">Dubai</option>
            </select>
        </div>
    )
}

export default FilteredData