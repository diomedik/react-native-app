import {createSlice} from '@reduxjs/toolkit';
import {Store} from '../types/store';

export const initialState = {
    valueToTranslate: '',
    valueTranslated: ''
};

const translaterSlice = createSlice({
    name: 'Translater',
    initialState,
    reducers: {
        handleChangeValueToTranslate: (state: Store, action: {payload: string}) => {
            return {
                ...state,
                valueToTranslate: action.payload
            };
        },
        saveTransletedValue: (state: Store, action: {payload: string}) => {
            return {
                ...state,
                valueTranslated: action.payload
            };
        }
    }
} as any);

export const {handleChangeValueToTranslate, saveTransletedValue} = translaterSlice.actions;
export default translaterSlice.reducer;
