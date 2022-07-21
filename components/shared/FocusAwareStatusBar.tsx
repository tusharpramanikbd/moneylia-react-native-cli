import * as React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import FocusAwareStatusBarPropsType from '../../@types/FocusAwareStatusBarPropsType';

const FocusAwareStatusBar: React.FC<FocusAwareStatusBarPropsType> = ({
  barStyle,
  backgroundColor,
}: FocusAwareStatusBarPropsType) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
  ) : null;
};

export default FocusAwareStatusBar;
