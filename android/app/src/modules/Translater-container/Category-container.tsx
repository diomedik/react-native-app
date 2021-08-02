import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Store} from '../../types/store';
import {Button} from '../../components/button/button';
import { ModalContainer } from '../../components/modal/Modal';

export const CategoryContainer = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const {valueToTranslate, valueTranslated} = useSelector((state: Store) => state.Translater);
    return (
        <View style={styles.container}>
            <Text>Add costs categories</Text>
            <Button title="Create" onPress={() => setShow(!show)} />
            <ModalContainer title="Modal" onClose={() => setShow(!show)} visible={show}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
