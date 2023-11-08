import { User } from "@entities/User/model/types/UserSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface loginByEmailProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, loginByEmailProps>(
    'login/loginByEmail',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', authData)
            if(!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('error')
        }

    }
)