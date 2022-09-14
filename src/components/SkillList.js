import { useState } from "react";
import "./SkillList.css";
import SkillTable from "./SkillTable";
import Skill from "./Skill";

const SkillList = (props) => {
  const [web, setWeb] = useState("table-active");
  const [python, setPython] = useState("table");
  const [java, setJava] = useState("table");
  const [devOps, setDevOps] = useState("table");
  const [sql, setSql] = useState("table");

  const hideSkillTable = () => {
    setWeb("table");
    setPython("table");
    setJava("table");
    setDevOps("table");
    setSql("table");
  };

  return (
    <div className={"skill-list"}>
      <div className={"skill-titles"}>
        <h3
          id={"web"}
          onClick={() => {
            hideSkillTable();
            setWeb("table-active");
          }}
        >
          Web
        </h3>
        <h3
          id={"python"}
          onClick={() => {
            hideSkillTable();
            setPython("table-active");
          }}
        >
          Python
        </h3>
        <h3
          id={"java"}
          onClick={() => {
            hideSkillTable();
            setJava("table-active");
          }}
        >
          Java
        </h3>
        <h3
          id={"devOps"}
          onClick={() => {
            hideSkillTable();
            setDevOps("table-active");
          }}
        >
          DevOps
        </h3>
        <h3
          id={"sql"}
          onClick={() => {
            hideSkillTable();
            setSql("table-active");
          }}
        >
          SQL
        </h3>
      </div>
      <div className="skill-tables">
        <SkillTable className={web}>
          <Skill
            name={"HTML"}
            stars={15}
            link={"https://github.com/timmygunja/mern-learn-frontend"}
          />
          <Skill
            name={"CSS"}
            stars={13}
            link={"https://github.com/timmygunja/mern-learn-frontend"}
          />
          <Skill
            name={"JavaScript"}
            stars={15}
            link={"https://github.com/timmygunja/mern-learn-frontend"}
          />
          <Skill
            name={"React JS"}
            stars={16}
            link={"https://github.com/timmygunja/mern-learn-frontend"}
          />
          <Skill name={"Figma..."} stars={6} />
        </SkillTable>
        <SkillTable className={python}>
          <Skill
            name={"BeautifulSoup"}
            stars={13}
            link={"https://github.com/timmygunja/cinema_parser_telegram_bot"}
          />
          <Skill
            name={"Selenium"}
            stars={12}
            link={"https://github.com/timmygunja/news_info_parser_bot"}
          />
          <Skill
            name={"Flask"}
            stars={10}
            link={"https://github.com/timmygunja/Webshop_flask"}
          />
          <Skill
            name={"Sqlite3"}
            stars={12}
            link={"https://github.com/timmygunja/Webshop_django"}
          />
          <Skill
            name={"SqlAlchemy"}
            stars={12}
            link={"https://github.com/timmygunja/Webshop_django"}
          />
          <Skill
            name={"Django"}
            stars={13}
            link={"https://github.com/timmygunja/Webshop_django"}
          />
          <Skill
            name={"TelegramBot"}
            stars={16}
            link={"https://github.com/timmygunja/kbsu_schedule_bot"}
          />
        </SkillTable>
        <SkillTable className={java}>
          <Skill
            name={"Hibernate"}
            stars={10}
            link={"https://github.com/timmygunja/FinUniverHomework-2-3-Spring"}
          />
          <Skill
            name={"SpringBoot"}
            stars={10}
            link={"https://github.com/timmygunja/FinUniverHomework-2-3-Spring"}
          />
          <Skill
            name={"JUnit"}
            stars={6}
            link={"https://github.com/timmygunja/FinUniverHomework-2-3-Spring"}
          />
          <Skill
            name={"JavaFX"}
            stars={12}
            link={"https://github.com/timmygunja/FinUniverHomework-2-3-JavaFX"}
          />
          <Skill
            name={"TelegramBot"}
            stars={15}
            link={"https://github.com/timmygunja/WeatherTelegramBot"}
          />
        </SkillTable>
        <SkillTable className={devOps}>
          <Skill name={"Linux bash"} stars={15} />
          <Skill name={"MacOS zsh"} stars={12} />
          <Skill name={"Docker..."} stars={3} />
        </SkillTable>
        <SkillTable className={sql}>
          <Skill name={"Script-writing"} stars={11} />
          <Skill name={"Postgre"} stars={7} />
          <Skill name={"Oracle sql"} stars={11} />
        </SkillTable>
      </div>
    </div>
  );
};

export default SkillList;
