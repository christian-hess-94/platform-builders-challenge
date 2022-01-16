import {requestMultiple} from 'react-native-permissions';

export const requestLocationPermission = async () => {
  const result = await requestMultiple([
    'android.permission.ACCESS_COARSE_LOCATION',
    'android.permission.ACCESS_FINE_LOCATION',
  ]);
  return !!result;
};
