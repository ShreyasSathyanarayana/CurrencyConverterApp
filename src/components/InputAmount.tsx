import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {width} from '../globals/globalValue';
type InputAmountProps = {
  value: string;
  handleChange: (text: string) => void;
};

const InputAmount = ({value, handleChange}: InputAmountProps) => {
  const onIncrement = () => {
    if (value.length == 0) {
      return handleChange('1');
    }
    const incrementValue = parseInt(value) + 1;
    handleChange(incrementValue.toString());
  };

  const onDecrement = () => {
    if (value !== '0') {
      const decrementValue = parseInt(value) - 1;
      handleChange(decrementValue.toString());
    }
    if (value.length == 0) {
      handleChange('0');
    }
  };

  const handleInputChange = (text:string) => {
    // Remove any non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
    handleChange(numericValue);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleInputChange}
        keyboardType="numeric"
        placeholder="Enter numbers only"
      />
      <TouchableOpacity onPress={onDecrement} style={styles.buttons}>
        <Text style={{fontSize: 28, color: 'black'}}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onIncrement}
        style={[
          styles.buttons,
          {borderTopRightRadius: 25, borderBottomRightRadius: 25},
        ]}>
        <Text style={{fontSize: 25, color: 'black'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputAmount;
const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'rgb(225, 225, 230)',
    paddingHorizontal: 10,
    width: width * 0.63,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    paddingLeft: 15,
  },
  buttons: {
    backgroundColor: 'rgb(225, 225, 230)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
