import React from 'react';
import {Input as InputUI, } from 'react-native-elements';
import { InputProps } from '../../types/input';

export const Input = ({placeholder, value, onChangeText}: InputProps) => {
    return (
        <InputUI placeholder={placeholder} value={value} onChangeText={onChangeText}/>
    )
}