import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
    name: 'common',
    initialState: { authToken:'' },
    reducers: {
        updateToken: (state, action ) => {
            state.authToken=action.payload.token
        },
        removeToken: (state, action ) => {
            state.authToken=""
        }

      
    },
});
export const { updateToken, removeToken } = slice.actions;
export default slice.reducer;
