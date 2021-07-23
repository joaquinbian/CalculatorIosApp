import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.lastResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.buttonsContainer}>
        <ButtonCalc text="C" color="#9B9B9B" />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="del" color="#9B9B9B" />
        <ButtonCalc text="/" color="#ff9427" />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="C" color="#2D2D2D" />
        <ButtonCalc text="+/-" color="#2D2D2D" />
        <ButtonCalc text="del" color="#2D2D2D" />
        <ButtonCalc text="/" color="#ff9427" />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="C" color="#2D2D2D" />
        <ButtonCalc text="+/-" color="#2D2D2D" />
        <ButtonCalc text="del" color="#2D2D2D" />
        <ButtonCalc text="/" color="#ff9427" />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="C" color="#2D2D2D" />
        <ButtonCalc text="+/-" color="#2D2D2D" />
        <ButtonCalc text="del" color="#2D2D2D" />
        <ButtonCalc text="/" color="#ff9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

// const styles = StyleSheet.create({});
