import "./Bio.css";
import BioPng from "../ui/BioPng";
import { useEffect } from "react";
import ExamChart from "./ExamChart";
import { useSelector } from "react-redux";

const Bio = (props) => {
  const {
    bioText,
    eduTitle,
    eduSchoolLevel,
    examLevel,
    examMaths,
    examCS,
    examEnglish,
    examRussian,
    eduSchoolTitle,
    eduSchoolYears,
    eduSchoolAchievement,
    eduUniLevel,
    eduUniTitle,
    eduUniYears,
    eduUniAchievement,
    eduMagLevel,
    eduMagTitle,
    eduMagYears,
  } = useSelector((state) => state.ui.currentText);
  const marks = [80, 83, 83, 96];

  const animateExams = (mode) => {
    const block = document.querySelectorAll(".block");
    let markCount = 0;
    block.forEach((item) => {
      let numElement = item.querySelector(".num");
      let num = marks[markCount];
      let time = 2000 / num;
      let count;

      let pathElement = item.querySelector(".logoBlendPath");

      if (mode === "forward" || mode === undefined) {
        count = 0;

        setInterval(() => {
          if (count == num) {
            clearInterval();
          } else {
            count += 1;
            numElement.innerText = count;
          }
        }, time);

        pathElement.style.strokeDashoffset = 430 - 360 * (num / 100);
      } else if (mode === "backward") {
        count = num;

        setInterval(() => {
          if (count == 0) {
            clearInterval();
          } else {
            count -= 1;
            numElement.innerText = count;
          }
        }, time);

        pathElement.style.strokeDashoffset = 360;
      }

      markCount += 1;
    });
  };

  const playAnim = () => {
    animateExams("backward");
    setTimeout(animateExams, 2300);
  };

  useEffect(() => {
    animateExams();
  });

  return (
    <div className={"bio"}>
      <div className="bio-about">
        {/* <h3 className="bio-title">Junior Frontend Developer</h3> */}
        <div className="bio-title">Dev</div>
        <div className="hard-centered">
          <div className="bio-avatar hard-centered">
            <img src={"../../face.jpeg"}></img>
          </div>
        </div>
        <div className="bio-text">{bioText}</div>
      </div>

      {/* <BioPng /> */}

      <div className="bio-education">
        <div className="bio-education-title" ref={props.refMyself}>
          {eduTitle}
        </div>

        <a
          className="education-card"
          href="https://almamater13.ru"
          target="_blank"
        >
          <div className="education-card-prev hard-centered">
            <div>
              <div className="education-card-logo">
                <img src={"../../school.png"}></img>
              </div>
              <p>{eduSchoolLevel}</p>
            </div>
          </div>
          <div className="centered-vertically">
            <div className="education-card-info">
              <p className="bio-education-place">{eduSchoolTitle}</p>
              <p className="bio-education-years">{eduSchoolYears}</p>
              <div className="bio-education-achievements">
                <p>{eduSchoolAchievement}</p>
              </div>
            </div>
          </div>
        </a>

        <div className="education-card exams" onClick={playAnim}>
          <div className="education-card-prev hard-centered">
            <div>
              <div className="education-card-logo">
                <img src={"../../exams.png"}></img>
              </div>
              <p>{examLevel}</p>
            </div>
          </div>
          {/* <div className="centered-vertically"> */}
          <div className="education-card-info">
            <ExamChart name={examMaths} mark={marks[0]} />
            <ExamChart name={examCS} mark={marks[1]} />
            <ExamChart name={examEnglish} mark={marks[2]} />
            <ExamChart name={examRussian} mark={marks[3]} />
          </div>
          {/* </div> */}
        </div>

        <a
          className="education-card"
          href="http://www.fa.ru/Pages/Home.aspx"
          target="_blank"
        >
          <div className="education-card-prev hard-centered">
            <div>
              <div className="education-card-logo">
                <img src={"../../univer.png"}></img>
              </div>
              <p>{eduUniLevel}</p>
            </div>
          </div>
          <div className="centered-vertically">
            <div className="education-card-info">
              <p className="bio-education-place">{eduUniTitle}</p>
              <p className="bio-education-years">{eduUniYears}</p>
              <ul className="bio-education-achievements">
                <p>{eduUniAchievement}</p>
              </ul>
            </div>
          </div>
        </a>

        <div className="education-card">
          <div className="education-card-prev hard-centered">
            <div>
              <div className="education-card-logo">
                <img src={"../../mag.png"}></img>
              </div>
              <p>{eduMagLevel}</p>
            </div>
          </div>
          <div className="centered-vertically">
            <div className="education-card-info">
              <p className="bio-education-place">{eduMagTitle}</p>
              <p className="bio-education-years">{eduMagYears}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
