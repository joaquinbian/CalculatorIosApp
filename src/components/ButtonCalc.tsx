import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';

interface Props {
  text: string;
  color?: string;
}

const ButtonCalc = ({text, color = '#2D2D2D'}: Props) => {
  return (
    <View style={{backgroundColor: color, ...styles.btnContainer}}>
      <Text
        style={{
          ...styles.btnContent,
          color: color === '#9B9B9B' ? '#000' : '#fff',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default ButtonCalc;
