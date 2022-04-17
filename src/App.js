import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import {HomeCollection, PostLucanCollection, LNavBar, EditProfile, FormForPartU} from './ui-components';
//import {NewHome} from './ui-components';
Amplify.configure(awsconfig);


function App() {
  return (
    <AmplifyProvider>
      <div className="App">
        <h1>Homes</h1>
        <LNavBar />
        <table><td><FormForPartU /></td><td><PostLucanCollection /></td></table>
      </div>
    </AmplifyProvider>
  );
}

export default App;