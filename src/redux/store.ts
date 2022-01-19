import { createStore, combineReducers, applyMiddleware  } from 'redux';
import Reducer from './reducer';
import NameReducer from './nameReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    reducer: Reducer,
    nameReducer: NameReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
