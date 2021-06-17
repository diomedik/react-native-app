import React from 'react';
import {Root} from './android/app/root';
import {TranslateStore} from './android/app/src/store/store';

const store = new TranslateStore();

export default function App() {
    return <Root store={store} />;
}
