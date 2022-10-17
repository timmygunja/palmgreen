import { useSelector } from "react-redux";
import NeonButton from "../elements/NeonButton";
import "./Footer.css";

const Footer = (props) => {
  const { gitLink } = useSelector((state) => state.ui.currentText);

  const telegramLink = "https://t.me/timmygunjaa";
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
        <NeonButton href={githubLink}>{gitLink}</NeonButton>
      </div>
      <div className="footer-links hard-centered">
        <div className="social-test">
          <div onClick={redirectToTg}>
            <i className="fa fa-telegram" aria-hidden="true"></i>
          </div>
          <div onClick={redirectToVk}>
            <i className="fa fa-vk" aria-hidden="true"></i>
          </div>
          <div onClick={redirectToInsta}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
