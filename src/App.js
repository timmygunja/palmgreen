import './App.css';
import { useState } from "react";
import { createGlobalStyle } from "styled-components"
import NavBar from "./ui/layout/NavBar";
import Section from "./ui/Section";
import SkillList from "./components/SkillList";

function App() {

  return (
    <div className="App">
        {/*<header className="App-header">*/}
        {/*</header>*/}
        <NavBar />
        <Section name={"Skills"}>
            <SkillList />
        </Section>
    </div>
  );
}

export default App;