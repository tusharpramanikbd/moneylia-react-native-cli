import CustomIconType from '../@types/CustomIconType';
import Svg, {Path} from 'react-native-svg';
import React from 'react';

const UserCircleIcon: React.FC<CustomIconType> = ({
  color,
  size,
}: CustomIconType) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7ZM10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11Z"
        fill={color || '#7476ED'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 14.3894 5.04749 16.5341 6.70831 18C8.11787 16.7561 9.97104 16 11.9998 16C14.0287 16 15.882 16.7562 17.2915 18.0001C18.9524 16.5342 20 14.3894 20 12C20 7.58172 16.4183 4 12 4ZM12 20C10.7221 20 9.51418 19.7004 8.44266 19.1675C9.43838 18.4331 10.6682 18 11.9998 18C13.3316 18 14.5614 18.4332 15.5572 19.1676C14.4857 19.7004 13.2778 20 12 20Z"
        fill={color || '#7476ED'}
      />
    </Svg>
  );
};

export default UserCircleIcon;
