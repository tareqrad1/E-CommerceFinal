import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosApi } from './axiosApi.api'


export const FetchApiData = createAsyncThunk('products/FetchApiData', async () => {
    const {data} = await axiosApi.get('/data')
    return data
})

