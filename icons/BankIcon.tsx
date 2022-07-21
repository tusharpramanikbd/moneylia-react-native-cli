import CustomIconType from '../@types/CustomIconType';
import Svg, {Path} from 'react-native-svg';
import React from 'react';

const BankIcon: React.FC<CustomIconType> = ({color, size}: CustomIconType) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 33 32" fill="none">
      <Path
        d="M28.2501 13.3334C28.4252 13.3334 28.5986 13.299 28.7604 13.232C28.9222 13.165 29.0692 13.0668 29.193 12.9429C29.3168 12.8191 29.415 12.6721 29.482 12.5103C29.549 12.3485 29.5835 12.1751 29.5834 12V8.00004C29.5835 7.72027 29.4955 7.44757 29.3319 7.22063C29.1683 6.99369 28.9374 6.82403 28.672 6.73572L16.672 2.73572C16.3981 2.64457 16.1021 2.64457 15.8282 2.73572L3.8282 6.73572C3.56274 6.82403 3.33183 6.99369 3.16822 7.22063C3.00462 7.44757 2.91663 7.72027 2.91675 8.00004V12C2.9167 12.1751 2.95116 12.3485 3.01815 12.5103C3.08514 12.6721 3.18335 12.8191 3.30717 12.9429C3.43099 13.0668 3.578 13.165 3.73978 13.232C3.90157 13.299 4.07497 13.3334 4.25008 13.3334H5.58341V22.9124C4.80573 23.1863 4.1319 23.6943 3.65444 24.3665C3.17697 25.0387 2.91928 25.8422 2.91675 26.6667V29.3334C2.9167 29.5085 2.95116 29.6819 3.01815 29.8437C3.08514 30.0055 3.18335 30.1525 3.30717 30.2763C3.43099 30.4001 3.578 30.4983 3.73978 30.5653C3.90157 30.6323 4.07497 30.6668 4.25008 30.6667H28.2501C28.4252 30.6668 28.5986 30.6323 28.7604 30.5653C28.9222 30.4983 29.0692 30.4001 29.193 30.2763C29.3168 30.1525 29.415 30.0055 29.482 29.8437C29.549 29.6819 29.5835 29.5085 29.5834 29.3334V26.6667C29.5809 25.8422 29.3232 25.0387 28.8457 24.3665C28.3683 23.6943 27.6944 23.1863 26.9167 22.9124V13.3334H28.2501ZM26.9167 28H5.58341V26.6667C5.58377 26.3132 5.72436 25.9743 5.97433 25.7243C6.2243 25.4743 6.56323 25.3337 6.91675 25.3334H25.5834C25.9369 25.3337 26.2759 25.4743 26.5258 25.7243C26.7758 25.9743 26.9164 26.3132 26.9167 26.6667V28ZM8.25008 22.6667V13.3334H10.9167V22.6667H8.25008ZM13.5834 22.6667V13.3334H18.9167V22.6667H13.5834ZM21.5834 22.6667V13.3334H24.2501V22.6667H21.5834ZM5.58341 10.6667V8.96097L16.2501 5.40497L26.9167 8.96097V10.6667H5.58341Z"
        fill={color || '#7476ED'}
      />
    </Svg>
  );
};

export default BankIcon;
