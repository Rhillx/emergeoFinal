// #5d6d7e grey blue
// #34495e dark blue
// #d0ece7 aqua
// #abebc6 lime
// #82e0aa darker lime
// #186a3b evergreen





import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './src/components/StartScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StartScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
