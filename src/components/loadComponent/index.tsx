import React from 'react';
import {ActivityIndicator, Text} from 'react-native';

export enum LOAD_STATE {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

interface LoadComponentProps {
  state: LOAD_STATE;
  loadedComponent: any;
  errorComponent?: any;
}

const LoadComponent: React.FunctionComponent<LoadComponentProps> = ({
  state,
  loadedComponent,
  errorComponent,
}) => {
  if (state === LOAD_STATE.LOADING) {
    return <ActivityIndicator />;
  }
  if (state === LOAD_STATE.ERROR) {
    return errorComponent || <Text>ERROR</Text>;
  }
  if (state === LOAD_STATE.LOADED) {
    return loadedComponent;
  }
  return null;
};

export default LoadComponent;
