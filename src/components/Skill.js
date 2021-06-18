import "./Skill.css"

const Skill = (props) => {
    return(
        <div className={"skill"}>
            <p>{props.name}</p>
            {/*<p className={"skill-bar"}>yoy</p>*/}
        </div>
    )
}

export default Skill