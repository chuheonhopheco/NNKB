import { createSlice } from '@reduxjs/toolkit'

const initialState = {
<<<<<<< HEAD
    search: '',
}

export const productSlide = createSlice({
    name: 'product',
    initialState,
    reducers: {
        searchProduct: (state, action) => {
            state.search = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { searchProduct } = productSlide.actions

export default productSlide.reducer
=======
  search: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchProduct } = productSlice.actions

export default productSlice.reducer
>>>>>>> 50250792de628ad99f16fb0485365c0ec4b8365c
