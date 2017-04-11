// create a rectangle with text inside it.
import React from 'react';
import { Text } from 'react-native';

const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}> Header Albums! </Text>
};

const styles = {
  textStyle:{
    fontSize: 40

  }
};


export default Header;
