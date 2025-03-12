import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/Results.css";
import Search from "../components/Search";
import dayjs from "dayjs";
import ResultsCard from "../components/ResultsCard";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ArgumentiMobile from "../components/ArgumentiMobile";

function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const encodedData = queryParams.get("data");
  const data = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : [];
  const results = [...data];

  const encodedStartDate = queryParams.get("startDate");
  const startDateDayjs = encodedStartDate ? dayjs(encodedStartDate) : null;
  const startDate =
    startDateDayjs && startDateDayjs.isValid()
      ? startDateDayjs.format("DD.MM.YYYY")
      : null;

  const encodedEndDate = queryParams.get("endDate");
  const endDateDayjs = encodedEndDate ? dayjs(encodedEndDate) : null;
  const endDate =
    endDateDayjs && endDateDayjs.isValid()
      ? endDateDayjs.format("DD.MM.YYYY")
      : null;

  const length: number = results.length;

  const lokacija = decodeURIComponent(
    queryParams.get("lokacija") || "Unesite lokaciju"
  );
  const smjestaj = decodeURIComponent(queryParams.get("smjestaj") || "");
  const adults = parseInt(queryParams.get("adults") || "0", 10);
  const children = parseInt(queryParams.get("children") || "0", 10);

  const [hideSearch, setHideSearch] = useState<boolean>(true);

  function showSearch() {
    setHideSearch(!hideSearch);
  }

  useEffect(() => {
    console.log("Search results:", results);
    console.log("Start date:", startDate);
    console.log("End date:", endDate);
    console.log("Lokacija:", lokacija);
    console.log("Smjestaj:", smjestaj);
    console.log("Adults:", adults);
    console.log("Children:", children);
  }, []);

  return (
    <div
      className={hideSearch ? "results-main" : "results-div-custom"}>
      
      <div className="search-desktop">
        <Search />
      </div>
      {!hideSearch && (
        <div className="search-mobile">
          <Search />
        </div>
      )}

      <ArgumentiMobile startDate={startDate} endDate={endDate} lokacija={lokacija} adults={adults} children={children} showHideSearch={showSearch} />

      <div className="results-div">
        <Filter />
        <div className="results">
          <div className="results-sort">
            <p className="results-sort-title">{length} smještaja pronađeno</p>
            <div className="results-sort-right">
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel>Sortiraj po:</InputLabel>
                <Select>
                  <MenuItem value="price_asc">
                    Cijena: niža prema višoj
                  </MenuItem>
                  <MenuItem value="price_desc">
                    Cijena: viša prema nižoj
                  </MenuItem>
                  <MenuItem value="rating_asc">
                    Zvijezdice: niže prema višem
                  </MenuItem>
                  <MenuItem value="rating_desc">
                    Zvijezdice: više prema nižem
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {results.map((result, index) => (
            <ResultsCard
              key={index}
              image={result.image}
              name={result.name}
              rating={result.rating}
              price={result.price}
              category={result.category}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Results;
