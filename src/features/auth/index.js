import {createSlice} from '@reduxjs/toolkit';

const authState = {
  userDetails: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    resetAuth: state => {
      state.userDetails = {};
    },
    logedInUser: (state, {payload}) => {
      state.userDetails = payload;
    },
    
  },
});

export const {resetAuth, logedInUser,tabActive} = AuthSlice.actions;

export default AuthSlice.reducer;
