import { useSelector } from "react-redux";
import NeonButton from "../elements/NeonButton";
import "./Footer.css";

const Footer = (props) => {
  const telegramLink = "https://t.me/timmygunja";
  const vkLink = "https://vk.com/timmygunja";
  const instaLink = "https://instagram.com/timmygunja_";
  const githubLink = "https://github.com/timmygunja";

  const redirectToTg = () => {
    window.location.assign(telegramLink);
  };

  const redirectToVk = () => {
    // window.location.assign(vkLink);
  };

  const redirectToInsta = () => {
    // window.location.assign(instaLink);
  };

  return (
    <div className="footer">
      <div className="footer-content hard-centered">
        <NeonButton href={githubLink}>GitHub</NeonButton>
      </div>
      <div className="footer-links hard-centered">
        <div className="social-test">
          <div className="hard-centered" onClick={redirectToTg}>
            <i className="fa fa-telegram" aria-hidden="true"></i>
          </div>
          <div className="hard-centered" onClick={redirectToVk}>
            <i className="fa fa-vk" aria-hidden="true"></i>
          </div>
          <div className="hard-centered" onClick={redirectToInsta}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
