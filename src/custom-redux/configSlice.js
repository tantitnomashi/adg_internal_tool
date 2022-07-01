import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bankSelected: "",
	staffName: undefined,
};

const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		setBankSelected: (state, action) => {
			state.bankSelected = action.payload;
		},
		setStaffName: (state, action) => {
			state.staffName = action.payload;
		}
	}
});

export const { setBankSelected, setStaffName } = configSlice.actions;

export default configSlice.reducer;
