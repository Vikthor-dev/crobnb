import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/Results.css";
import Search from "../components/Search";
import dayjs from "dayjs";
import arrowDown from "../assets/arrow3.svg";
import ResultsCard from "../components/ResultsCard";
import Footer from "../components/Footer";
import Slider from "@mui/material/Slider";

function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const encodedData = queryParams.get("data");
  const data = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : [];
  const results = [...data];

  const encodedStartDate = queryParams.get("startDate");
  const startDateDayjs = encodedStartDate ? dayjs(encodedStartDate) : null;
  const startDate = startDateDayjs ? startDateDayjs.format("DD.MM.YYYY") : null;

  const encodedEndDate = queryParams.get("endDate");
  const endDateDayjs = encodedEndDate ? dayjs(encodedEndDate) : null;
  const endDate = endDateDayjs ? endDateDayjs.format("DD.MM.YYYY") : null;

  const length: number = results.length;

  const [filterPriceRange, setValue] = useState<number[]>([0, 100]);

  const handleFilterPrice = (event: Event, newValue: number | number[]) =>{
    setValue(newValue as number[]);
  }

  useEffect(() => {
    console.log("Search results:", results);
    console.log("Start date:", startDate);
    console.log("End date:", endDate);
  }, []);

  return (
    <div className="results-main">
      <Search />
      <div className="results-div">
        <div className="filters-div">
          <div className="filters-first">
            <p className="filters-first-text">Filtriraj po:</p>
            <p className="filters-first-reset">Resetiraj</p>
          </div>
          <div className="line-break"></div>
          <div className="filters-second">
            <p>Raspon cijena (EUR)</p>
          </div>
          <div className="filters-third">
            <div className="filter-prices">
              <p>{filterPriceRange[0]}</p>
              <p>{filterPriceRange[1]}</p>
            </div>
            <div className="filters-slider">
              <Slider
                defaultValue={100}
                value={filterPriceRange}
                onChange={handleFilterPrice}
                max={500}
                sx={{
                  color:"#337589",
                  '& .MuiSlider-thumb': {
                    color: '#337589', // Thumb color
                  },
                  '& .MuiSlider-track': {
                    color: '#337589', // Track color
                  },
                  '& .MuiSlider-rail': {
                    color: '#D9DADD', // Rail color (optional)
                  }
                }}
              />
            </div>
          </div>
          <div className="line-break"></div>
        </div>

        <div className="results">
          <div className="results-sort">
            <p className="results-sort-title">{length} smještaja pronađeno</p>
            <div className="results-sort-right ">
              <p
                style={{
                  fontFamily: "Mulish,sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  color: "#50545E",
                }}
              >
                Sortiraj po :
              </p>
              <img
                src={arrowDown}
                alt="Arrow down"
                style={{ width: 22, height: 22, marginLeft: 10 }}
              />
            </div>
          </div>
          <ResultsCard />
          <ResultsCard />
          <ResultsCard />
          <ResultsCard />
          <ResultsCard />
          <ResultsCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Results;
