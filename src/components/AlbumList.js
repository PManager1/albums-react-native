// create a rectangle with text inside it.
import React, { Component } from 'react';
import { Text, View } from 'react-native';


class AlbumList extends Component {

  componentWillMount() {

      console.log( ' compo will mount called - wow ');
    }




  render () {
    return (
      <View>
        <Text> Album List!!!   </Text>
      </View>
    );
  }
};

export default AlbumList;
