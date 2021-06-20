import { useState } from "react";
import "./SkillList.css"
import SkillTable from "./SkillTable";
import Skill from "./Skill";

const SkillList = (props) => {
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

    return(
        <div className={"skill-list"}>
            <div className={"skill-titles"}>
                <h3 id={"web"} onClick={() => { hideSkillTable(); setWeb("table-active") }}>Web</h3>
                <h3 id={"python"} onClick={() => { hideSkillTable(); setPython("table-active") }}>Python</h3>
                <h3 id={"java"} onClick={() => { hideSkillTable(); setJava("table-active") }}>Java</h3>
                <h3 id={"devOps"} onClick={() => { hideSkillTable(); setDevOps("table-active") }}>DevOps</h3>
                <h3 id={"sql"} onClick={() => { hideSkillTable(); setSql("table-active") }}>Sql</h3>
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
                    <Skill name={"Sqlite3"} />
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
    )
}

export default SkillList