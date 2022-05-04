import React, {Component} from 'react';
import { LNavBarFixed, PostLucanCollection } from './ui-components';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import "./aws-exports";

class List extends Component {
    render(){
        return(<ListF/>);
    }
}

function ListF(){
    return (
        <AmplifyProvider>
            <div className="list">
                <h1>Posts</h1>
                <LNavBarFixed />
                <PostLucanCollection />
            </div>
          </AmplifyProvider>
        );
} 

export default List;