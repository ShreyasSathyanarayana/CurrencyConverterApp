import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import React from 'react';

type CusttomBttonProps ={
    buttonName:string;
    onClick:()=>void;
    containerStyle:ViewStyle |undefined;
}

const CustomButton = ({buttonName,onClick,containerStyle}:CusttomBttonProps) => {
  return (
    <TouchableOpacity style={[styles.container,containerStyle]} onPress={onClick}>
        <Text style={{fontSize:20,color:'black'}}>{buttonName}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      elevation:5,
      backgroundColor:'white',
      borderRadius:15
    }
})