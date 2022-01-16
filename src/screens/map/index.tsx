import React from 'react';
import Map from '../../components/map';

export interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = () => {
  return <Map showsUserLocation />;
};

export default MapScreen;
