import React from 'react';
import MapView, {MapViewProps} from 'react-native-maps';

interface MapProps extends MapViewProps {}

const Map: React.FunctionComponent<MapProps> = props => {
  return <MapView {...props} showsUserLocation />;
};

export default Map;
