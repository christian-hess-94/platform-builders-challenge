import {requestMultiple} from 'react-native-permissions';
import {WeatherDataResponse} from './gps.interfaces';

export const OPEN_WEATHER_API_KEY = 'efda86935e310a785d2f0663fa2ec477'; //ideally would be in an .env file

export const requestLocationPermission = async () => {
  const result = await requestMultiple([
    'android.permission.ACCESS_COARSE_LOCATION',
    'android.permission.ACCESS_FINE_LOCATION',
  ]);
  return !!result;
};

export const requestLocalWeatherData = async (
  lat: number,
  lon: number,
): Promise<[WeatherDataResponse | null, unknown]> => {
  try {
    const fullUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;
    const result = await fetch(fullUrl);
    const res: WeatherDataResponse = await result.json();
    return [res, null];
  } catch (error) {
    return [null, error];
  }
};
