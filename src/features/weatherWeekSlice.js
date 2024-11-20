import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeekWeather } from '../api/weatherApi'

export const fetchWeekWeather = createAsyncThunk('forecast/fetchWeekWeather', async () => {
   return await getWeekWeather()
})

const weatherWeekSlice = createSlice({
   name: 'weather',
   initialState: {
      loading: false,
      error: null,
      forecast: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder

         .addCase(fetchWeekWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchWeekWeather.fulfilled, (state, action) => {
            state.loading = false
            state.forecast = action.payload
         })
         .addCase(fetchWeekWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherWeekSlice.reducer
