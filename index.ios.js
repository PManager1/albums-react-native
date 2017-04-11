import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a comp
const App = function () {
  return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};
// Render the com
AppRegistry.registerComponent('albums', () => App);

// const App = => (
//   <Text> Some Text </Text>
// );
