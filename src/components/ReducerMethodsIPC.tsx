// NOTE: this component is responsible for calling the redux methods,
// We have created this because we can't use react hooks in class components,
// hence, we'll use this component to pass the reference to parent component,

import _ from 'lodash';
import { useDispatch } from "react-redux";
import { forwardRef, useImperativeHandle } from 'react';

import { setUser } from '../redux/reducers/userState';

export interface IReducerMethodsIPC {
    setFetchedUser(user: any): void;
};

export const ReducerMethodsIPC = forwardRef<IReducerMethodsIPC, {
    // pass any prop here...
}>((props, ref) => {
    const dispatch = useDispatch();

    useImperativeHandle(ref, () => ({
        setFetchedUser: setFetchedUser,
    }));

    const setFetchedUser = (user: any) => {
        if (!user) user = {};
        dispatch(setUser({ user }));
    };

    return <></>;
});