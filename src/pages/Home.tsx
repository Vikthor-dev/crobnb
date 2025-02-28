import "../css/Home.css";
import Hero from "../assets/Hero.jpeg";
import Location from "../components/Location";
import Accomodation from "../components/Accomodation";
import Date from "../components/Date";
import Guests from "../components/Guests";

function Home() {
  return (
    <div>
      <div className="hero">
        <img
          src={Hero}
          alt="Hotel"
          style={{ height: "622px", width: "100%" }}
        />
        <div className="hero-text-div">
          <h1 className="hero-text-title">
            Otkrijte najbolje smještaje diljem Hrvatske
          </h1>
          <p className="hero-text-p">
            Odaberite između luksuznih vila, hotela, apartmana, mobilnih kućica
            ili turističkih naselja i osigurajte svoj savršeni odmor po mjeri
          </p>
        </div>
        <div className="search">
          <div className="lokacija">
            <p>Lokacija</p>
            <Location/>
          </div>

          <div className="smjestaj">
            <p>Tip smještaja</p>
            <Accomodation/>
          </div>

          <div className="datum">
            <p>Datum prijave / odjave</p>
            <Date/>
          </div>

          <div className="gosti">
            <p>Broj gostiju</p>
            <Guests/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
