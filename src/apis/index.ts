import _ from 'lodash';
import { routes } from './routes';
import AuthState from '../utils/common/auth-state';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

const authState = new AuthState();

const handle = (response: HttpResponse, cb: (response: HttpResponse) => void) => {
    switch(response.status) {
        case 401:
            authState.saveUser(null);
            authState.saveToken('');
            cb(response);
            break;
        case 200:
        case 201:
            cb(response);
            break;
        default:
            throw { response };
    }
}

export const getPosts = _.debounce((cb: (response: HttpResponse) => void, err: (e: any) => void) => {
    CapacitorHttp.get({
        url: routes.GET_POSTS,
        headers: commonHeader(),
    }).then(e => handle(e, cb)).catch(err);
});

export const postCreateUser = _.debounce((data: { id: string, uid: string, text: string }, cb: (response: HttpResponse) => void, err: (e: any) => void) => {
    CapacitorHttp.post({
        url: routes.POST_POSTS,
        headers: commonHeader(),
        data: JSON.stringify(data),
    }).then(e => handle(e, cb)).catch(err);
});

const commonHeader = () => {
    return {
        'Content-Type': 'application/json',
        'appname-auth-token': authState.getToken() || '',
    };
}