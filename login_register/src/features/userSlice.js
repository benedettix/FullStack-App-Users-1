import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    STORE_USER: (state, action) => {
      // console.log(state.name); // return { ...state, ...action.payload };
      state.name = JSON.parse(action.payload).username;
      // console.log(JSON.parse(action.payload).username);
    },
    REMOVE_USER: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { STORE_USER, REMOVE_USER } = userSlice.actions;

export default userSlice.reducer;
