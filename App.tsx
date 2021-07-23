import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import {styles} from './theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="#000" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
