import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { list, code } from 'ionicons/icons';
import Home from './pages/Home';

import _ from "lodash";
import ApplicationContextProvider from './data/ApplicationContextProvider';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import "./theme/theme.css";

setupIonicReact();

// these methods should go inside a file name.. utilitys.ts
export const currentPath = () => window.location.pathname;
export const components = {
  home: {
    path: "/home",
    Component: Home,
  },
};
const App: React.FC = () => {
  const [visibleMainTabs, setVisibleMainTabs] = useState(false);
  const showTabsHandler = _.debounce(() => setVisibleMainTabs(true), 1);
  const hideTabsHandler = _.debounce(() => setVisibleMainTabs(false), 1);

  const getRoutes = () => {
    return (
      <IonRouterOutlet id="main-drawer">
        <Route path={components.home.path} render={() => (<components.home.Component rendering={components.home.path === currentPath()} onHideTabs={hideTabsHandler} onShowTabs={showTabsHandler} />)} exact />
        <Redirect to={components.home.path} />
      </IonRouterOutlet>
    );
  };

  return (
    <IonApp>
      <ApplicationContextProvider>
        <IonReactRouter>
          {getRoutes()}
          {visibleMainTabs && (
            <IonTabs>
              {getRoutes()}
              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href={components.home.path}>
                  <IonIcon icon={list} />
                  <IonLabel>All Goals</IonLabel>
                </IonTabButton>
                <IonTabButton tab="home2-again" href={components.home.path}>
                  <IonIcon icon={code} />
                  <IonLabel>Courses</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          )}
        </IonReactRouter>
      </ApplicationContextProvider>
    </IonApp>
  )
};

export default App;
