import "./Section.css";

const Section = (props) => {
  return (
    <div className={"section" + " " + props.className}>
      <fieldset className={"section-outline"}>
        <legend className={"section-legend"}>{props.name}</legend>
        {props.children}
      </fieldset>
    </div>
  );
};

export default Section;
