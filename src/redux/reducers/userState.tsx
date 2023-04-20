import _ from 'lodash';
import { createSlice } from "@reduxjs/toolkit";

export const userState = createSlice({
    name: "userState",
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            const u: {} = action.payload.user;
            state.user = u;
        },
        clearUserState: (state) => {
            state.user = {};
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setUser,
    clearUserState,
} = userState.actions;

export default userState.reducer;