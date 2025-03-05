import Footer from "../components/Footer";
import "../css/Tipovi.css";
import ArrowIcon from "../assets/arrow.svg";
import PlaceCard from "../components/PlaceCard";

function Tipovi() {
  return (
    <div className="tipovi-smjestaja">
      <div className="tipovi-smjestaja-naslov">
        <p>Tipovi smještaja</p>
      </div>
      <div className="hoteli">
        <div className="hoteli-div">
          <p className="hoteli-title">Hoteli</p>
          <p className="hoteli-text">
            Hotelski smještaj idealan je odabir za sve koji žele što je
            bezbrižnije moguće provesti odmor.U našoj ponudi pronaći ćete više
            stotine hotela raznih kategorija i tema na lokacijama na Jadranu -
            od sjevera Istre sve do juga Dalmacije, te na otocima.
          </p>
          <div className="hoteli-link">
            <p>Istraži hotele</p>
            <img
              className="arrow-icon-link"
              src={ArrowIcon}
              style={{ width: 24, height: 24 }}
              alt="Arrow Icon"
            />
          </div>
        </div>

        <div className="hoteli-div-cards">
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Tipovi;
