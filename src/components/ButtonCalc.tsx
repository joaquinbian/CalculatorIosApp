import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  action: (numText: string) => void;
}

const ButtonCalc = ({text, color = '#2D2D2D', action}: Props) => {
  const width = text === '0' ? 160 : 75;
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          backgroundColor: color,
          height: 75,
          width,
          ...styles.btnContainer,
        }}>
        <Text
          style={{
            ...styles.btnContent,
            //   textAlign: text === '0' ? 'auto' : 'center',
            color: color === '#9B9B9B' ? '#000' : '#fff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
