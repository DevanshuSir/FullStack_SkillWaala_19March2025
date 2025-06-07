import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const userSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    formData: (state, action) => {
      //   console.log(action.payload);
      state.value.push(action.payload);
    },
  },
});

export const { formData } = userSlice.actions;

export default userSlice.reducer;
