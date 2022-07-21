import CustomIconType from '../@types/CustomIconType';
import Svg, {Path} from 'react-native-svg';
import React from 'react';

const PagoPAIcon: React.FC<CustomIconType> = ({
  color,
  size,
}: CustomIconType) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 28" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.9518 12.7573L19.9591 10.6372H19.9664V10.5787H21.3107C22.2044 10.5787 22.6477 10.3374 22.6477 9.84031V6.34579C22.6404 5.84866 22.1754 5.6001 21.2598 5.6001H20.1408H19.9664H18.4114V12.7573H19.9518ZM19.9446 6.42621H21.0999V9.74525H19.9446V6.42621ZM3.49338 14.8847L3.50064 12.7646V12.7061H4.62694C5.37538 12.7061 5.74598 12.4649 5.74598 11.9677V8.47322C5.7387 7.97609 5.35358 7.72753 4.58334 7.72753H3.64597H3.50064H2.19995V14.8847H3.49338ZM3.49338 8.56095H4.45981V11.88H3.49338V8.56095ZM9.72812 12.7061H7.27206C6.55268 12.7061 6.18934 12.4576 6.18934 11.9604L6.19662 10.5056C6.19662 10.0158 6.5672 9.76721 7.31564 9.75989H8.44194V8.56095H7.47552L7.46824 9.2189H6.2039V8.47322C6.2039 7.9834 6.58176 7.74215 7.33744 7.74215L8.60182 7.72753C9.35026 7.72753 9.72812 7.97609 9.72812 8.46591V12.7061ZM7.48276 11.8727H8.4565L8.44922 10.5933H7.48276V11.8727ZM11.4209 12.7061H12.5545L12.5617 12.7646V14.0659H11.5953V13.4079H10.3092V14.1463C10.3092 14.6434 10.687 14.892 11.4355 14.892H12.7216C13.47 14.892 13.8479 14.6434 13.8479 14.1463V7.72753H12.5617H12.4019H11.4645C10.6943 7.72753 10.3092 7.97609 10.3019 8.47322V11.9677C10.3019 12.4576 10.6725 12.7061 11.4209 12.7061ZM12.5545 11.8727H11.588V8.56095H12.5545V11.8727ZM17.8298 11.9604C17.8226 12.4576 17.4375 12.6988 16.6672 12.6988H15.4174C14.6617 12.6988 14.2838 12.4502 14.2838 11.9604V8.46591C14.2838 7.96878 14.6617 7.72753 15.4174 7.72753H16.7035C17.452 7.72753 17.8226 7.97609 17.8226 8.46591V11.9604H17.8298ZM16.5509 8.56095H15.5772V11.88H16.5437L16.5509 8.56095ZM26.0554 5.64385C26.9492 5.64385 27.3924 5.8851 27.3924 6.38223L27.3997 12.3989C27.3997 17.9185 22.9526 22.4 17.4592 22.4C14.2765 22.4 11.4354 20.894 9.61871 18.5545L8.63048 19.3441L8.49241 14.9211L11.5879 17.0193L10.8177 17.6115C12.3582 19.5927 14.7634 20.8721 17.4592 20.8721C22.1097 20.8721 25.8665 17.0924 25.8665 12.4136V10.5859H24.7039V12.7718H23.1634V6.38223C23.1634 5.89241 23.6139 5.64385 24.5149 5.64385H26.0554ZM24.6966 9.75245H25.8592V6.46265H24.6966V9.75245Z"
        fill={color || '#A5A5AA'}
      />
    </Svg>
  );
};

export default PagoPAIcon;
