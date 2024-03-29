const apiKey = '8e0eb81bdbf85108595b99f40bc8df46'
const iconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`
const getFormattedData = async(city,units = "matric") => {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
const data = await fetch(url)
.then((response)=>response.json())
.then((data)=>data)
const {weather,
     main:
     {temp,feels_like,temp_min,temp_max,pressure,humidity},
     wind : {speed},
     sys: {country},
     name
    } = data
const {description, icon} = weather[0];
    return{
description,iconURL : iconUrl(icon),temp,feels_like,temp_min,temp_max,pressure,humidity,speed,country,name
    }
}
export {getFormattedData}