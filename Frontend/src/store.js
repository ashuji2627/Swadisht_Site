//for it making in outside the all folders, so that 
//everyone can use it, to get output data
import {
    legacy_createStore as createStore, //
    //we are not using->create store method , so we are using legacy create store
    //it is function, it helps to create the store,it is a object or array container
    combineReducers,//
    // we are using more number of reducer to perform an action, like restaurant , fooditem etc
    //so, we need to combine all reducer then store 
    applyMiddleware,
    //it is used to any middle ware function,
    //when some action are perform by reducer , then some urgent function need to run
    //then middleware, stop reducer to perform action , and start middle ware to start their action
    //with the help of thunk
    compose,//
    //to read the function form right to left
    //it will increae the readabilty of our funciton
} from "redux";// these all are boiler code to perform the task

import thunk from "redux-thunk";// it is one of the package, mostly used it
import { restaurantReducer } from "./reducer/restaurantReducer";
//it will helps us to datafetching like
//a piece of code that does some delayed work like datafetching will get more delayed work to do.
//it is a standard , way of writing async logic and data fetching also

const reducer =combineReducers({ //to make one reducer
    restaurants: restaurantReducer,

});


//it is typically used in redux and react appication, which allow you to multiple enhancer store in a row
//it is also usefull in adding thing in like dev tools
const composeenhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//we want to connect , these project with dev tools or developer tool

const middleware=[thunk];

const store= createStore(reducer,composeenhancers(applyMiddleware(...middleware))//it is enhancing , custom middleware and multiple store
);

export default store;
//Setup for the store , which we can use multiple times


