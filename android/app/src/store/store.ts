import {observable, action, computed, makeAutoObservable, makeObservable} from 'mobx';
import {googleTranslateApi} from '../api/translate';

export class TranslateStore {
    valueToTranslate = '';
    translatedValue = '';
    source = 'ru';
    target = 'en';
    constructor() {
        makeAutoObservable(this);
        this.handleValue = this.handleValue.bind(this);
    }
    @computed handleValue(value: string) {    
        this.valueToTranslate = value;
    }
    @computed translateValue() {
        const data = {
            q: this.translateValue,
            source: this.source,
            target: this.target
        };
        googleTranslateApi(data);
    }
}
