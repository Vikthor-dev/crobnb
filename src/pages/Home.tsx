import "../css/Home.css";
import Hero from "../assets/Hero.jpeg";
import Search from "../components/Search";
import Types from "../components/Types";
import Regije from "../components/Regije";
import RegijeMobile from "../components/RegijeMobile";

function Home() {
  return (
    <div className="master">
      <div className="hero">
        <div className="image">
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
              Odaberite između luksuznih vila, hotela, apartmana, mobilnih
              kućica ili turističkih naselja i osigurajte svoj savršeni odmor po
              mjeri
            </p>
          </div>
        </div>
        <div className="search-div">
          <Search />
        </div>
      </div>
      <Types />
      <Regije/>
      <RegijeMobile/>
    </div>
  );
}
export default Home;
