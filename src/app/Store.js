import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../featchers/dataSlice'
export const store = configureStore({
    reducer: {
        data: dataSlice,
    }
})