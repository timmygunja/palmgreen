import { createSlice } from "@reduxjs/toolkit";

const engText = {
  bioText:
    "Hello! Welcome to my little portfolio page, which contains information about me as a developer. By the way, my name is Tim and I am mostly familiar with Python, Java and JavaScript including a number of popular 3rd party libraries related to these languages. Coding since 2019, my experience now is mostly in the fields of frontend, backend, applied solutions and machine learning / big data development. This adaptive page was created by me so you can further get acquainted with the stages of my education, achievements, skills and links to my projects!",
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
  eduUniSpeciality: "IT-services and Big Data in Economics & Finances",
  eduUniYears: "Moscow 2019 - 2023",
  eduUniAchievement: "Exam mark on average: 4,7 / 5",

  eduMagLevel: "masters",
  eduMagTitle:
    "Financial University under the Government of Russian Federation",
  eduMagSpeciality: "DevOps Engineering",
  eduMagYears: "2023 - 2025",

  mernProjectTitle: "Simple Fullstack E-Commerce Website",
  mernProjectFront: "Frontend: 24 folders / 82 files / 4442 code lines",
  mernProjectBack: "Backend: 7 folders / 17 files / 934 code lines",

  todoProjectTitle: "ts-react",
  todoProjectLinkText: "see github repository",

  gitLink: "github-projects",
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
