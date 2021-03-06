import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

/* Hint#1 : To Disable the Type-Script Strcits on the types inputed 
          => We need to change "strict" from "true" to "false" on the tsconfig.json file. 
   Hint#2 : ' Type-Script Strcits' Help us to 'identify' our 'errors' in types 'passed' on our 'code on compilation'
             NOT after running the app + Give us more 'Helpers' with the 'Auto-Completion' by the 'Editor' 
             when 'coding based on the type passed' */

// 'amount: number' => We declare the 'variable: type' ==> This is called 'Type Annotation' of 'TypeScript' language
// 'function...: string' => ': string' ==> is the return type that we want to return it => If we don't put it
//    => 'TypeScript' will detected auto (it's optional) ==> This is called also 'Type Annotation' of 'TypeScript' language
function formatMoney(amount: number): string {
  return '$' + amount.toFixed(2);
}

// We are defining here our 'Money' object using the interface
interface Money {
  currency: string;
  amount: number;
}

// function formatMoney_2(money: Money) { 
const formatMoney_2 = (money: Money) => { // This is the same func also but with arrows (=>) way (ES6)
  return money.currency + money.amount.toFixed(3);
};

// React.FC => FC: Functionnal Component
const Home: React.FC = () => {
  const balance = 123;
  const balance_2 = { currency: 'TND', amount: 1350};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Pure App #Livereload</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ionic Pure App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer /> */}
        Your Balance #1 is {formatMoney(balance)}
        <br></br>
        Your Balance #2 is {formatMoney_2(balance_2)} 
      </IonContent>
    </IonPage>
  );
};

export default Home;
