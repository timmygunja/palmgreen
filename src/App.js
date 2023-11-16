import "./App.css";
import { useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./ui/layout/NavBar";
import Section from "./ui/Section";
import SkillList from "./components/SkillList";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Footer from "./ui/layout/Footer";

function App() {
  const refMe = useRef(null);
  const refMyself = useRef(null);
  const refAnd = useRef(null);
  const refI = useRef(null);

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

  const ruText = {
    bioText:
      "Привет! Добро пожаловть на страницу-портфолио, отображающую основную информацию обо мне как разработчике. Меня, кстати, зовут Тимур и я хорошо знаком с Python, Java и JavaScript, а также многими популярными библиотеками, сопутствующими этим языкам. Разрабатываю с 2019 года, имею опыт в областях фронтенд, бэкенд, прикладных решений и машинного обучения / big data, в том числе и рабочий. Данная адаптивная страница создана мной, здесь Вы можете ознакомиться со ступенями моего образования, достижениями, навыками и ссылками на мои проекты!",
    eduTitle: "Образование",

    eduSchoolLevel: "среднее",
    eduSchoolTitle: "МКОУ Гимназия #13",
    eduSchoolYears: "Нальчик 2008 - 2019",
    eduSchoolAchievement: "Золотая медаль",

    examLevel: "экзамены",
    examMaths: "Математика",
    examCS: "Информатика",
    examEnglish: "Английский",
    examRussian: "Русский",

    eduUniLevel: "бакалавриат",
    eduUniTitle:
      "Финансовый Университет при Правительстве Российской Федерации",
    eduUniSpeciality:
      "IT-сервисы и Анализ Больших Данных в Экономике и Финансах",
    eduUniYears: "Москва 2019 - 2023",
    eduUniAchievement: "Среднеэкзаменационная оценка: 4,7 / 5",

    eduMagLevel: "магистратура",
    eduMagTitle:
      "Финансовый Университет при Правительстве Российской Федерации",
    eduMagSpeciality: "DevOps - инженерия",
    eduMagYears: "2023 - 2025",

    mernProjectTitle: "Простой фуллстэк интернет-магазин",
    mernProjectFront: "Фронт: 24 папки / 82 файла / 4442 строки кода",
    mernProjectBack: "Бэк: 7 папок / 17 файлов / 934 строки кода",

    todoProjectTitle: "ts-react",
    todoProjectLinkText: "Перейти на github репозиторий",

    gitLink: "github-проекты",
  };

  const onClickMe = () => {
    refMe.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onClickMyself = () => {
    refMyself.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onClickAnd = () => {
    refAnd.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onClickI = () => {
    refI.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="root hard-centered">
      <div className="App">
        {/* <header className="App-header"> */}
        {/* </header> */}
        <NavBar
          onClickMe={onClickMe}
          onClickMyself={onClickMyself}
          onClickAnd={onClickAnd}
          onClickI={onClickI}
          sources={{ engText: engText, ruText: ruText }}
        />

        {/* <img scr={"flagusa.png"} style={{ width: "100px", height: "100px" }} /> */}
        <div ref={refMe}></div>
        <Section name={"Bio"} className="bio-container">
          <Bio refMyself={refMyself} />
        </Section>

        <div ref={refAnd}></div>
        <Section name={"Skills"}>
          <SkillList />
        </Section>

        <div ref={refI}></div>
        <Section name={"Recent projects"}>
          <Projects />
        </Section>

        <Footer />
      </div>
    </div>
  );
}

// export const refs = [refMe, refMyself, refAnd, refI];

export default App;
