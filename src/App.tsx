import _ from "lodash";
import AuthState from "./utils/common/auth-state";
import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import HistoryMethodsIPC, { IHistoryMethodsIPC } from "./components/HistoryMethodsIPC";

import { homeOutline, settingsOutline } from 'ionicons/icons';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonSpinner, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';

import Home from './pages/Home';
import Settings from "./pages/Settings";

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
    path: "/",
    Component: Home,
  },
  settings: {
    path: "/settings",
    Component: Settings,
  },
};
const App: React.FC = () => {
  const authState = new AuthState();
  const historyMethodsIPCRef = React.createRef<IHistoryMethodsIPC>();

  const [visibleMainTabs, setVisibleMainTabs] = useState(false);
  const showTabsHandler = _.debounce(() => setVisibleMainTabs(true), 1);
  const hideTabsHandler = _.debounce(() => setVisibleMainTabs(false), 1);

  const getRoutes = () => {
    return (
      <IonRouterOutlet id="main-drawer">
        <Route path={components.home.path} render={() => (<components.home.Component rendering={components.home.path === currentPath()} onHideTabs={hideTabsHandler} onShowTabs={showTabsHandler} />)} exact />
        <Route path={components.settings.path} render={() => (<components.settings.Component rendering={components.settings.path === currentPath()} onHideTabs={hideTabsHandler} onShowTabs={showTabsHandler} />)} exact />
        {/* <Route path={components.login.path} render={() => (<components.login.Component rendering={components.login.path === currentPath()} onHideTabs={hideTabsHandler} onShowTabs={showTabsHandler} />)} exact />
        <Route path={components.events.path} render={() => (<components.events.Component rendering={components.events.path === currentPath()} onHideTabs={hideTabsHandler} onShowTabs={showTabsHandler} />)} exact />
        <Route path={components.register.path} render={() => (<components.register.Component rendering={components.register.path === currentPath()} onHideTabs={hideTabsHandler} onShowTabs={showTabsHandler} />)} exact /> */}
        <Redirect to={components.home.path} />
      </IonRouterOutlet>
    );
  };

  useEffect(() => {
    // let isAuthenticated = authState.validateUser();
    // if (!isAuthenticated) historyMethodsIPCRef.current?.clearAndGoto(components.login.path);
  });

  return (
    <IonApp>
      <ApplicationContextProvider>
        <IonReactRouter>
          {getRoutes()}
          <HistoryMethodsIPC ref={historyMethodsIPCRef} />
          <React.Suspense fallback={<IonSpinner />}>
            <IonTabs>
              {getRoutes()}
              <IonTabBar slot="bottom" hidden={!visibleMainTabs}>
                <IonTabButton tab="settings" href={components.settings.path}>
                  <IonIcon icon={settingsOutline} />
                  <IonLabel>Settings</IonLabel>
                </IonTabButton>
                {/* make sure that the home or / should be at the bottom always */}
                <IonTabButton tab="home" href={components.home.path}>
                  <IonIcon icon={homeOutline} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </React.Suspense>
        </IonReactRouter>
      </ApplicationContextProvider>
    </IonApp>
  )
};

export default App;
