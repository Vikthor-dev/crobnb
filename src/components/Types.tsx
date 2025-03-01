import HoteliIcon from "../assets/hoteli.svg";
import ArrowIcon from "../assets/arrow.svg";
import ApartmanIcon from "../assets/apartmani.svg";
import VilleIcon from "../assets/ville.svg";
import TuristIcon from "../assets/turist.svg";
import MobileIcon from "../assets/mobile.svg";
import "../css/Types.css"

function Types() {
  return (
    <div>
         <div className="main-2">
        <div className="main">
          <p className="tipovi-title">Turistička naselja</p>
          <div className="cube-row">
            <div className="cube">
              <img
                src={HoteliIcon}
                alt="Crobnb Icon"
                style={{ width: 56, height: 56 }}
              />
              <div className="cube-text">
                <p>Hoteli</p>
                <img
                  src={ArrowIcon}
                  alt="Crobnb Icon"
                  style={{ width: 24, height: 24 }}
                />
              </div>
            </div>

            <div className="cube">
              <img
                src={ApartmanIcon}
                alt="Crobnb Icon"
                style={{ width: 56, height: 56 }}
              />
              <div className="cube-text">
                <p>Apartmani</p>
                <img
                  src={ArrowIcon}
                  alt="Crobnb Icon"
                  style={{ width: 24, height: 24 }}
                />
              </div>
            </div>

            <div className="cube">
              <img
                src={VilleIcon}
                alt="Crobnb Icon"
                style={{ width: 56, height: 56 }}
              />
              <div className="cube-text">
                <p>Ville</p>
                <img
                  src={ArrowIcon}
                  alt="Crobnb Icon"
                  style={{ width: 24, height: 24 }}
                />
              </div>
            </div>

            <div className="cube">
              <img
                src={TuristIcon}
                alt="Crobnb Icon"
                style={{ width: 56, height: 56 }}
              />
              <div className="cube-text">
                <p>Turistička naselja</p>
                <img
                  src={ArrowIcon}
                  alt="Crobnb Icon"
                  style={{ width: 24, height: 24 }}
                />
              </div>
            </div>

            <div className="cube">
              <img
                src={MobileIcon}
                alt="Crobnb Icon"
                style={{ width: 56, height: 56 }}
              />
              <div className="cube-text">
                <p>Mobilne kućice</p>
                <img
                  src={ArrowIcon}
                  alt="Crobnb Icon"
                  style={{ width: 24, height: 24 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Types
