import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './stores/store';
import MapContainer from "./container/MapContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

let root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
       <MapContainer />
    </Provider>
    , root
);







