import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../@types/RootStackPramList';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

// For Unit Testing
// type LoginScreenProp = {
//   navigation: any;
// };

const LoginScreen = ({navigation}: Props) => {
  const loginOnPressHandler = () => {
    navigation.navigate('BottomTabs');
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/login-image.png')}
        />
        <Text style={styles.titleText}>Save your money</Text>
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in quis
          erat a sit.
        </Text>
        <View style={styles.buttonStyle}>
          <Pressable
            android_ripple={{color: '#dddddd'}}
            onPress={loginOnPressHandler}>
            <Text style={styles.buttonText}>Join for free</Text>
          </Pressable>
        </View>
        <Text style={styles.linkText}>
          Don't have SPID or CIE? Find out more
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  image: {
    width: 335,
    height: 334,
    marginBottom: 24,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3A3B7B',
    marginBottom: 8,
  },
  loremText: {
    textAlign: 'center',
    marginBottom: 60,
    color: '#6F6D7B',
  },
  buttonStyle: {
    marginBottom: 24,
    width: '85%',
    backgroundColor: '#7476ED',
    borderRadius: 4,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },
  linkText: {
    color: '#3A3B7B',
    textDecorationLine: 'underline',
  },
});
