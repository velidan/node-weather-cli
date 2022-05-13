import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const getWeather = async city => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error('Token does not exist. Set it by using command -t [API_KEY]');
  };

  const { data  } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appId: token,
      lang: 'en',
      units: 'metric'
    }
  });

  return data;
}

export {
  getWeather
}
