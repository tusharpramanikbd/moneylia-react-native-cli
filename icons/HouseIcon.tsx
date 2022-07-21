import CustomIconType from '../@types/CustomIconType';
import Svg, {Path} from 'react-native-svg';
import React from 'react';

const HouseIcon: React.FC<CustomIconType> = ({color, size}: CustomIconType) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 28" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.1366 3.29436C15.2569 2.5246 13.9433 2.5246 13.0636 3.29436L4.89692 10.4402C4.39055 10.8833 4.1001 11.5234 4.1001 12.1962V22.1668C4.1001 23.4555 5.14477 24.5001 6.43343 24.5001H11.1001C12.3888 24.5001 13.4334 23.4555 13.4334 22.1668V17.5001H15.7668V22.1668C15.7668 23.4555 16.8114 24.5001 18.1001 24.5001H22.7668C24.0554 24.5001 25.1001 23.4555 25.1001 22.1668V12.1962C25.1001 11.5234 24.8096 10.8833 24.3033 10.4402L16.1366 3.29436ZM14.6001 5.05037L6.43343 12.1962V22.1668H11.1001V17.5001C11.1001 16.2115 12.1448 15.1668 13.4334 15.1668H15.7668C17.0554 15.1668 18.1001 16.2115 18.1001 17.5001V22.1668H22.7668V12.1962L14.6001 5.05037Z"
        fill={color || '#A5A5AA'}
      />
    </Svg>
  );
};

export default HouseIcon;
