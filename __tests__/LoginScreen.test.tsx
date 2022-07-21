import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import {fireEvent, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

describe('Login Screen', () => {
  it('should go to dashboard screen on login', () => {
    const navigation = {navigate: () => {}};
    spyOn(navigation, 'navigate');
    const page = render(<LoginScreen navigation={navigation} />);

    const loginButton = page.getByText('Join for free');
    fireEvent.press(loginButton);

    expect(navigation.navigate).toHaveBeenCalledWith('BottomTabs');
  });

  it('renders correctly', () => {
    const navigation = {navigate: () => {}};
    spyOn(navigation, 'navigate');
    const tree = renderer
      .create(<LoginScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
