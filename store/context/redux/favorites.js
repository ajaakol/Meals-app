import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		ids: [],
	},
	reducers: {
		addFavorite: (state, action) => {
			state.ids.push(action.payload.id);
			console.log(action);
		},
		removeFavorite: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
		},
	},
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;
