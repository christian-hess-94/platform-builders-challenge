import React, {useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import Btn from '../../components/btn';
import InfoCard from '../../components/infocard';
import Map from '../../components/map';

export interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Btn onPress={() => setVisible(true)} title="Check Weather Info" />
      <Map showsUserLocation />
      <InfoCard visible={visible} />
    </View>
  );
};

export default MapScreen;
