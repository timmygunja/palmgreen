import "./Skill.css";

const Skill = (props) => {
  const skillPoints = [];

  for (let i = 0; i < 10; i++) {
    skillPoints[i] = <div className="skill-point-disabled"></div>;
  }

  for (let i = 0; i < props.stars; i++) {
    skillPoints[i] = <div className="skill-point"></div>;
  }

  return (
    <a className={"skill"} href={props.link}>
      <p className={"skill-name"}>{props.name}</p>
      <div className={"skill-bar"}>
        {skillPoints.map((item) => {
          return item;
        })}
      </div>
    </a>
  );
};

export default Skill;
