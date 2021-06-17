import { resource } from "./resource"
import {GOOGLE_TRANSLATE_URL} from './urls';
import {POST} from './constants';

const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': 'e6c0d73098mshb1647beae9c7949p1b1542jsndd0ffb693bf2',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
}

export const googleTranslateApi = (data: any) => resource({url: GOOGLE_TRANSLATE_URL, method: POST, headers, data});