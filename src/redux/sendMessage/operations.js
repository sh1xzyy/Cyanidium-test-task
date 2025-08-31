import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const TG_BOT_TOKEN = process.env.NEXT_PUBLIC_TG_BOT_TOKEN
const TG_CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID

export const sendMessageThunk = createAsyncThunk(
	'/sendMessage',
	async ({ name, nickname, email }, { rejectWithValue }) => {
		try {
			const text = `
			👤 Имя: ${name || 'Не указан'}
			👾 Ник Telegram: ${nickname || 'Не указан'}
			📧 Почта: ${email || 'Не указан'}`.trim()
			const response = await axios.post(
				`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
				{
					chat_id: TG_CHAT_ID,
					text,
					parse_mode: 'HTML',
				}
			)

			await axios.post(
				`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
				{
					chat_id: TG_CHAT_ID,
					text: `✅ Данные приняты в очередь на обработку`,
				}
			)
			return response.data
		} catch (error) {
			return rejectWithValue('Something went wrong with sending data')
		}
	}
)
