import Face from "../assets/facebook.svg";
import Twitt from "../assets/twitter.svg";
import Insta from "../assets/instagram.svg";
import ScrollTop from "../assets/scrolltop.svg";
import Lloyds from "../assets/lloyds.svg";
import "../css/Footer.css";

function Footer() {
  const scrollTop = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="columns">
        <div className="column-button-mobile">
          <img
            onClick={scrollTop}
            src={ScrollTop}
            style={{ height: 48, width: 48 }}
          />
        </div>
        <div className="column">
          <p className="c-title">Crobnb.hr</p>
          <p className="c-text">info@crobnb.hr</p>
          <p className="c-text">01 2377 654</p>
        </div>

        <div className="column">
          <p className="c-title">Tipovi smještaja</p>
          <p className="c-text">Hoteli</p>
          <p className="c-text">Apartmani</p>
          <p className="c-text">Mobilne kućice</p>
          <p className="c-text">Ville</p>
          <p className="c-text">Turistička naselja</p>
          <p className="c-text">Skijališta</p>
        </div>

        <div className="column">
          <p className="c-title">Regije</p>
          <p className="c-text">Istočna Hrvatska</p>
          <p className="c-text">Središnja Hrvatska</p>
          <p className="c-text">Gorska Hrvatska</p>
          <p className="c-text">Sjeverna Dalmacija</p>
          <p className="c-text">Središnja Dalmacija</p>
          <p className="c-text">Južna Dalmacija</p>
          <p className="c-text">Istra i Kvarner</p>
        </div>

        <div className="column">
          <p className="c-title">Prati nas</p>
          <div className="ikone">
            <img className="face" src={Face} style={{ height: 24, width: 24 }} />
            <img className="twitt" src={Twitt} style={{ height: 24, width: 24 }} />
            <img className="insta" src={Insta} style={{ height: 24, width: 24 }} />
          </div>
        </div>

        <div onClick={scrollTop} className="column-button">
          <img src={ScrollTop} style={{ height: 48, width: 48 }} />
        </div>
      </div>
      <div className="footer-div">
        <p>© Crobnb 2023. All rights reserved</p>
        <img src={Lloyds} style={{ height: 40, width: 40 }} />
      </div>
    </div>
  );
}

export default Footer;
