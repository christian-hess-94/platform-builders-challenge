import React, {useEffect} from 'react';
import {MapViewProps} from 'react-native-maps';
import {requestLocationPermission} from '../../utils/gps.utils';
import {StyledMapView} from './styles';

interface MapProps extends MapViewProps {}

const Map: React.FunctionComponent<MapProps> = props => {
  useEffect(() => {
    requestLocationPermission();
  }, []);
  return <StyledMapView {...props} showsUserLocation showsMyLocationButton />;
};

export default Map;
