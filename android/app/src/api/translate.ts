import {resource} from './resource';
import {YANDEX_TRANSLATE_URL} from './urls';
import {GET} from './constants';

const headers = {
    'x-rapidapi-key': 'e6c0d73098mshb1647beae9c7949p1b1542jsndd0ffb693bf2',
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com'
};

export const googleTranslateApi = (data: any) =>
    resource({
        url: YANDEX_TRANSLATE_URL,
        method: GET,
        headers,
        data  
    });
