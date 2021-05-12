import {createStore} from 'redux';
import reducer from "./reducers/reducer";


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log('subscribe', store.getState());
});


export default store;