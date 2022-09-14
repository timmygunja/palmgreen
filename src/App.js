import "./App.css";
import { useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./ui/layout/NavBar";
import Section from "./ui/Section";
import SkillList from "./components/SkillList";
import Bio from "./components/Bio";
import Projects from "./components/Projects";

function App() {
  const refMe = useRef(null);
  const refMyself = useRef(null);
  const refAnd = useRef(null);
  const refI = useRef(null);

  const engText = {
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  const ruText = {
    bio: "Важно заботиться о пациенте, чтобы за ним следовал клиент, но в то же время он будет страдать от больших болей и страданий. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы. Не злиться на боль, на выговор в наслаждении, он хочет быть волоском от боли, в надежде, что размножения нет. Если они не ослеплены желанием, они не выходят, виноваты те, кто отказывается от своих обязанностей, душа смягчается, то есть труд. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы.",
  };

  const onClickMe = () => {
    console.log(refMe.current);
    refMe.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* </header> */}
      <NavBar
        onClickMe={onClickMe}
        sources={{ engText: engText, ruText: ruText }}
      />

      <img scr={"flagusa.png"} style={{ width: "100px", height: "100px" }} />

      <Section name={"Bio"}>
        <Bio ref={refMe} />
      </Section>

      <Section name={"Skills"}>
        <SkillList />
      </Section>

      <Section name={"Recent projects"}>
        <Projects />
      </Section>
    </div>
  );
}

// export const refs = [refMe, refMyself, refAnd, refI];
export default App;
