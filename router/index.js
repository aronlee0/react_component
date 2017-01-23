import React,{Component} from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

// route components
// import PageHome from '../views/home/index.js';
// import PageList from '../views/list/index.js';
// import PageDetail from '../views/detail/index.js';


const rootRoute = {
    childRoutes: [{
        path: '/',
        // component: require('../views/Home'),
        childRoutes: [
            require('./main'),
            require('./home')
        ]
    }]
}


export default class RootRouter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router 
            history={hashHistory}
            routes={rootRoute}></Router>
        )
    }
}