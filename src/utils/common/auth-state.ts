import _ from 'lodash';
import jwt_decode from 'jwt-decode';
import { IPreviewUser } from '../../apis/definations';

export default class AuthState {

    saveToken(token: string): void {
        this.save('lock', token);
    }
    getToken(): string | null {
        return this.get('lock');
    }

    saveUser(cache: IPreviewUser | null): void {
        this.save('auth_table', JSON.stringify(cache));
    }

    validateUser() {
        let token = this.getToken();
        let user = this.getUser() as IPreviewUser;
        if (user && token) return (jwt_decode(token.toString()) as any)['_id'] === user?._id;
        return false;
    };

    isRootUser() {
        let user = this.getUser() as IPreviewUser;
        if (user) {
            const found = _.indexOf(user.roles, 2, 0);
            if (found !== -1) {
                return true;
            }
        }
        return false;
    };

    getUser() {
        if (this.get('auth_table') == null) return null;
        try {
            return JSON.parse(this.get('auth_table')!.toString());
        } catch (err) {
            return null
        }
    }

    get(key: string): string | null {
        if (localStorage.getItem(key)) return localStorage.getItem(key);
        return null;
    }

    save(key: string, value: any): void {
        if (value == null) return;
        localStorage.setItem(key, value);
    }

    delete = (key: string) => localStorage.removeItem(key);
    clean = () => localStorage.clear();
}