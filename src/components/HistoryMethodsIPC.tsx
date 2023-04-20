import { useHistory } from 'react-router';
import { forwardRef, useImperativeHandle } from 'react';

export interface IHistoryMethodsIPC {
    clearAndGoto(path: string): void;
    goto(path: string): void;
    goBack(): void; 
};

const HistoryMethodsIPC = forwardRef<IHistoryMethodsIPC, {
    // pass any prop here...
}>((props, ref) => {
    const history = useHistory();

    useImperativeHandle(ref, () => ({
        clearAndGoto: clearAndGoto,
        goBack: goBack,
        goto: goto,
    }));

    const goBack = () => history.goBack();
    const goto = (path: string) => history.push(path);
    const clearAndGoto = (path: string) => history.replace(path);

    return <></>;
});

export default HistoryMethodsIPC;