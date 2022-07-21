import React from 'react';
import CustomIconType from '../@types/CustomIconType';
import Svg, {Path} from 'react-native-svg';

export const ArrowRightIcon: React.FC<
  CustomIconType
> = ({}: CustomIconType) => {
  return (
    <Svg width="9" height="16" viewBox="0 0 9 16" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711L1.70711 15.7071C1.31658 16.0976 0.683417 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
        fill="#9897A1"
      />
    </Svg>
  );
};
