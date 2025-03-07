import Footer from "../components/Footer";
import "../css/Tipovi.css";
import ArrowIcon from "../assets/arrow.svg";
import PlaceCard from "../components/PlaceCard";
import PlaceCarousel from "../components/PlaceCarousel";
import { useState, useEffect } from "react";
import axios from "axios";

function Tipovi() {
  interface Tip {
    title: string;
    text: string;
  }

  interface Smjestaji {
    image: string;
    city: string;
    rating: number;
    name: string;
    price: number;
    tecaj:number;
  }

  const [tipovi, setTipovi] = useState<Tip[]>([]);

  const [hoteli, setHoteli] = useState<Smjestaji[]>([]);

  const [apartmani, setApartmani] = useState<Smjestaji[]>([]);

  const [ville, setVille] = useState<Smjestaji[]>([]);

  const [turistplace, setTuristPlace] = useState<Smjestaji[]>([]);

  const [mobile, setMobile] = useState<Smjestaji[]>([]);

  const [hrk, setHrk] = useState(0);

  async function fetchDataTipovi() {
    try {
      const response = await axios.get("http://localhost:8055/items/tipovi");
      setTipovi(response.data.data);
      console.log("Tipovi:", response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchHotels() {
    try {
      const response = await axios.get(
        "http://localhost:8055/items/smjestaji",
        {
          params: {
            limit: 3,
            filter: {
              category: {
                _eq: "hoteli",
              },
            },
          },
        }
      );
      console.log("Hoteli:", response.data.data);
      let hoteli = response.data.data;

      setHoteli(hoteli);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchApartments() {
    try {
      const response = await axios.get(
        "http://localhost:8055/items/smjestaji",
        {
          params: {
            limit: 3,
            filter: {
              category: {
                _eq: "apartmani",
              },
            },
          },
        }
      );
      console.log("Apartmani:", response.data.data);
      let apartmani = response.data.data;

      setApartmani(apartmani);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchVille() {
    try {
      const response = await axios.get(
        "http://localhost:8055/items/smjestaji",
        {
          params: {
            limit: 3,
            filter: {
              category: {
                _eq: "ville",
              },
            },
          },
        }
      );
      console.log("Ville:", response.data.data);
      let ville = response.data.data;

      setVille(ville);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchTuristPlace() {
    try {
      const response = await axios.get(
        "http://localhost:8055/items/smjestaji",
        {
          params: {
            limit: 3,
            filter: {
              category: {
                _eq: "turisticka_naselja",
              },
            },
          },
        }
      );
      console.log("Turisticka naselja:", response.data.data);
      let turistplace = response.data.data;

      setTuristPlace(turistplace);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchMobile() {
    try {
      const response = await axios.get(
        "http://localhost:8055/items/smjestaji",
        {
          params: {
            limit: 3,
            filter: {
              category: {
                _eq: "mobilne_kucice",
              },
            },
          },
        }
      );
      console.log("Mobilne kucice:", response.data.data);
      let mobile = response.data.data;

      setMobile(mobile);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function converter() {
    try {
      const response = await axios.get(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
      );
      const tecaj = response.data.eur.hrk;
      console.log("Test:", tecaj);
      setHrk(tecaj); // Set the exchange rate in state
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  }

  useEffect(() => {
    fetchDataTipovi();
    fetchHotels();
    fetchApartments();
    fetchVille();
    fetchTuristPlace();
    fetchMobile();
    converter();
  }, []);

  return (
    <div className="tipovi-smjestaja">
      {tipovi.length > 0 && (
        <>
          <div className="tipovi-all">
            <div className="tipovi-smjestaja-naslov">
              <p>Tipovi smještaja</p>
            </div>
            <div className="tipovi">
              <div className="tipovi-div">
                <p className="tipovi-title">{tipovi[0].title}</p>
                <p className="tipovi-text">{tipovi[0].text}</p>
                <div className="tipovi-link">
                  <p>Istraži hotele</p>
                  <img
                    className="arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>

              {hoteli.map((hotel, index) => (
                <div className="tipovi-div-cards" key={index}>
                  <PlaceCard
                    image={hotel.image}
                    city={hotel.city}
                    name={hotel.name}
                    rating={hotel.rating}
                    price={hotel.price}
                    tecaj = {hrk}
                  />
                </div>
              ))}

              <div className="place-carousel">
                <PlaceCarousel smjestaji={hoteli} />
              </div>
            </div>
          </div>

          <div className="apartmani-desktop">
            <div className="tipovi-all">
              <div className="tipovi">
                {apartmani.map((apartman, index) => (
                  <div className="tipovi-div-cards" key={index}>
                    <PlaceCard
                      image={apartman.image}
                      city={apartman.city}
                      name={apartman.name}
                      rating={apartman.rating}
                      price={apartman.price}
                      tecaj = {hrk}
                    />
                  </div>
                ))}

                <div className="place-carousel">
                  <PlaceCarousel smjestaji={apartmani} />
                </div>
                <div className="tipovi-div">
                  <p className="tipovi-title">{tipovi[1].title}</p>
                  <p className="tipovi-text">{tipovi[1].text}</p>
                  <div className="tipovi-link">
                    <p>Istraži apartmane</p>
                    <img
                      className="arrow-icon-link"
                      src={ArrowIcon}
                      style={{ width: 24, height: 24 }}
                      alt="Arrow Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="apartmani-mobile">
            <div className="tipovi-all">
              <div className="tipovi">
                <div className="tipovi-div">
                  <p className="tipovi-title">{tipovi[1].title}</p>
                  <p className="tipovi-text">{tipovi[1].text}</p>
                  <div className="tipovi-link">
                    <p>Istraži apartmane</p>
                    <img
                      className="arrow-icon-link"
                      src={ArrowIcon}
                      style={{ width: 24, height: 24 }}
                      alt="Arrow Icon"
                    />
                  </div>
                </div>

                <div className="place-carousel">
                  <PlaceCarousel smjestaji={apartmani} />
                </div>
              </div>
            </div>
          </div>

          <div className="tipovi-all">
            <div className="tipovi">
              <div className="tipovi-div">
                <p className="tipovi-title">{tipovi[2].title}</p>
                <p className="tipovi-text">{tipovi[2].text}</p>
                <div className="tipovi-link">
                  <p>Istraži ville</p>
                  <img
                    className="arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              {ville.map((villa, index) => (
                <div className="tipovi-div-cards" key={index}>
                  <PlaceCard
                    image={villa.image}
                    city={villa.city}
                    name={villa.name}
                    rating={villa.rating}
                    price={villa.price}
                    tecaj = {hrk}
                  />
                </div>
              ))}

              <div className="place-carousel">
                <PlaceCarousel smjestaji={ville} />
              </div>
            </div>
          </div>

          <div className="turist-place-desktop">
            <div className="tipovi-all">
              <div className="tipovi">
                {turistplace.map((place, index) => (
                  <div className="tipovi-div-cards" key={index}>
                    <PlaceCard
                      image={place.image}
                      city={place.city}
                      name={place.name}
                      rating={place.rating}
                      price={place.price}
                      tecaj = {hrk}
                    />
                  </div>
                ))}

                <div className="place-carousel">
                  <PlaceCarousel smjestaji={turistplace} />
                </div>
                <div className="tipovi-div">
                  <p className="tipovi-title">{tipovi[3].title}</p>
                  <p className="tipovi-text">{tipovi[3].text}</p>
                  <div className="tipovi-link">
                    <p>Istraži turistička naselja</p>
                    <img
                      className="arrow-icon-link"
                      src={ArrowIcon}
                      style={{ width: 24, height: 24 }}
                      alt="Arrow Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="turist-place-mobile">
            <div className="tipovi-all">
              <div className="tipovi">
                <div className="tipovi-div">
                  <p className="tipovi-title">{tipovi[3].title}</p>
                  <p className="tipovi-text">{tipovi[3].text}</p>
                  <div className="tipovi-link">
                    <p>Istraži turistička naselja</p>
                    <img
                      className="arrow-icon-link"
                      src={ArrowIcon}
                      style={{ width: 24, height: 24 }}
                      alt="Arrow Icon"
                    />
                  </div>
                </div>

                <div className="place-carousel">
                  <PlaceCarousel smjestaji={turistplace} />
                </div>
              </div>
            </div>
          </div>

          <div className="tipovi-all">
            <div className="tipovi">
              <div className="tipovi-div">
                <p className="tipovi-title">{tipovi[4].title}</p>
                <p className="tipovi-text">{tipovi[4].text}</p>
                <div className="tipovi-link">
                  <p>Istraži mobilne kućice</p>
                  <img
                    className="arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>

              {mobile.map((mob, index) => (
                <div className="tipovi-div-cards" key={index}>
                  <PlaceCard
                    image={mob.image}
                    city={mob.city}
                    name={mob.name}
                    rating={mob.rating}
                    price={mob.price}
                    tecaj = {hrk}
                  />
                </div>
              ))}

              <div className="place-carousel">
                <PlaceCarousel smjestaji={mobile} />
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Tipovi;
