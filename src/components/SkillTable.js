import "./SkillTable.css"

const SkillTable = (props) => {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default SkillTable