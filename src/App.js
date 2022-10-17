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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    eduTitle: "Education",

    eduSchoolLevel: "mid - high",
    eduSchoolTitle: "School #13",
    eduSchoolYears: "2008 - 2019",

    examLevel: "exams",
    examMaths: "Maths",
    examCS: "Computer Science",
    examEnglish: "English",
    examRussian: "Russian",

    eduUniLevel: "bachelors",
    eduUniTitle: "Finashka",
    eduUniYears: "2019 - 2023",

    eduMagLevel: "masters",
    eduMagTitle: "Future maga",
    eduMagYears: "2023 - 2025",

    gitLink: "check out github",
  };

  const ruText = {
    bioText:
      "Важно заботиться о пациенте, чтобы за ним следовал клиент, но в то же время он будет страдать от больших болей и страданий. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы. Не злиться на боль, на выговор в наслаждении, он хочет быть волоском от боли, в надежде, что размножения нет. Если они не ослеплены желанием, они не выходят, виноваты те, кто отказывается от своих обязанностей, душа смягчается, то есть труд. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы.",
    eduTitle: "Образование",

    eduSchoolLevel: "среднее",
    eduSchoolTitle: "Гимназия #13",
    eduSchoolYears: "2008 - 2019",

    examLevel: "экзамены",
    examMaths: "Математика",
    examCS: "Информатика",
    examEnglish: "Английский",
    examRussian: "Русский",

    eduUniLevel: "бакалавриат",
    eduUniTitle: "Финашка",
    eduUniYears: "2019 - 2023",

    eduMagLevel: "магистратура",
    eduMagTitle: "Будущая мага",
    eduMagYears: "2023 - 2025",

    gitLink: "перейти на гитхаб",
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
      <Section name={"Bio"}>
        <Bio id="bio" refMyself={refMyself} />
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
  );
}

// export const refs = [refMe, refMyself, refAnd, refI];
export default App;
