import _ from 'lodash';
import { routes } from './routes';
import AuthState from '../utils/common/auth-state';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

const authState = new AuthState();

export const getPosts = _.debounce((cb: (response: HttpResponse) => void, err: (e: any) => void) => {
    CapacitorHttp.get({
        url: routes.GET_POSTS,
        headers: { 'Content-Type': 'application/json', },
    }).then(cb).catch(err);
});

export const getPostById = _.debounce((id: number, cb: (response: HttpResponse) => void, err: (e: any) => void) => {
    CapacitorHttp.get({
        url: `${routes.GET_POST_BY_ID}/${id}`,
        headers: { 'Content-Type': 'application/json', },
    }).then(cb).catch(err);
});

export const postCreateUser = _.debounce((data: { id: string, uid: string, text: string }, cb: (response: HttpResponse) => void, err: (e: any) => void) => {
    CapacitorHttp.post({
        url: routes.POST_POSTS,
        headers: commonHeader(),
        data: JSON.stringify(data),
    }).then(cb).catch(err);
});

const commonHeader = () => {
    return {
        'Content-Type': 'application/json',
        'appname-auth-token': authState.getToken() || '',
    };
}