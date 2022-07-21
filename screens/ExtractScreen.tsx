import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FocusAwareStatusBar from '../components/shared/FocusAwareStatusBar';

const ExtractScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#7476ED" />
      <View>
        <Text>ExtractScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExtractScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
