import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10, //este padding no afecta al eje y
  },
  result: {
    color: '#fff',
    fontSize: 55,
    alignSelf: 'flex-end',
  },
  calculatorContainer: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'flex-end',
  },
  lastResult: {
    color: 'gray',
    alignSelf: 'flex-end',
    fontSize: 25,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    // backgroundColor: 'red',
    // paddingHorizontal: 10,
  },
  btnContainer: {
    // height: 75,
    // width: 75,
    // backgroundColor: 'gray',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
    // marginHorizontal: 5,
  },
  btnContent: {
    color: '#fff',
    textAlign: 'center',
    // paddingHorizontal: 30,
    fontSize: 25,
  },
});
