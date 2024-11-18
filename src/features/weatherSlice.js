import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeather } from '../api/weatherApi'

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
   return await getWeather()
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      loading: false,
      error: null,
      weather: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weather = action.payload
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
