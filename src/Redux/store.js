import {createStore} from 'redux';
import rootReducer from './GameReducer/rootReducer';

const store = createStore(rootReducer);

export default store;