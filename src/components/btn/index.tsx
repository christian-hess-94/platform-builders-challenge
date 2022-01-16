import React from 'react';
import {ButtonProps} from 'react-native';
import {StyledBtn} from './styles';

interface BtnProps extends ButtonProps {}

const Btn: React.FunctionComponent<BtnProps> = props => {
  return <StyledBtn {...props} />;
};

export default Btn;
