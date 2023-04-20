import _ from "lodash";
import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { Resizer } from "../components/Resizer";

import './Settings.css';

const screen = { width: 0, name: 'sm' };
const Settings: React.FC<{
    onShowTabs: () => void;
    onHideTabs: () => void;
    rendering: boolean;
}> = props => {
    useEffect(() => { if (props.rendering) { props.onShowTabs(); } });

    const breakPointTrigger = (width: number | undefined, name: string | undefined) => {
        screen.width = width as number;
        screen.name = name as string;
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Resizer onChange={breakPointTrigger} />
            <IonContent fullscreen>
                <strong>Settings Page</strong>
            </IonContent>
        </IonPage>
    );
};

export default Settings;
