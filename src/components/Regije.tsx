import EastCro from "../assets/regions/east.svg";
import MidCro from "../assets/regions/mid.svg";
import Gorska from "../assets/regions/gorska.svg";
import Istra from "../assets/regions/istra.svg";
import SjDal from "../assets/regions/northda.svg";
import SrDal from "../assets/regions/midda.svg";
import JuDal from "../assets/regions/southda.svg";
import "../css/Regije.css"

function Regije() {
  return (
    <div>
      <div className="regije">
        <p className="regije-title">Regije</p>
        <div className="regije-rows">
          <img src={EastCro} className="regija-img" alt="Istočna hrvatska" />
          <img src={MidCro} className="regija-img" alt="Središnja hrvatska" />
          <img src={Gorska} className="regija-img" alt="Gorska hrvatska" />
          <img src={Istra} className="regija-img" alt="Istra i Kvarner" />
          <img src={SjDal} className="regija-img" alt="Sjeverna Dalmacija" />
          <img src={SrDal} className="regija-img" alt="Srednja Dalmacija" />
          <img src={JuDal} className="regija-img" alt="Južna Dalmacija" />
        </div>
      </div>
    </div>
  );
}

export default Regije;
