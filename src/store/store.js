import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weatherSlice'
import weatherWeekReducer from '../features/weatherWeekSlice'
import sunReducer from '../features/sunSlice'

const store = configureStore({
   reducer: {
      weather: weatherReducer,
      forecast: weatherWeekReducer,
      sun: sunReducer,
   },
})

export default store
