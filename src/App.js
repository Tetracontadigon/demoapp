import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import awsconfig from './aws-exports';
import {HomeCollection, PostLucanCollection, LNavBar, EditProfile, FormForPartU} from './ui-components';
//import {NewHome} from './ui-components';
//import React from 'react';
import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom'; //no such file?
import Form from './Form';
import List from './List';
Amplify.configure(awsconfig);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Form/>}/>
          <Route exact path='/form' element={<Form/>}/>
          <Route exact path='/list' element={<List/>}/>
        </Routes>
      </div>
      //<FormForPartU/>
    );
  }
}

export default App;