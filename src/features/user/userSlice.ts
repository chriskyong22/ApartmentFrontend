import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { authenticate } from './userAPI';

export interface UserState {
    info: {
        username: string,
        firstName: string,
        lastName: string
    };
    status: 'loggedIn' | 'loggedOut' | 'verifying' | 'failed';
    statusMessage: string;
}

interface ErrorMessage {
    errorMessage: string;
}

export interface LoginState {
    username: string,
    password: string
}

export interface userInfo { 
    username: string,
    firstName: string,
    lastName: string
}

const initialState: UserState = {
    info: {
        username: "",
        firstName: "",
        lastName: "",
    },
    status: 'loggedOut',
    statusMessage: "",
};

export const loginAsync = createAsyncThunk<
    userInfo,
    LoginState,
    {
        rejectValue: ErrorMessage
    }
>(
    'user/loginAsync',
    async (loginState, thunkAPI) => {
        // The value we return becomes the `fulfilled` action payload

        // Send request to the server
        // Get response, 
        // if valid, dispatch to setUserInfo
        // If invalid, dispatch to failure
        try { 
            const response = await authenticate(loginState);
            return response as userInfo;
        } catch (error) {
            return thunkAPI.rejectWithValue({errorMessage: error} as ErrorMessage);
        }
    }
);

export const logoutAsync = createAsyncThunk(
    'user/logoutAsync',
    async ({username}: LoginState, thunkAPI) => {
        return Promise.resolve();
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {    
        logout: (state) => {
            state.status = 'loggedOut';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'verifying';
            })
            .addCase(loginAsync.fulfilled, (state, {payload}) => {
                state.info = payload;
                state.status = 'loggedIn';
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'failed';
                if (action.payload) {
                    state.statusMessage = action.payload.errorMessage;
                } else {
                    state.statusMessage = "Unknown error has occurred!";
                }
            })
    }
})

export const selectStatus = (state: RootState) => state.user.status;
export const selectStatusMessage = (state: RootState) => state.user.statusMessage;
export const selectUserInfo = (state: RootState) => state.user.info;
export default userSlice.reducer;