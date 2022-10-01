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
    eduUniLevel,
    eduUniTitle,
    eduUniYears,
    eduMagLevel,
    eduMagTitle,
    eduMagYears,
  } = useSelector((state) => state.ui.currentText);

  useEffect(() => {
    const block = document.querySelectorAll(".block");
    block.forEach((item) => {
      let numElement = item.querySelector(".num");
      let num = parseInt(numElement.innerText);
      let count = 0;
      let time = 2000 / num;

      let pathElement = item.querySelector(".logoBlendPath");

      setInterval(() => {
        if (count == num) {
          clearInterval();
        } else {
          count += 1;
          numElement.innerText = count;
        }
      }, time);

      pathElement.style.strokeDashoffset = 430 - 360 * (num / 100);
    });
  });

  return (
    <div className={"bio"}>
      {/* <BioPng /> */}
      <div className="bio-about">
        {/* <h3 className="bio-title">Junior Frontend Developer</h3> */}
        <div className="bio-avatar">
          <img src={"../../face.jpeg"}></img>
        </div>

        <div className="bio-text">{bioText}</div>
      </div>
      <div className="bio-education">
        <div className="bio-education-title">{eduTitle}</div>

        <div className="education-card">
          <div className="education-card-prev hard-centered">
            <div>
              <div className="education-card-logo">
                <img src={"../../school.png"}></img>
              </div>
              <p>{eduSchoolLevel}</p>
            </div>
          </div>
          <div className="education-card-info">
            <p className="bio-education-place">{eduSchoolTitle}</p>
            <p className="bio-education-years">{eduSchoolYears}</p>
            <ul className="bio-education-achievements">
              <p>Gold medal lol</p>
              <p>sport spirt</p>
            </ul>
          </div>
        </div>

        <div className="education-card exams">
          <div className="education-card-prev hard-centered">
            <div>
              <div className="education-card-logo">
                <img src={"../../exams.png"}></img>
              </div>
              <p>{examLevel}</p>
            </div>
          </div>
          <div className="education-card-info">
            <ExamChart name={examMaths} mark="80" />
            <ExamChart name={examCS} mark="83" />
            <ExamChart name={examEnglish} mark="83" />
            <ExamChart name={examRussian} mark="96" />
          </div>
        </div>

        <div className="education-card">
          <div className="education-card-prev hard-centered">
            <div>
              <div className="education-card-logo">
                <img src={"../../univer.png"}></img>
              </div>
              <p>{eduUniLevel}</p>
            </div>
          </div>
          <div className="education-card-info">
            <p className="bio-education-place">{eduUniTitle}</p>
            <p className="bio-education-years">{eduUniYears}</p>
            <ul className="bio-education-achievements">
              <p>Exam mark on average: 4,5 / 5</p>
            </ul>
          </div>
        </div>

        <div className="education-card">
          <div className="education-card-prev hard-centered">
            <div>
              <div className="education-card-logo">
                <img src={"../../mag.png"}></img>
              </div>
              <p>{eduMagLevel}</p>
            </div>
          </div>
          <div className="education-card-info">
            <p className="bio-education-place">{eduMagTitle}</p>
            <p className="bio-education-years">{eduMagYears}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
