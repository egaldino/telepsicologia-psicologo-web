import { createSlice, configureStore } from '@reduxjs/toolkit'

const userIdSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        setUserId: (state, action) => {
            state.value = {
                user: {
                    id: action.payload
                }
            }
        }
    }
})

export const { setUserId } = userIdSlice.actions

export const store = configureStore({
    reducer: userIdSlice.reducer
});