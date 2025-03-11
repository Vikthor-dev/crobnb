import "../css/ResultsCard.css";
import HeartIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import bazen from "../assets/details/bazen.svg";
import wifi from "../assets/details/wifi.svg";
import klima from "../assets/details/klima.svg";
import tenis from "../assets/details/tenis.svg";
import parking from "../assets/details/parking.svg";
import sauna from "../assets/details/sauna.svg";
import welness from "../assets/details/welness.svg";
import caffee from "../assets/details/caffee.svg";
import restoran from "../assets/details/restoran.svg";
import Button from "@mui/material/Button/Button";
import HeartMobile from "../assets/heartMobile.svg";
import { useEffect, useState } from "react";
import axios from "axios";

interface ResultCardProps {
  image: string;
  category: string;
  name: string;
  rating: number;
  price: number;
}

function ResultsCard({
  image,
  category,
  name,
  rating,
  price,
}: ResultCardProps) {
  const [hrk, setHrk] = useState(0);
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

  const[kategorija,setKat] = useState<string | null>(null)

  function categorySetter(){
    if(category === "hoteli"){
      setKat("HOTELI")
    }
    if(category === "apartmani"){
      setKat("APARTMANI")
    }
    if(category === "ville"){
      setKat("VILLE")
    }
    if(category === "mobilne_kucice"){
      setKat("MOBILNE KUĆICE")
    }
    if(category === "turisticka_naselja"){
      setKat("TURISTIČKA NASELJA")
    }
  }

  const decimalNumber = price ? price.toFixed(2) : price;

  const cijena_kune = (price * hrk).toFixed(2);

  useEffect(() => {
    converter();
    categorySetter();
  },[]);

  return (
    <div className="result-card">
      <div className="result-img-div">
        <img src={image} alt="Smjestaj" className="result-card-img" />
        <img src={HeartMobile} alt="Favourite" className="fav-icon-mobile" />
      </div>

      <div className="results-card-details">
        <div className="results-card-first">
          <p className="results-card-first-category">{kategorija}</p>
          <HeartIcon
            className="fav-icon"
            style={{ height: 18, width: 20, color: "#00526C" }}
          />
        </div>
        <div className="results-card-second">
          <p className="results-card-second-name">{name}</p>
          <Rating
            className="results-rating"
            value={rating}
            readOnly
            size="small"
          />
        </div>
        <div className="results-card-third">
          <p>Hatzeov perivoj 3, 21000 Split, Hrvatska</p>
        </div>
        <div className="results-card-fourth">
          <div className="results-card-fourth-icons">
            <img src={bazen} alt="bazen" style={{ height: 20, width: 20 }} />
            <p>Bazen</p>
          </div>
          <div className="results-card-fourth-icons">
            <img src={klima} alt="klima" style={{ height: 20, width: 20 }} />
            <p>Klima</p>
          </div>
          <div className="results-card-fourth-icons">
            <img
              src={parking}
              alt="parking"
              style={{ height: 20, width: 20 }}
            />
            <p>Parking</p>
          </div>
          <div className="results-card-fourth-icons">
            <img src={wifi} alt="wifi" style={{ height: 20, width: 20 }} />
            <p>WiFi</p>
          </div>
          <div className="results-card-fourth-icons">
            <img src={sauna} alt="sauna" style={{ height: 20, width: 20 }} />
            <p>Sauna</p>
          </div>
          <div className="results-card-fourth-icons">
            <img src={tenis} alt="tenis" style={{ height: 20, width: 20 }} />
            <p>Tenis igralište</p>
          </div>
          <div className="results-card-fourth-icons">
            <img src={caffee} alt="caffee" style={{ height: 20, width: 20 }} />
            <p>Caffee bar</p>
          </div>
          <div className="results-card-fourth-icons">
            <img
              src={welness}
              alt="welness"
              style={{ height: 20, width: 20 }}
            />
            <p>Wellness&Spa</p>
          </div>
          <div className="results-card-fourth-icons">
            <img
              src={restoran}
              alt="restoran"
              style={{ height: 20, width: 20 }}
            />
            <p>Restoran</p>
          </div>
        </div>
        <div className="results-card-fifth">
          <Button
            className="results-card-fifth-btn"
            disableElevation
            variant="contained"
          >
            Pogledaj detalje
          </Button>
          <div className="results-card-fifth-price">
            <p className="results-card-fifth-price-eur">{decimalNumber} EUR</p>
            <p
              style={{
                color: "#838791",
                fontFamily: "Mulish,sans-serif",
                fontWeight: 500,
                fontSize: 12,
              }}
            >
              {cijena_kune} HRK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsCard;
