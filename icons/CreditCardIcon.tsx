import CustomIconType from '../@types/CustomIconType';
import Svg, {Path} from 'react-native-svg';
import React from 'react';

const CreditCardIcon: React.FC<CustomIconType> = ({
  color,
  size,
}: CustomIconType) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 33 32" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.91675 7.99998C2.91675 6.52722 4.11065 5.33331 5.58341 5.33331H26.9167C28.3895 5.33331 29.5834 6.52722 29.5834 7.99998V24C29.5834 25.4727 28.3895 26.6666 26.9167 26.6666H5.58342C4.11066 26.6666 2.91675 25.4727 2.91675 24V7.99998ZM26.9167 7.99998L5.58341 7.99998V24H26.9167V7.99998Z"
        fill={color || '#7476ED'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.25 20C8.25 19.2636 8.84695 18.6667 9.58333 18.6667H14.9167C15.653 18.6667 16.25 19.2636 16.25 20C16.25 20.7364 15.653 21.3334 14.9167 21.3334H9.58333C8.84695 21.3334 8.25 20.7364 8.25 20Z"
        fill={color || '#7476ED'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.91675 14.6666C2.91675 13.9303 3.5137 13.3333 4.25008 13.3333H28.2501C28.9865 13.3333 29.5834 13.9303 29.5834 14.6666C29.5834 15.403 28.9865 16 28.2501 16H4.25008C3.5137 16 2.91675 15.403 2.91675 14.6666Z"
        fill={color || '#7476ED'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.91675 12C2.91675 11.2636 3.5137 10.6667 4.25008 10.6667H28.2501C28.9865 10.6667 29.5834 11.2636 29.5834 12C29.5834 12.7364 28.9865 13.3334 28.2501 13.3334H4.25008C3.5137 13.3334 2.91675 12.7364 2.91675 12Z"
        fill={color || '#7476ED'}
      />
    </Svg>
  );
};

export default CreditCardIcon;
