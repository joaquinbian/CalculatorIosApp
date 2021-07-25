import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

enum Operations {
  multiplicar,
  sumar,
  restar,
  dividir,
}

const CalculatorScreen = () => {
  // const [lastNum, setLastNum] = useState('0');
  // const [num, setNum] = useState('0');
  // const operation = useRef<Operations>();

  // const resetCalc = () => {
  //   setNum('0');
  //   setLastNum('0');
  // };

  // const deleteLast = () => {
  //   if (num.length === 1 || (num.length === 2 && num.includes('-'))) {
  //     setNum('0');
  //   } else {
  //     setNum(num.slice(0, -1));
  //   }
  // };

  // const setOperation = () => {
  //   if (num[num.length - 1] === '.') {
  //     setLastNum(num.slice(0, -1));
  //   } else {
  //     setLastNum(num);
  //   }
  //   setNum('0');
  // };
  // const setNumber = (numText: string) => {
  //   if (numText === '.' && num.includes('.')) return;
  //   if (num.startsWith('0') || num.startsWith('-0')) {
  //     if (num.length === 1 && num === '0' && numText === '0') return;
  //     else if (numText === '.' && num[num.length - 1] === '.') return;
  //     else if (num === '0' && numText === '.') {
  //       setNum(num + numText); //esto es para q me haga el 0.
  //     } else if (numText !== '0' && !num.includes('.')) {
  //       setNum(numText);
  //     } else if (numText === '0' && !num.includes('.')) {
  //       setNum(numText);
  //     } else {
  //       setNum(num + numText);
  //     } // if(num)
  //   } else {
  //     setNum(num + numText);
  //   }
  //   // console.log(num[num.length - 1]);
  // };

  // const setPositiveNegative = () => {
  //   num.includes('-') ? setNum(num.replace('-', '')) : setNum('-' + num);
  // };

  // const setDivision = () => {
  //   setOperation();
  //   operation.current = Operations.dividir;
  // };
  // const setMultiplicar = () => {
  //   setOperation();
  //   operation.current = Operations.multiplicar;
  // };
  // const setSumar = () => {
  //   setOperation();
  //   operation.current = Operations.sumar;
  // };
  // const setRestar = () => {
  //   setOperation();
  //   operation.current = Operations.restar;
  // };

  // const calculate = () => {
  //   const num1 = Number(num);

  //   const num2 = Number(lastNum);
  //   console.log(num1 + num2);

  //   switch (operation.current) {
  //     case Operations.sumar:
  //       console.log(`${num1 + num2}, soy la`);
  //       setNum(`${num1 + num2}`);
  //       break;

  //     case Operations.restar:
  //       setNum(`${num2 - num1}`);
  //       break;

  //     case Operations.multiplicar:
  //       setNum(`${num1 * num2}`);
  //       break;

  //     case Operations.dividir:
  //       setNum(`${num2 / num1}`);
  //       break;

  //     default:
  //       setNum('0');
  //       break;
  //   }
  //   //   setOperation();
  //   setLastNum('0');
  // };

  const {
    lastNum,
    num,
    resetCalc,
    setPositiveNegative,
    deleteLast,
    setDivision,
    setMultiplicar,
    setRestar,
    setSumar,
    setNumber,
    calculate,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {lastNum !== '0' && <Text style={styles.lastResult}>{lastNum}</Text>}
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
        <ButtonCalc text="del" color="#9B9B9B" action={deleteLast} />
        <ButtonCalc text="/" color="#ff9427" action={setDivision} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="7" action={() => setNumber} />
        <ButtonCalc text="8" action={setNumber} />
        <ButtonCalc text="9" action={setNumber} />
        <ButtonCalc text="X" color="#ff9427" action={setMultiplicar} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="4" action={setNumber} />
        <ButtonCalc text="5" action={setNumber} />
        <ButtonCalc text="6" action={setNumber} />
        <ButtonCalc text="+" color="#ff9427" action={setSumar} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="1" action={setNumber} />
        <ButtonCalc text="2" action={setNumber} />
        <ButtonCalc text="3" action={setNumber} />
        <ButtonCalc text="-" color="#ff9427" action={setRestar} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCalc text="0" action={setNumber} />
        <ButtonCalc text="." action={setNumber} />
        <ButtonCalc text="=" color="#ff9427" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;

// const styles = StyleSheet.create({});
