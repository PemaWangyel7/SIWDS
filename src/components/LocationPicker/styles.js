import { StyleSheet } from 'react-native';
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    width: '75%',

  },
  pickerContainer: {
    marginBottom: 20,
  },
  chevronDown: {
    position: 'absolute',
    right: 10,
    width: 12,
    height: 12,
    borderRightWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: colors.black,
    marginTop: -5,
    transform: [{ rotate: '45deg' }]
  }
});


export const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,  
    borderBottomColor: colors.blue,
    color: colors.black,
    backgroundColor: 'transparent',
  },
  placeholder: {
    color: colors.darkGrey,  
  },
  iconContainer: {
    top: 12,  
    right: 0,
  }
});