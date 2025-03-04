import AboutImg from "../assets/about.svg";
import "../css/About.css";

function About() {
  return (
    <div className="about">
      <p className="about-title">O nama</p>
      <div className="about-text">
        <div className="paragrafi">
          <div className="p1">
            Crobnb je platforma za iznajmljivanje smještaja koja omogućava
            putnicima da brzo i jednostavno pronađu savršeni smještaj za svoj
            sljedeći put. Uz širok apartmana, vila i hotela diljem Hrvatske,
            naša platforma nudi putnicima mogućnost da pronađu idealan smještaj
            za svoje potrebe i proračun.
          </div>
          <div className="p2">
            Korisničko iskustvo je naš prioritet, stoga smo dizajnirali
            platformu koja je jednostavna za upotrebu i koja nudi detaljne
            informacije o smještaju, uključujući slike, informacije o lokaciji,
            cijene i dostupnost.
          </div>
          <div className="p3">
            Naš cilj je omogućiti putnicima da jednostavno i brzo pronađu
            smještaj po svojoj mjeri te da se osjećaju sigurno i pouzdano
            prilikom rezerviranja smještaja putem naše platforme.
          </div>
        </div>
        <img
          className="about-img"
          src={AboutImg}
          style={{ width: 425, height: 321 }}
          alt="O nama"
        />
        <img
          className="about-img-mobile"
          src={AboutImg}
          style={{ width: 328, height: 228 }}
          alt="O nama"
        />
      </div>
    </div>
  );
}

export default About;
