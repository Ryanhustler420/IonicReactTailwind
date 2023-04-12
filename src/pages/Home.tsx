import React, { useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ApplicationContext from '../data/application-context';
import Highlight from 'react-highlight';
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
        <Highlight className='java text-4xl'>
          <div dangerouslySetInnerHTML={{ __html: "for <input class='w-8 text-center h-6 text-green-500 text-sm font-bold bg-transparent border-none' />i in range(1, 5):\n\tfor <input class='w-8 text-center h-6 text-green-500 text-sm font-bold bg-transparent border-none' />j in range(<input class='w-8 text-center h-6 text-green-500 text-sm font-bold bg-transparent border-none' />i):\n\t\tprint(<input class='w-8 text-center h-6 text-green-500 text-sm font-bold bg-transparent border-none' />j, end=\"\")\n\tprint()", }}></div>
        </Highlight>
      </IonContent>
    </IonPage>
  );
};

export default Home;
