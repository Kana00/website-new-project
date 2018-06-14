import { RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

export { RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<any>({

});
