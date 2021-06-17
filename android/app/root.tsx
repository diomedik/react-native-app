import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from './src/components/input/input';
import {TranslateStore} from './src/store/store';

type Props = {
    store: any;
};

export class Root extends React.Component<Props> {
    render() {
        const {translatedValue, valueToTranslate, handleValue} = this.props.store;
        return (
            <View style={styles.container}>
                <Text>Simple translator</Text>
                <Input
                    placeholder="Введите..."
                    onChangeText={(value: string) => handleValue(value)}
                />
                <Input placeholder="Result" value={valueToTranslate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
