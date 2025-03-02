import "../css/RegijeMobile.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import EastCro from "../assets/regions/east.svg";
import MidCro from "../assets/regions/mid.svg";
import Gorska from "../assets/regions/gorska.svg";
import Istra from "../assets/regions/istra.svg";
import SjDal from "../assets/regions/northda.svg";
import SrDal from "../assets/regions/midda.svg";
import JuDal from "../assets/regions/southda.svg";

function RegijeMobile() {
  return (
    <div className="regije-mobile">
      <p className="regije-mobile-text">Regije</p>
      <Carousel
        width={328}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        <div>
          <img className="mobile-regije-img" src={EastCro} />
        </div>
        <div>
          <img className="mobile-regije-img" src={MidCro} />
        </div>
        <div>
          <img className="mobile-regije-img" src={Gorska} />
        </div>
        <div>
          <img className="mobile-regije-img" src={Istra} />
        </div>
        <div>
          <img className="mobile-regije-img" src={SjDal} />
        </div>
        <div>
          <img className="mobile-regije-img" src={SrDal} />
        </div>
        <div>
          <img className="mobile-regije-img" src={JuDal} />
        </div>
      </Carousel>
    </div>
  );
}

export default RegijeMobile;
