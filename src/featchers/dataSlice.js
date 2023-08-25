import { createSlice } from '@reduxjs/toolkit'
import { FetchApiData } from '../api/fetchData.api'
const initialState = {
    data: [],
    loading: false,
    error: null
}
const dataSlice = createSlice({
    name:'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(FetchApiData.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(FetchApiData.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = null
        }),
        builder.addCase(FetchApiData.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.error.message
        })
    }
})
export default dataSlice.reducer;