import { createSlice } from "@reduxjs/toolkit";

const engText = {
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    language: "english",
    currentText: engText,
  },
  reducers: {
    switchLanguage(state, action) {
      state.language === "english"
        ? (state.language = "russian")
        : (state.language = "english");

      state.currentText = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
