import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMapWeather } from '../api/weatherApi'

export const fetchMapWeather = createAsyncThunk('weather/fetchMapWeather', async ({ lat, lng }) => {
   return await getMapWeather(lat, lng)
})

const sunSlice = createSlice({
   name: 'sun',
   initialState: {
      loading: false,
      error: null,
      weather: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMapWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMapWeather.fulfilled, (state, action) => {
            state.loading = false
            state.sun = action.payload
         })
         .addCase(fetchMapWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default sunSlice.reducer
