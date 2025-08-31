import { configureStore } from '@reduxjs/toolkit'
import sendMessageReducer from './sendMessage/slice'

const store = configureStore({
	reducer: {
		sendMessage: sendMessageReducer,
	},
})

export default store
