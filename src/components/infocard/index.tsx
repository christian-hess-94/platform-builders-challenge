import Geolocation from '@react-native-community/geolocation';
import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {WeatherDataResponse} from '../../utils/gps.interfaces';
import {GPS_MOCK} from '../../utils/gps.mock';
import {requestLocalWeatherData} from '../../utils/gps.utils';
import Btn from '../btn';
import InfoDisplay from '../infoDisplay';
import LoadComponent, {LOAD_STATE} from '../loadComponent';
import {StyledInfoCard} from './styles';

interface InfoCardProps {
  visible?: boolean;
}

const InfoCard: React.FunctionComponent<InfoCardProps> = ({
  visible = false,
}) => {
  const [loadState, setLoadState] = useState<LOAD_STATE>(LOAD_STATE.IDLE);
  const [weatherData, setWeatherData] = useState<WeatherDataResponse>(GPS_MOCK);
  const [latLon, setLatLon] = useState({lat: 0, lon: 0});
  const handleRequestData = async () => {
    setLoadState(LOAD_STATE.LOADING);
    let lat = 0;
    let lon = 0;
    Geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      lat = latitude;
      lon = longitude;
      setLatLon({lat, lon});
    });
    const [result, error] = await requestLocalWeatherData(lat, lon);
    if (error || !result) {
      setLoadState(LOAD_STATE.ERROR);
      return;
    }
    if (result) {
      setWeatherData(result);
      setLoadState(LOAD_STATE.LOADED);
    }
  };
  if (!visible) {
    return null;
  }
  return (
    <StyledInfoCard>
      <Btn title="Get Weather Data" onPress={handleRequestData} />
      <LoadComponent
        state={loadState}
        loadedComponent={
          <ScrollView>
            <InfoDisplay
              latitude={latLon.lat}
              longitude={latLon.lon}
              weatherData={weatherData}
            />
          </ScrollView>
        }
        errorComponent={<Text>ERROR</Text>}
      />
    </StyledInfoCard>
  );
};

export default InfoCard;
