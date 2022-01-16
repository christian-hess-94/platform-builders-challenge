import React from 'react';
import {View} from 'react-native';
import {WeatherDataResponse} from '../../utils/gps.interfaces';
import {
  StyledColumn,
  StyledInfoData,
  StyledInfoTitle,
  StyledRow,
} from './styles';

interface InfoDisplayProps {
  weatherData: WeatherDataResponse;
  latitude: number;
  longitude: number;
}

const InfoDisplay: React.FunctionComponent<InfoDisplayProps> = ({
  weatherData: {weather, clouds, coord},
  latitude,
  longitude,
}) => {
  return (
    <View>
      <StyledRow>
        <StyledColumn>
          <StyledInfoTitle>Latitude</StyledInfoTitle>
          <StyledInfoData>{coord.lat || latitude}</StyledInfoData>
        </StyledColumn>
        <StyledColumn>
          <StyledInfoTitle>Longitude</StyledInfoTitle>
          <StyledInfoData>{coord.lon || longitude}</StyledInfoData>
        </StyledColumn>
      </StyledRow>
      <StyledRow>
        <StyledColumn>
          <StyledInfoTitle>Weather</StyledInfoTitle>
          <StyledInfoData>{weather[0].description}</StyledInfoData>
        </StyledColumn>
        <StyledColumn>
          <StyledInfoTitle>Clouds</StyledInfoTitle>
          <StyledInfoData>{clouds.all}</StyledInfoData>
        </StyledColumn>
      </StyledRow>
    </View>
  );
};

export default InfoDisplay;
