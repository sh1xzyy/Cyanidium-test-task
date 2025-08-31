import { createSlice } from '@reduxjs/toolkit'
import { getCardsThunk } from './operations'

const cardsSlice = createSlice({
	name: 'cardsSlice',
	initialState: {
		isLoading: false,
		cards: [],
	},
	extraReducers: builder => {
		builder
			.addCase(getCardsThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.cards = action.payload
			})
			.addCase(getCardsThunk.pending, state => {
				state.isLoading = true
			})
			.addCase(getCardsThunk.rejected, state => {
				state.isLoading = false
			})
	},
})

export default cardsSlice.reducer
