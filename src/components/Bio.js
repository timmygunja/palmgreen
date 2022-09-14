import "./Bio.css";
import BioPng from "../ui/BioPng";
import { useEffect } from "react";
import ExamChart from "./ExamChart";
import { useSelector } from "react-redux";

const Bio = (props) => {
  const bioText = useSelector((state) => state.ui.currentText.bio);
  // const language = useSelector((state) => state.ui.language);
  // const bioText = language === "english" ? useSelector((state) => state.ui.language);

  // if (language === "english") {
  //   bioText = useSelector((state) => state.ui.engText.bio);
  // } else {
  //   bioText = useSelector((state) => state.ui.ruText.bio);
  // }

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
        {/* <h3 className="bio-title">Junior Frontend Developer WannaBe</h3> */}
        <div className="bio-avatar">
          <img src={"../../face.jpeg"}></img>
        </div>

        {/* <div className="bio-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </div> */}

        <div className="bio-text">{bioText}</div>
        {/* <div className="bio-text">{props.textSource.bio}</div> */}
      </div>
      <div className="bio-education">
        <div className="bio-education-title">Education</div>
        <div className="education-card">
          <div className="education-card-logo">
            <img src={"../../school.png"}></img>
          </div>
          <div className="education-card-info">
            <p className="bio-education-place">
              School #13, Nalchik bla bla bla
            </p>
            <p className="bio-education-years">2008 - 2019</p>
            <ul className="bio-education-achievements">
              <p>Gold medal lol</p>
              <p>sport spirt</p>
            </ul>
          </div>
        </div>

        <div className="education-card exams">
          <div className="education-card-logo">
            <img src={"../../exams.png"}></img>
          </div>
          <div className="education-card-info">
            <ExamChart name="Maths" mark="80" />
            <ExamChart name="Computer Science" mark="83" />
            <ExamChart name="English" mark="83" />
            <ExamChart name="Russian" mark="96" />
          </div>
        </div>

        <div className="education-card">
          <div className="education-card-logo">
            <img src={"../../univer.png"}></img>
          </div>
          <div className="education-card-info">
            <p className="bio-education-place">Finashka vot eto vot</p>
            <p className="bio-education-years">2019 - 2023</p>
            <ul className="bio-education-achievements">
              <p>Exam mark on average: 4,5 / 5</p>
            </ul>
          </div>
        </div>

        <div className="education-card">
          <div className="education-card-logo">
            <img src={"../../mag.png"}></img>
          </div>
          <div className="education-card-info">
            <p className="bio-education-place">
              Future magistratura adre modre
            </p>
            <p className="bio-education-years">2023 - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
