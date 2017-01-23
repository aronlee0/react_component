import React,{Component} from 'react';
import {Router,Route,IndexRoute,hashHistory } from 'react-router';

// import useRouterHistory from 'react-router/lib/useRouterHistory';
// import createHashHistory  from 'history/lib/createHashHistory'
// import {Provider,connect} from "react-redux";

import Main from './Main';
import Login from './Login';
import HouseList from './HouseList';
import ContractList from './ContractList';

// const appHistory = useRouterHistory(createHashHistory)({queryKey:false});


function lazyLoadComponents(lazyModules) {  
    return (nextState, cb)=>{
        lazyModules(cb);
    }
    // return (location, cb) => {
    //     const moduleKeys = Object.keys(lazyModules);
    //     const promises = moduleKeys.map(key =>
    //         new Promise(resolve => lazyModules[key](resolve))
    //     )

    //     Promise.all(promises).then(modules => {
    //         cb(null, modules.reduce((obj, module, i) => {
    //             obj[moduleKeys[i]] = module;
    //             return obj;
    //         }, {}))
    //     })
    // }


    // (nextState, cb)=>{
    //     require.ensure([], (require) => {
    //         cb(null, require("./Main"))
    //     },"main");
    // }
}

export default
class RootRouter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router history={hashHistory}>
             {/*main*/}
                <Route path="/" getComponent={lazyLoadComponents(Main)} >
                    <Route path="house-list"  getComponent={lazyLoadComponents(HouseList)}></Route>
                    <Route path="contract-list"  getComponent={lazyLoadComponents(ContractList)}></Route>
                </Route>
            </Router>
        )
    }
}

// export default
// class RootRouter extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (
//             <Router history={hashHistory}>
//              {/*main*/}
//                 <Route path="main" getComponent={(nextState, cb)=>{
//                     require.ensure([], (require) => {
//                         cb(null, require("./Main"))
//                     },"main");
//                 }} >
//                     <Route path="house-list"  getComponent={(nextState, cb)=>{
//                         require.ensure([], (require) => {
//                             cb(null, require("./HouseList"))
//                         },"house-list");
//                     }}/>
//                     <Route path="contract-list"  getComponent={(nextState, cb)=>{
//                         require.ensure([], (require) => {
//                             cb(null, require("./ContractList"))
//                         },"contract-list");
//                     }}/>
//                 </Route>
//             </Router>
//         )
//     }
// }