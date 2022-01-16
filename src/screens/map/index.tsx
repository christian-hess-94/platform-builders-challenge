import React, {useState} from 'react';
import {View} from 'react-native';
import Btn from '../../components/btn';
import InfoCard from '../../components/infocard';
import Map from '../../components/map';

export interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = () => {
  const [visible, setVisible] = useState(false);

  const handleGetWeatherData = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <Btn onPress={handleGetWeatherData} title="Toggle Weather Info" />
      <Map showsUserLocation />
      <InfoCard visible={visible} />
    </View>
  );
};

export default MapScreen;
