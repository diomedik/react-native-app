import {configureStore} from '@reduxjs/toolkit';
import translateSlice from './reducers';

export default configureStore({
    reducer: {
        Translater: translateSlice
    },
    devTools: true
});
