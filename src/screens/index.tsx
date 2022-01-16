import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MapScreen, {MapScreenProps} from './map';

export type ScreensProps = {
  MapScreen: MapScreenProps;
};

const Screens: React.FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator<ScreensProps>();

  return (
    <Navigator initialRouteName="MapScreen">
      <Screen component={MapScreen} name="MapScreen" />
    </Navigator>
  );
};

export default Screens;
