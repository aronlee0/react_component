import React from 'react';
import {createStore} from 'redux';
import ReactDom,{render} from 'react-dom';


// const defaultState = 0;
// const reducer = (state = defaultState,action) => {
//     switch(action.type){
//         case 'ADD_TODO':
//             return state + action.payload;
//         default:
//             return state;
//     }
// }
// const store = createStore(reducer);
// const state = store.getState();

// const action = {
//     type: "ADD_TODO",
//     payload: 'Learn Redux'
// };

// const ADD_TODO = "ADD_TODO";
// function addTodo(text){
//     return {
//         type: ADD_TODO,
//         text
//     }
// }

// const action2 = addTodo('Learn Redux');

// store.dispatch(action2);

// const actions3 = [
//   { type: 'ADD', payload: 0 },
//   { type: 'ADD', payload: 1 },
//   { type: 'ADD', payload: 2 }
// ];

// const total = actions3.reduce(reducer, 0)
// console.log(total);


// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//解除监听
// unsubscribe();


// example:


const Counter = ({value})  =>  (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const reducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer);

const RnRender = () => {
    render(
        <Counter 
            value={store.getState()} 
            onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
            onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}/>,
        document.getElementById("container")
    );
}
const subscribe = ()=>{
    console.log("subscribe");
}

store.subscribe(subscribe);
RnRender();