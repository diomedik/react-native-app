import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {handleChangeValueToTranslate, saveTransletedValue} from '../../store/reducers';
import {Input} from '../../components/input/input';
import {Store} from '../../types/store';
import {googleTranslateApi} from '../../api/translate';
import {Button} from '../../components/button/button';
import ReactDOM from 'react-dom';

export const CategoryContainer = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const {valueToTranslate, valueTranslated} = useSelector((state: Store) => state.Translater);
    return (
        <View style={styles.container}>
            <div id="categories"></div>
            <Text>Add costs categories</Text>
            <Button title="Create" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
