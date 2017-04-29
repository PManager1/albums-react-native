// create a rectangle with text inside it.
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
    </View>    
  );
};
const styles = {
  viewStyle:{
      backgroundColor: '#f5f5ff',
      justifyContent: 'center',
      alignItems: 'center',
      height: 90,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height:2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
  },
  textStyle:{
    fontSize: 20
  }
};


export default Header;
