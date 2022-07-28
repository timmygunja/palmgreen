import "./ExamChart.css";

const ExamChart = (props) => {
  return (
    <div class="block">
      <div class="box">
        <p class="number">
          <span class="num">{props.mark}</span>
        </p>
        <p class="title">{props.name}</p>
      </div>
      <svg viewBox="0 0 100 100" class="svg">
        <foreignObject class="logoBack" x="0" y="0" width="100" height="100">
          <div class="logoGradient" xmlns="http://www.w3.org/1999/xhtml"></div>
        </foreignObject>

        <g class="logoBlend">
          <rect x="0" y="0" width="100%" height="100%" />
          <path
            class="logoBlendPath"
            d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92"
          />
        </g>
      </svg>
    </div>
  );
};

export default ExamChart;
