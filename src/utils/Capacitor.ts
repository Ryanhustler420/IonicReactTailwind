import { Toast } from '@capacitor/toast';
import { Device } from '@capacitor/device';

const Capacitor = {
    deviceInfo: async () => {
        const info = await Device.getInfo();
        return {
            info,
            text: `${info.operatingSystem}-${info.platform}-${info.manufacturer}-${info.model}`,
        };
    },

    toast: async (message: string, duration: 'short' | 'long' = 'long') => {
        await Toast.show({ text: message, duration });
    },
}

export default Capacitor;