import { createStore } from "redux";

import reducer from "./reducers";

const enhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;

    store.dispatch = (action) => {

        if(typeof action === 'string') {
            return originalDispatch({
                type: action
            });
        }
        return originalDispatch(action);
    }
    return store;    
};

const store = createStore(reducer, enhancer);

store.dispatch('HELLO_WORLD');

export default store;