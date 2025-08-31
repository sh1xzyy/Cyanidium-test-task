import { configureStore } from '@reduxjs/toolkit'
import sendMessageReducer from './sendMessage/slice'
import cardsReducer from './cards/slice'

const store = configureStore({
	reducer: {
		sendMessage: sendMessageReducer,
		cards: cardsReducer,
	},
})

export default store
