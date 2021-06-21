import React from 'react';
import {Provider} from 'react-redux';
import {Root} from './android/app/root';
import store from './android/app/src/store/store';

export default function App() {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    );
}
