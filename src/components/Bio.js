import "./Bio.css";
import BioPng from "../ui/BioPng";
import { useEffect } from "react";

const Bio = (props) => {
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
      <BioPng />
      <div className="bio-about">
        <h3 className="bio-title">Junior Frontend Developer WannaBe</h3>
        <div className="bio-avatar">
          <img src={"../../face.jpeg"}></img>
        </div>

        <div className="bio-text">
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
              <div className="exam">
                <p className="exam-title">Maths</p>
                <p className="exam-score">80</p>
              </div>
              <div className="exam">
                <p className="exam-title">Russian</p>
                <p className="exam-score">96</p>
              </div>
              <div className="exam">
                <p className="exam-title">Computer Science</p>
                <p className="exam-score">83</p>
              </div>
              <div className="exam">
                <p className="exam-title">English</p>
                <p className="exam-score">83</p>
              </div>
            </div>
          </div>

          <div className="education-card exams">
            <div className="education-card-logo">
              <img src={"../../exams.png"}></img>
            </div>
            <div className="education-card-info">
              <div class="block">
                <div class="box">
                  <p class="number">
                    <span class="num">80</span>
                  </p>
                  <p class="title">Maths</p>
                </div>
                <svg viewBox="0 0 100 100" class="svg">
                  <foreignObject
                    class="logoBack"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <div
                      class="logoGradient"
                      xmlns="http://www.w3.org/1999/xhtml"
                    ></div>
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
              <div class="block">
                <div class="box">
                  <p class="number">
                    <span class="num">96</span>
                  </p>
                  <p class="title">Russian</p>
                </div>
                <span class="dots"></span>
                <svg viewBox="0 0 100 100" class="svg">
                  <foreignObject
                    class="logoBack"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <div
                      class="logoGradient"
                      xmlns="http://www.w3.org/1999/xhtml"
                    ></div>
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
              <div class="block">
                <div class="box">
                  <p class="number">
                    <span class="num">83</span>
                  </p>
                  <p class="title">Computer Science</p>
                </div>

                <svg viewBox="0 0 100 100" class="svg">
                  <foreignObject
                    class="logoBack"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <div
                      class="logoGradient"
                      xmlns="http://www.w3.org/1999/xhtml"
                    ></div>
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
              <div class="block">
                <div class="box">
                  <p class="number">
                    <span class="num">83</span>
                  </p>
                  <p class="title">Englsih</p>
                </div>

                <svg viewBox="0 0 100 100" class="svg">
                  <foreignObject
                    class="logoBack"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <div
                      class="logoGradient"
                      xmlns="http://www.w3.org/1999/xhtml"
                    ></div>
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
    </div>
  );
};

export default Bio;
