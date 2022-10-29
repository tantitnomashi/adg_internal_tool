import { combineReducers } from '@reduxjs/toolkit';
import config from './configSlice';

const createReducer = asyncReducers => (state, action) => {
	const combinedReducer = combineReducers({
		config,
		...asyncReducers
	});

	return combinedReducer(state, action);
};

export default createReducer;
