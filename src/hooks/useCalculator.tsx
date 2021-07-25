import {useRef, useState} from 'react';

enum Operations {
  multiplicar,
  sumar,
  restar,
  dividir,
}
export const useCalculator = () => {
  const [lastNum, setLastNum] = useState('0');
  const [num, setNum] = useState('0');
  const operation = useRef<Operations>();

  const resetCalc = () => {
    setNum('0');
    setLastNum('0');
  };

  const deleteLast = () => {
    if (num.length === 1 || (num.length === 2 && num.includes('-'))) {
      setNum('0');
    } else {
      setNum(num.slice(0, -1));
    }
  };

  const setOperation = () => {
    if (num[num.length - 1] === '.') {
      setLastNum(num.slice(0, -1));
    } else {
      setLastNum(num);
    }
    setNum('0');
  };
  const setNumber = (numText: string) => {
    if (numText === '.' && num.includes('.')) return;
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
    // console.log(num[num.length - 1]);
  };

  const setPositiveNegative = () => {
    num.includes('-') ? setNum(num.replace('-', '')) : setNum('-' + num);
  };

  const setDivision = () => {
    setOperation();
    operation.current = Operations.dividir;
  };
  const setMultiplicar = () => {
    setOperation();
    operation.current = Operations.multiplicar;
  };
  const setSumar = () => {
    setOperation();
    operation.current = Operations.sumar;
  };
  const setRestar = () => {
    setOperation();
    operation.current = Operations.restar;
  };

  const calculate = () => {
    const num1 = Number(num);

    const num2 = Number(lastNum);
    console.log(num1 + num2);

    switch (operation.current) {
      case Operations.sumar:
        console.log(`${num1 + num2}, soy la`);
        setNum(`${num1 + num2}`);
        break;

      case Operations.restar:
        setNum(`${num2 - num1}`);
        break;

      case Operations.multiplicar:
        setNum(`${num1 * num2}`);
        break;

      case Operations.dividir:
        setNum(`${num2 / num1}`);
        break;

      default:
        setNum('0');
        break;
    }
    //   setOperation();
    setLastNum('0');
  };
  return {
    lastNum,
    num,
    resetCalc,
    calculate,
    setRestar,
    setMultiplicar,
    setSumar,
    setDivision,
    setPositiveNegative,
    setNumber,
    deleteLast,
  };
};
