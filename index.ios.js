import React from 'react';
// import ReactNative from 'react-native';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header'
// Create a comp
const App = function () {
  return (
        <Header />
    );
};
// Render the com
AppRegistry.registerComponent('albums', () => App);

// const App = => (
//   <Text> Some Text </Text>
// );
