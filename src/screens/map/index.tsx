import React from 'react';
import Map from '../../components/map';

export interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = () => {
  return <Map style={{width: '100%', height: '100%'}} />;
};

export default MapScreen;
