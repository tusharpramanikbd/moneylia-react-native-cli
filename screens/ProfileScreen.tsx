import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FocusAwareStatusBar from '../components/shared/FocusAwareStatusBar';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#7476ED" />
      <View>
        <Text>ProfileScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
