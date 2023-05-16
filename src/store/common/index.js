import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
    name: 'common',
    initialState: {
         authToken:'',
        userData:{}
         },
    reducers: {
        updateToken: (state, action ) => {
            state.authToken=action.payload.token
        },
        removeToken: (state, action ) => {
            state.authToken=""
        },
        updateUserData: (state, action ) => {
            state.userData=action.payload
        },


      
    },
});
export const { updateToken, removeToken, updateUserData } = slice.actions;
export default slice.reducer;
