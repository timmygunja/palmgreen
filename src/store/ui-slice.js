import { createSlice } from "@reduxjs/toolkit";

const engText = {
  bioText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  eduTitle: "Education",

  eduSchoolLevel: "mid - high",
  eduSchoolTitle: "MTEI Gymnasium #13",
  eduSchoolYears: "Nalchik 2008 - 2019",
  eduSchoolAchievement: "Gold medal",

  examLevel: "exams",
  examMaths: "Maths",
  examCS: "Computer Science",
  examEnglish: "English",
  examRussian: "Russian",

  eduUniLevel: "bachelors",
  eduUniTitle:
    "Financial University under the Government of Russian Federation",
  eduUniYears: "Moscow 2019 - 2023",
  eduUniAchievement: "Exam mark on average: 4,7 / 5",

  eduMagLevel: "masters",
  eduMagTitle: "Future masters degree",
  eduMagYears: "2023 - 2025",

  mernProjectTitle: "Simple Fullstack E-Commerce Website",
  mernProjectFront: "Frontend: 24 folders / 82 files / 4442 code lines",
  mernProjectBack: "Backend: 7 folders / 17 files / 934 code lines",

  gitLink: "check out github",
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
