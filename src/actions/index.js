// API key for openweathermap.org/forecast5.
// Use axios for an ajax call, no need to use jQuery since it is a simple API call.
import axios from 'axios';

const API_KEY = '9a0ee0b948246c71ed9ab0d803f3afc7';
//const ROOT_URL = 'api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
// Same as the above, but using the ES6 syntax, template string to simplify the code. 
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Reducer will refer to this type later
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // city,countryCode, use code us for now.
    const url = `${ROOT_URL}&q=${city},us`;  

    console.log("Fetching weather data...");
    console.log(url);
    const request = axios.get(url);
    
    // Return an action.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}