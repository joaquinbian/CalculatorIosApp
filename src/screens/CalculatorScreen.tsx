import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

const CalculatorScreen = () => {
  const [lastNum, setLastNum] = useState('0');
  const [num, setNum] = useState('0');

  const resetCalc = () => {
    setNum('0');
  };
  const setNumber = (numText: string) => {
    // if (num.length === 1 && num === '0' && numText === '0') return;
    // console.log('sigo por aca');
    // if (numText === '.' && num[num.length - 1] === '.') return;
    if (num.startsWith('0') || num.startsWith('-0')) {
      if (num.length === 1 && num === '0' && numText === '0') return;
      else if (numText === '.' && num[num.length - 1] === '.') return;
      else if (num === '0' && numText === '.') {
        setNum(num + numText); //esto es para q me haga el 0.
      } else if (numText !== '0' && !num.includes('.')) {
        setNum(numText);
      } else if (numText === '0' && !num.includes('.')) {
        setNum(numText);
      } else {
        setNum(num + numText);
      } // if(num)
    } else {
      setNum(num + numText);
    }
    console.log(num[num.length - 1]);
  };

  const setPositiveNegative = () => {
    num.includes('-') ? setNum(num.replace('-', '')) : setNum('-' + num);
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.lastResult}>{lastNum}</Text>
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit //lo q hace esa propiedad es ajustar automaticamente el tamaño de la fuente
      >
        {num}
      </Text>

      <View style={styles.buttonsContainer}>
        <ButtonCalc text="C" color="#9B9B9B" action={resetCalc} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={setPositiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={resetCalc} />
        <ButtonCalc text="/" color="#ff9427" action={resetCalc} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="7" action={setNumber} />
        <ButtonCalc text="8" action={setNumber} />
        <ButtonCalc text="9" action={setNumber} />
        <ButtonCalc text="X" color="#ff9427" action={resetCalc} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="4" action={setNumber} />
        <ButtonCalc text="5" action={setNumber} />
        <ButtonCalc text="6" action={setNumber} />
        <ButtonCalc text="+" color="#ff9427" action={resetCalc} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="1" action={setNumber} />
        <ButtonCalc text="2" action={setNumber} />
        <ButtonCalc text="3" action={setNumber} />
        <ButtonCalc text="-" color="#ff9427" action={resetCalc} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="0" action={setNumber} />
        <ButtonCalc text="." action={setNumber} />
        <ButtonCalc text="=" color="#ff9427" action={resetCalc} />
      </View>
    </View>
  );
};

export default CalculatorScreen;

// const styles = StyleSheet.create({});
