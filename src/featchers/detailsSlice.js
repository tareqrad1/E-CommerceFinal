import { createSlice } from '@reduxjs/toolkit'

const detailsSlice = createSlice({
    name:'details',
    initialState: [],
    reducers: {
        viewDetails: (state, action) => {
            return action.payload
        }
    }
})
export default detailsSlice.reducer;
export const { viewDetails } = detailsSlice.actions;