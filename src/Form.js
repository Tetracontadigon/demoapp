import React, {Component} from 'react';
import { FormForPartU } from './ui-components';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import {AmplifyProvider} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react";
import "./aws-exports";

class Form extends Component {
    render(){
        return(<FormF/>);
    }
}

function FormF() {
    return (
      <AmplifyProvider>
        <div className="App">
          <h1>Input Data</h1>
          <FormForPartU />
        </div>
      </AmplifyProvider>
    );
}

export default Form;