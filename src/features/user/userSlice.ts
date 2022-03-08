import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { authenticate, logout } from './userAPI';

export interface UserState {
    info: {
        username: string,
        firstName: string,
        lastName: string
    };
    loginStatus: 'loggedIn' | 'loggedOut';
    status: 'idle'| 'verifying' | 'failed';
    errorMessage: ErrorMessage["errorMessage"];
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
    loginStatus: 'loggedOut',
    status: 'idle',
    errorMessage: "",
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

export const logoutAsync = createAsyncThunk<
    boolean, 
    void,
    {
        rejectValue: ErrorMessage;
    }
>(
    'user/logoutAsync',
    async (_undefined, thunkAPI) => {
        try {
            await logout(); 
            return true;
        } catch (error){
            return thunkAPI.rejectWithValue({errorMessage: error} as ErrorMessage);
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {    
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'verifying';
            })
            .addCase(loginAsync.fulfilled, (state, {payload}) => {
                state.info = payload;
                state.loginStatus = 'loggedIn';
                state.status = 'idle';
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'failed';
                if (action.payload) {
                    state.errorMessage = action.payload.errorMessage;
                } else {
                    state.errorMessage = "Unknown error has occurred!";
                }
            })
            
            .addCase(logoutAsync.pending, (state) => {
                state.status = 'verifying';
            })
            .addCase(logoutAsync.fulfilled, (state) => {
                state.info = {...initialState.info};
                state.loginStatus = 'loggedOut';
                state.status = 'idle';
            })
            .addCase(logoutAsync.rejected, (state, action) => {
                state.status = 'failed';
                if (action.payload) {
                    state.errorMessage = action.payload.errorMessage;
                } else {
                    state.errorMessage = "Unknown error has occurred";
                }
            })
    }
})

export const selectLoginStatus = (state: RootState) => state.user.loginStatus;
export const selectStatus = (state: RootState) => state.user.status;
export const selectErrorMessage = (state: RootState) => state.user.errorMessage;
export const selectUserInfo = (state: RootState) => state.user.info;
export default userSlice.reducer;