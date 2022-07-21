import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FocusAwareStatusBar from '../components/shared/FocusAwareStatusBar';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#7476ED" />
      <View style={styles.container}>
        <Text style={styles.textStyle}>Content Coming Soon...</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  textStyle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
