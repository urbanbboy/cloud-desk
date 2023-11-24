import { userReducer } from '@entities/User'
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from '..'
import { loginReducer } from '@features/loginUser'

const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    loginForm: loginReducer
}

export const store = configureStore<StateSchema>({
    reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch