export enum EROLES { '_0' = 0, '_1' = 1, '_2' = 2 };
export enum ECURRENCY { 'inr' = 'inr', 'usd' = 'usd' };

export type TROLES = 0 | 1 | 2;
export type TCURRENCY = 'inr' | 'usd';

export interface IPreviewUser {
    [key: string]: any;
};