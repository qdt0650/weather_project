import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weatherSlice'
import weatherWeekReducer from '../features/weatherWeekSlice'

const store = configureStore({
   reducer: {
      weather: weatherReducer,
      forecast: weatherWeekReducer,
   },
})

export default store
