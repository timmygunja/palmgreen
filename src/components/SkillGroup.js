import "./SkillGroup.css"

const SkillGroup = (props) => {
    return(
        <div className={"skill-group"}>
            <p className={"skill-group-title"}>{props.title}</p>
            <div className={"skill-table"}>
                {props.children}
            </div>
        </div>
    )
}

export default SkillGroup