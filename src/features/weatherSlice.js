import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { fetchWeatherByLocation } from '../api/weatherApi'

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
   //    const response = await fetchWeatherByLocation()
   //    return response.data
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      weather: [],
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weather = action.payload
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
   },
})

export default weatherSlice.reducer
