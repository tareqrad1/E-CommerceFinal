import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../featchers/dataSlice'
import actionSlice from '../featchers/actionSlice'
export const store = configureStore({
    reducer: {
        data: dataSlice,
        products: actionSlice,
    }
})