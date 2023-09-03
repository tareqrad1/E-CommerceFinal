import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[],
}
const actionSlice = createSlice({
    name:'actions',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const FindProduct = state.products.find((ele) => ele.id === action.payload.id)
            if(FindProduct) {
                FindProduct.qwt += 1
            }else {
                const Product = {...action.payload, qwt: 1}
                state.products.push(Product);
                localStorage.setItem('cart', JSON.stringify(state.products));
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter((prod) => prod.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.products = []
        },
        decreaseQuantity: (state, action) => {
            const FindProduct = state.products.find((ele) => ele.id === action.payload.id)
            if(FindProduct) {
                if(FindProduct.qwt > 1) {
                    FindProduct.qwt -= 1;
                }
            }
        },
    }
})
export default actionSlice.reducer;
export const { addToCart, removeFromCart, clearCart, decreaseQuantity, setCartFromLocalStorage } = actionSlice.actions;