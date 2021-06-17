import React from 'react';
import {Button as ButtonUI} from 'react-native-elements';
import { ButtonProps } from '../../types/button';



export const Button = ({title, onPress}: ButtonProps) => {
    return (
        <ButtonUI title={title} onPress={onPress}/>
    )
}