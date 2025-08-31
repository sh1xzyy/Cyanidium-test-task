import { createSlice } from '@reduxjs/toolkit'
import { sendMessageThunk } from './operations'

const sendMessageSlice = createSlice({
	name: 'sendMessage',
	initialState: {
		isLoading: false,
	},
	extraReducers: builder => {
		builder
			.addCase(sendMessageThunk.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(sendMessageThunk.rejected, state => {
				state.isLoading = false
			})
			.addCase(sendMessageThunk.pending, state => {
				state.isLoading = true
			})
	},
})

export default sendMessageSlice.reducer
