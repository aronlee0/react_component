// require('./index.scss');
import './index.scss';
import React from 'react';
import ReactDom from 'react-dom';
import ReactSelect from '../components/react-select/react-select.js';
import selectList from './data.json';

let name = "房源楼号";

ReactDom.render(<ReactSelect name={name} selist={selectList} />,document.getElementById('container'));