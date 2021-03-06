import { StyleSheet } from 'react-native'

const colors = {
  white: 'white',
}

export default StyleSheet.create({
  button: {
    width: 40,
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
  },
  center: {
    flex: 4,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  row: {
    height: 100,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  grid: {
    justifyContent: 'center',
  },
})
