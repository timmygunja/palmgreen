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
          ref={props.refMyself}
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
            stars={17}
            link={"https://github.com/timmygunja/mern-learn-frontend"}
          />
          <Skill
            name={"CSS"}
            stars={15}
            link={"https://github.com/timmygunja/mern-learn-frontend"}
          />
          <Skill
            name={"JavaScript"}
            stars={16}
            link={"https://github.com/timmygunja/mern-learn-frontend"}
          />
          <Skill
            name={"React"}
            stars={18}
            link={"https://github.com/timmygunja/mern-learn-frontend"}
          />
          <Skill
            name={"NodeJS"}
            stars={13}
            link={"https://github.com/timmygunja/mern-learn-backend"}
          />
          <Skill
            name={"Express"}
            stars={13}
            link={"https://github.com/timmygunja/mern-learn-backend"}
          />
          <Skill name={"SCSS"} stars={10} />
          <Skill name={"Figma"} stars={10} />
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
            name={"Django"}
            stars={13}
            link={"https://github.com/timmygunja/Webshop_django"}
          />
          <Skill
            name={"Telegram API"}
            stars={16}
            link={"https://github.com/timmygunja/kbsu_schedule_bot"}
          />
          <Skill name={"VK API"} stars={12} />
          <Skill name={"Numpy"} stars={14} />
          <Skill name={"Pandas"} stars={16} />
          <Skill name={"PyTorch"} stars={10} />
        </SkillTable>
        <SkillTable className={java}>
          <Skill
            name={"Hibernate"}
            stars={12}
            link={"https://github.com/timmygunja/FinUniverHomework-2-3-Spring"}
          />
          <Skill
            name={"SpringBoot"}
            stars={12}
            link={"https://github.com/timmygunja/FinUniverHomework-2-3-Spring"}
          />
          <Skill
            name={"JUnit"}
            stars={8}
            link={"https://github.com/timmygunja/FinUniverHomework-2-3-Spring"}
          />
          <Skill
            name={"JavaFX"}
            stars={14}
            link={"https://github.com/timmygunja/FinUniverHomework-2-3-JavaFX"}
          />
          <Skill
            name={"Telegram API"}
            stars={16}
            link={"https://github.com/timmygunja/WeatherTelegramBot"}
          />
        </SkillTable>
        <SkillTable className={devOps}>
          <Skill name={"Linux bash"} stars={16} />
          <Skill name={"MacOS zsh"} stars={14} />
          <Skill name={"Windows cmd"} stars={12} />
          <Skill
            name={"Git"}
            stars={16}
            link={"https://github.com/timmygunja"}
          />
          <Skill name={"Jira"} stars={12} />
          <Skill name={"Confluence"} stars={12} />
          <Skill name={"Slack"} stars={12} />
          <Skill name={"Docker"} stars={10} />
        </SkillTable>
        <SkillTable className={sql}>
          <Skill name={"Script-writing"} stars={14} />
          <Skill
            name={"SQLite"}
            stars={14}
            link={"https://github.com/timmygunja/Webshop_django"}
          />
          <Skill name={"Postgre"} stars={12} />
          <Skill name={"Oracle"} stars={14} />
          <Skill
            name={"SqlAlchemy"}
            stars={12}
            link={"https://github.com/timmygunja/Webshop_django"}
          />
          <Skill
            name={"MongoDB"}
            stars={14}
            link={"https://github.com/timmygunja/mern-learn-backend"}
          />
        </SkillTable>
      </div>
    </div>
  );
};

export default SkillList;
