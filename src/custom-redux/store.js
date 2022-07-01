import { configureStore } from '@reduxjs/toolkit';
import createReducer from './createReducer';

const store = configureStore({
	reducer: createReducer()
});

export default store;