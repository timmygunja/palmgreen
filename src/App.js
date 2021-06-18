import './App.css';
import { useState } from "react";
import { createGlobalStyle } from "styled-components"
import NavBar from "./ui/layout/NavBar";
import Section from "./ui/Section";
import SkillGroup from "./components/SkillGroup";
import Skill from "./components/Skill";
import SkillTable from "./components/SkillTable";

function App() {
    const [web, setWeb] = useState("table-active");
    const [python, setPython] = useState("table");
    const [java, setJava] = useState("table");
    const [devOps, setDevOps] = useState("table");
    const [sql, setSql] = useState("table");

    const hideSkillTable = () => {
        setWeb("table")
        setPython("table")
        setJava("table")
        setDevOps("table")
        setSql("table")
    }

  return (
    <div className="App">
        {/*<header className="App-header">*/}
        {/*</header>*/}
        <NavBar />
        <Section name={"Skills"}>
            <div>
                <div className={"skill-list"}>
                    <div className={"skill-titles"}>
                        <h3 onClick={() => { hideSkillTable(); setWeb("table-active") }}>Web</h3>
                        <h3 onClick={() => { hideSkillTable(); setPython("table-active") }}>Python</h3>
                        <h3 onClick={() => { hideSkillTable(); setJava("table-active") }}>Java</h3>
                        <h3 onClick={() => { hideSkillTable(); setDevOps("table-active") }}>DevOps</h3>
                        <h3 onClick={() => { hideSkillTable(); setSql("table-active") }}>Sql</h3>
                    </div>
                    <div className="skill-tables">
                        <SkillTable className={web}>
                            <Skill name={"HTML"} />
                            <Skill name={"CSS"} />
                            <Skill name={"JavaScript"} />
                            <Skill name={"React JS"} />
                            <Skill name={"Figma..."} />
                        </SkillTable>
                        <SkillTable className={python}>
                            <Skill name={"BeautifulSoup"} />
                            <Skill name={"Selenium"} />
                            <Skill name={"Flask"} />
                            <Skill name={"SqlLite"} />
                            <Skill name={"SqlAlchemy"} />
                            <Skill name={"Django"} />
                            <Skill name={"TelegramBot"} />
                        </SkillTable>
                        <SkillTable className={java}>
                            <Skill name={"Hibernate"} />
                            <Skill name={"SpringBoot"} />
                            <Skill name={"JUnit"} />
                            <Skill name={"JavaFX"} />
                            <Skill name={"TelegramBot"} />
                        </SkillTable>
                        <SkillTable className={devOps}>
                            <Skill name={"Linux bash"} />
                            <Skill name={"MacOS zsh"} />
                            <Skill name={"Docker..."} />
                        </SkillTable>
                        <SkillTable className={sql}>
                            <Skill name={"Script-writing"} />
                            <Skill name={"Postgre"} />
                            <Skill name={"Oracle sql"} />
                        </SkillTable>
                    </div>
                </div>
            </div>
        </Section>
    </div>
  );
}

export default App;











{/*    <div className={basic}>*/}
{/*        <div className={"skill"}>*/}
{/*            <p>Html</p>*/}
{/*        </div>*/}
{/*        <div className={"skill"}>*/}
{/*            <p>Css</p>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*    <div className={python}>*/}
{/*        <div className={"skill"}>*/}
{/*            <p>BeautifulSoup</p>*/}
{/*        </div>*/}
{/*        <div className={"skill"}>*/}
{/*            <p>Selenium</p>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*    <div className={java}>*/}
{/*        <div className={"skill"}>*/}
{/*            <p>Hibernate</p>*/}
{/*        </div>*/}
{/*        <div className={"skill"}>*/}
{/*            <p>SpringBoot</p>*/}
{/*        </div>*/}
{/*    </div>*/}