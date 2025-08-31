import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCardsThunk = createAsyncThunk(
	'/getCards',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get('/data/cards.json')

			await new Promise(resolve => setTimeout(resolve, 500))
			return response.data
		} catch (error) {
			return rejectWithValue('Something went wrong with uploading cards data')
		}
	}
)
