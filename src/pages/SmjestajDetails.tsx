import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../css/SmjestajDetails.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import LocationIcon from "../assets/location.svg";

function SmjestajDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get("data");

  const [result, setResult] = useState<any>([]);
  const [kategorija, setKat] = useState<string | null>(null);

  const categoryMap: { [key: string]: string } = {
    hoteli: "HOTELI",
    apartmani: "APARTMANI",
    ville: "VILLE",
    mobilne_kucice: "MOBILNE KUĆICE",
    turisticka_naselja: "TURISTIČKA NASELJA",
  };

  async function fetchData() {
    if (id) {
      try {
        const response = await axios.get(
          "http://localhost:8055/items/smjestaji",
          {
            params: {
              filter: {
                id: {
                  _eq: id,
                },
              },
            },
          }
        );
        setResult(response.data.data);
        console.log("Result:", response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  const accommodation = result[0];

  useEffect(() => {
    if (accommodation && accommodation.category) {
      setKat(categoryMap[accommodation.category] || "NEPOZNATA KATEGORIJA");
    }
  }, [accommodation]);

  return (
    <div className="smjestaj-details">
      {accommodation && (
        <>
          <p className="detail-category">{kategorija}</p>
          <div className="details-name-rating">
            <p>{accommodation.name}</p>
            <Rating value={accommodation.rating} readOnly size="small" />
          </div>
          <div className="details-ulica">
            <img
              src={LocationIcon}
              alt="Location"
              style={{ height: 24, width: 24 }}
            />
            <p>{accommodation.ulica}</p>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default SmjestajDetails;