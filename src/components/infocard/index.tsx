import React from 'react';
import {View} from 'react-native';
import {StyledInfoCard} from './styles';

interface InfoCardProps {
  visible?: boolean;
}

const InfoCard: React.FunctionComponent<InfoCardProps> = ({
  visible = false,
}) => {
  if (!visible) {
    return null;
  }
  return <StyledInfoCard />;
};

export default InfoCard;
