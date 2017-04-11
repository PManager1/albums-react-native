// create a rectangle with text inside it.
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
        <Text style={textStyle}>  Header Albums! </Text>
    </View>
  );
};
const styles = {
  viewStyle:{
      backgroundColor: '#f5f5ff',
      justifyContent: 'center',
      alignItems: 'center',
      height: 90,
      paddingTop: 15
  },
  textStyle:{
    fontSize: 20
  }
};


export default Header;
