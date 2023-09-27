import React, { useState } from 'react'
import  { createContext, setcreateContext } from 'react'

const weatherContext=createContext(Null)
const PropDrilling = () => {
    const[weather, setWeather] = useState(":)")
  
    return <Europe weather={weather}/>
    //<div>PropDrilling</div>
  
}


const Europe = () => {
    

    return <Estonia weather={weather}/>
}
const Estonia = () => {
    return <Tallinn weather={weather}/>
}
}
const Tallinn = () => {
    return<div>PropDrilling</div>
}


export default PropDrilling