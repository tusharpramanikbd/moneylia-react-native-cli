import CustomIconType from '../@types/CustomIconType';
import Svg, {Path} from 'react-native-svg';
import React from 'react';

const ChartPieIcon: React.FC<CustomIconType> = ({
  color,
  size,
}: CustomIconType) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 33 32" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.7501 5.33335C10.859 5.33335 6.08341 10.109 6.08341 16C6.08341 21.8911 10.859 26.6667 16.7501 26.6667C22.6411 26.6667 27.4167 21.8911 27.4167 16C27.4167 10.109 22.6411 5.33335 16.7501 5.33335ZM3.41675 16C3.41675 8.63622 9.38628 2.66669 16.7501 2.66669C24.1139 2.66669 30.0834 8.63622 30.0834 16C30.0834 23.3638 24.1139 29.3334 16.7501 29.3334C9.38628 29.3334 3.41675 23.3638 3.41675 16Z"
        fill={color || '#7476ED'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.7501 2.66669C17.4865 2.66669 18.0834 3.26364 18.0834 4.00002V15.4787L25.7298 23.7623C26.2293 24.3034 26.1955 25.147 25.6545 25.6464C25.1134 26.1459 24.2698 26.1122 23.7703 25.5711L15.7703 16.9044C15.543 16.6581 15.4167 16.3352 15.4167 16V4.00002C15.4167 3.26364 16.0137 2.66669 16.7501 2.66669Z"
        fill={color || '#7476ED'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.4167 16C15.4167 15.2636 16.0137 14.6667 16.7501 14.6667H28.7501C29.4865 14.6667 30.0834 15.2636 30.0834 16C30.0834 16.7364 29.4865 17.3334 28.7501 17.3334H16.7501C16.0137 17.3334 15.4167 16.7364 15.4167 16Z"
        fill={color || '#7476ED'}
      />
    </Svg>
  );
};

export default ChartPieIcon;
