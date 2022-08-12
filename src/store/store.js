import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        setUser: (state, action) => {
            state.value = {
                user: {
                    id: action.payload.userId,
                    token: action.payload.token
                }
            }
        }
    }
})

export const { setUser } = userSlice.actions

export const store = configureStore({
    reducer: userSlice.reducer
});