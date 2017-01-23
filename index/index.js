// require('./index.scss');
import './index.scss';
import React from 'react';
import ReactDom,{render} from 'react-dom';
import ReactSelect from '../components/react-select/react-select.js';
import selectList from './data.json';

// import {createStore} from 'redux';
// import reduxDemo from '../redux/index.js';


//router
import Router from '../views/router';


let name = "房源楼号";

// ReactDom.render(<ReactSelect name={name} selist={selectList} />,document.getElementById('container'));
render(<Router />,document.getElementById('root-router'));


// var a = React.createElement("ul",{
//     "className": "visaul"
// });
// console.log(a);
// ReactDom.render(a,document.getElementById('container'));