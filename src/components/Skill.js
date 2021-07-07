import "./Skill.css"

const Skill = (props) => {
    return(
        <div className={"skill"}>
            <p>{props.name}</p>
            {/*<p className={"skill-bar"}>{props.rate} / 10</p>*/}
        </div>
    )
}

export default Skill