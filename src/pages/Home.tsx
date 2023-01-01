import React, { useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ApplicationContext from '../data/application-context';
import _ from "lodash";
import './Home.css';

// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../redux/reducers/counterSlice";

const network = _.debounce(function () {
  fetch("https://raisehand.software/v1")
    .then((response) => response.json())
    .then(console.log);
}, 1000);

const Home: React.FC<{
  onShowTabs: () => void;
  onHideTabs: () => void;
  rendering: boolean;
}> = props => {
  if (props.rendering) { props.onHideTabs(); }
  const applicationCtx = useContext(ApplicationContext);
  network();

  // const count = useSelector((state: any) => state.counter.value);
  // const dispatch = useDispatch();
  // console.log(count);
  // dispatch(increment());

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
