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

  projectDescMainTitle: "Project description:",
  projectDescStructure: "Project structure:",

  mernProjectTitle: "E-Commerce Drinks Website",
  mernProjectCaption: "MongoDB Express React NodeJs",
  mernProjectDescMain:
    "A prototype of a developed commercial project for an online store with basic functionality of a product grid, adding cards to favorites, cart, administrative content control panel, and so on.",
  // mernProjectDescDevteam: "Single developer",
  mernProjectDescStack: ["MongoDB", "Express", "React", "NodeJS"],
  mernProjectDescImgPath: "../../layers.png",
  mernProjectFront: "Frontend: 24 folders / 82 files / 4442 code lines",
  mernProjectBack: "Backend: 7 folders / 17 files / 934 code lines",
  mernProjectLink: "https://mern-timmygunja.vercel.app",
  mernProjectGitLink: "https://github.com/timmygunja/mern-learn-frontend",

  newsBotProjectTitle: "Auditorial reporting automation",
  newsBotProjectCaption: "Python Selenium Telegram API Excel",
  newsBotProjectDescMain:
    "Automation of information collection for the audit company Ernst&Young (now B1). A Telegram bot that accepts requests, including a news source, date range, and one of or all 80+ regions of Russia, for further parsing of news, conversion to an Excel table according to a given layout, and sending via Telegram.",
  // mernProjectDescDevteam: "Single developer",
  newsBotProjectDescStack: ["Python", "Selenium", "Telegram API", "Excel"],
  newsBotProjectDescImgPath: "../../layers.png",
  newsBotProjectLink: "https://t.me/news_info_parser_bot",
  newsBotProjectGitLink: "https://github.com/timmygunja/news_info_parser_bot",

  todosProjectTitle: "Todo-list app / task-manager",
  todosProjectCaption: "TypeScript React JavaScript CSS",
  todosProjectDescMain:
    "A simple application that allows you to maintain a list of personal to-dos / goals with the functionality of adding notes, viewing active and completed entries, as well as clearing data.",
  // mernProjectDescDevteam: "Single developer",
  todosProjectDescStack: ["TypeScript", "React", "JavaScript", "CSS"],
  todosProjectDescImgPath: "../../layers.png",
  todosProjectLink: "https://ts-react-todos.vercel.app",
  todosProjectGitLink: "https://github.com/timmygunja/ts-react-todos",

  mlFacesProjectTitle: "AI Facial Recognition",
  mlFacesProjectCaption: "Machine Learning Python Pandas Numpy",
  mlFacesProjectDescMain:
    'Course project, implementation of a machine learning model for face recognition on the "olivetti_faces" dataset using the Python language and the Pandas and Numpy libraries for data processing, MatPlotLib for data visualization and the number of ML models included in the Sklearn module.',
  // mernProjectDescDevteam: "Single developer",
  mlFacesProjectDescStack: ["Machine Learning", "Python", "Pandas", "Numpy"],
  mlFacesProjectDescImgPath: "../../layers.png",
  mlFacesProjectLink:
    "https://github.com/timmygunja/FinUniver-3-CourseWork-ML/blob/main/coursework.ipynb",
  mlFacesProjectGitLink:
    "https://github.com/timmygunja/FinUniver-3-CourseWork-ML/tree/main",

  weatherBotProjectTitle: "Weather forecast and automailing",
  weatherBotProjectCaption: "Java Telegram API Threads Json",
  weatherBotProjectDescMain:
    "Weather telegram bot in Java with the functionality of parsing data for a specified city, receiving current information and future forecasts, as well as the ability to subscribe to daily newsletters with forecasts.",
  // mernProjectDescDevteam: "Single developer",
  weatherBotProjectDescStack: ["Java", "Telegram API", "Threads", "Json"],
  weatherBotProjectDescImgPath: "../../layers.png",
  weatherBotProjectLink: "https://t.me/WeatherTelegramFinBot",
  weatherBotProjectGitLink: "https://github.com/timmygunja/WeatherTelegramBot",

  kaggleProjectTitle: "Kaggle AI Competitions",
  kaggleProjectCaption: "Artificial Intelligence Machine Learning",
  kaggleProjectDescMain:
    "A set of research papers on the implementation of machine learning models in the field of finance: bank credit scoring, classification of policyholders, prediction of sales volumes, prediction of customer response and property value.",
  // kaggleProjectDescDevteam: "Single developer",
  kaggleProjectDescStack: ["Python", "AI", "ML", "Finances"],
  kaggleProjectDescImgPath: "../../layers.png",
  kaggleProjectLink:
    "https://www.kaggle.com/timmygunja/competitions?tab=active",
  kaggleProjectGitLink: "https://www.kaggle.com/timmygunja",

  // FOOTER
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
