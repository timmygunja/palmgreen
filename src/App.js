import './App.css';
import { useState } from "react";
import { createGlobalStyle } from "styled-components"
import NavBar from "./ui/layout/NavBar";
import Section from "./ui/Section";
import SkillList from "./components/SkillList";
import Bio from "./components/Bio";

function App() {

  return (
    <div className="App">
        {/*<header className="App-header">*/}
        {/*</header>*/}
        <NavBar />

        <Section name={"Bio"}>
            <Bio />
        </Section>

        <Section name={"Skills"}>
            <SkillList />
        </Section>
    </div>
  );
}

export default App;