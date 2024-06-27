import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import { GetCountryCurrencyCode } from '../utils/CountryCurrencycode';
type CodeCardProps = {
    onClick:(text:string) =>void;
    code:string;
}

const CodeCard = ({onClick,code}:CodeCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>onClick(code)}>
        <Text style={{color:'black',fontSize:20}}>{code}  - {GetCountryCurrencyCode[code]}</Text>
    </TouchableOpacity>
  )
}

export default CodeCard;

const styles = StyleSheet.create({
    card:{
       padding:20,
       alignItems:'center',
       borderBottomWidth:1
    }
})