import axios from 'axios'

const API_KEY = 'e91484df8daedd336ac6837f49e1ff21'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const  FEATCH_WEATHER = 'FEATCH_WEATHER'

export const fetchWeather = (city) => {
	const url = `${ROOT_URL}&q=${city},nz`
	const request = axios.get(url)

	console.log('Request', request)
	return {
		type: FEATCH_WEATHER,
		payload: request
	}
}