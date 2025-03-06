import "../css/RegijeFull.css";
import Footer from "../components/Footer";
import ArrowIcon from "../assets/arrow.svg";
import axios from "axios";
import { useEffect, useState } from "react";

interface Regije {
  image: string;
  text: string;
  title: string;
}

function RegijeFull() {
  const [regije, setRegije] = useState<Regije[]>([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8055/items/regije");
      console.log("Regije:", response.data.data);
      setRegije(response.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(()=>{
    fetchData();
  })

  return (
    <>
      <div className="regije-cro">
        <p className="regijeFull-title">Regije u Hrvatskoj</p>

        {regije.length > 0 && (
          <div className="regije-list">
            <div className="leftcro">
              <img
                className="regijeFull-img"
                src={regije[0].image}
                alt="Istočna Hrvatska"
              />

              <div className="content">
                <p className="content-title">{regije[0].title}</p>
                <p className="content-text">{regije[0].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>

            <div className="rightcro">
              <div className="content">
                <p className="content-title">{regije[1].title}</p>
                <p className="content-text">{regije[1].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <img
                className="regijeFull-img"
                src={regije[1].image}
                alt="Središnja Hrvatska"
              />
            </div>

            <div className="rightcro-mobile">
              <img
                className="regijeFull-img"
                src={regije[1].image}
                alt="Središnja Hrvatska"
              />
              <div className="content">
                <p className="content-title">{regije[1].title}</p>
                <p className="content-text">{regije[1].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>

            <div className="leftcro">
              <img
                className="regijeFull-img"
                src={regije[2].image}
                alt="Gorska Hrvatska"
              />

              <div className="content">
                <p className="content-title">{regije[2].title}</p>
                <p className="content-text">{regije[2].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>

            <div className="rightcro">
              <div className="content">
                <p className="content-title">{regije[3].title}</p>
                <p className="content-text">{regije[3].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <img
                className="regijeFull-img"
                src={regije[3].image}
                alt="Istra i Kvarner"
              />
            </div>

            <div className="rightcro-mobile">
              <img
                className="regijeFull-img"
                src={regije[3].image}
                alt="Istra i Kvarner"
              />
              <div className="content">
                <p className="content-title">{regije[3].title}</p>
                <p className="content-text">{regije[3].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>

            <div className="leftcro">
              <img
                className="regijeFull-img"
                src={regije[4].image}
                alt="Sjeverna Dalmacija"
              />

              <div className="content">
                <p className="content-title">{regije[4].title}</p>
                <p className="content-text">{regije[4].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>

            <div className="rightcro">
              <div className="content">
                <p className="content-title">{regije[5].title}</p>
                <p className="content-text">{regije[5].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <img className="regijeFull-img" src={regije[5].image} />
            </div>

            <div className="rightcro-mobile">
              <img
                className="regijeFull-img"
                src={regije[5].image}
                alt="Središnja Dalmacija"
              />
              <div className="content">
                <p className="content-title">{regije[5].title}</p>
                <p className="content-text">{regije[5].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>

            <div className="leftcro">
              <img
                className="regijeFull-img"
                src={regije[6].image}
                alt="Južna Dalmacija"
              />

              <div className="content">
                <p className="content-title">{regije[6].title}</p>
                <p className="content-text">{regije[6].text}</p>
                <div className="content-link">
                  <p>Vidi detalje</p>
                  <img
                    className="content-arrow-icon-link"
                    src={ArrowIcon}
                    style={{ width: 24, height: 24 }}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default RegijeFull;
