import { Preferences } from '@capacitor/preferences';

export const PREFERENCE_KEYS = {
    DARK_MODE: 'darkmode',
};

export async function setPreference(key: string, value: string) {
    await Preferences.set({ key, value });
};

export async function getPreference(key: string) {
    return await Preferences.get({ key });
};

export async function removePreference(key: string) {
    Preferences.remove({ key });
};

export async function clearPreference() {
    await Preferences.clear();
};