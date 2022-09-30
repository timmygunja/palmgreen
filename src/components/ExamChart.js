import "./ExamChart.css";

const ExamChart = (props) => {
  return (
    <div className="block">
      <div className="box">
        <p className="number">
          <span className="num">{props.mark}</span>
        </p>
        <p className="title">{props.name}</p>
      </div>
      <svg viewBox="0 0 100 100" className="svg">
        <foreignObject
          className="logoBack"
          x="0"
          y="0"
          width="100"
          height="100"
        >
          <div
            className="logoGradient"
            xmlns="http://www.w3.org/1999/xhtml"
          ></div>
        </foreignObject>

        <g className="logoBlend">
          <rect x="0" y="0" width="100%" height="100%" />
          <path
            className="logoBlendPath"
            d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92"
          />
        </g>
      </svg>
    </div>
  );
};

export default ExamChart;
