import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/Results.css";
import Search from "../components/Search";
import dayjs from "dayjs";
import ResultsCard from "../components/ResultsCard";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

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

  useEffect(() => {
    console.log("Search results:", results);
    console.log("Start date:", startDate);
    console.log("End date:", endDate);
  }, []);

  return (
    <div className="results-main">
      <Search />
      <div className="results-div">
        <Filter />

        <div className="results">
          <div className="results-sort">
            <p className="results-sort-title">{length} smještaja pronađeno</p>
            <div className="results-sort-right">
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel>Sortiraj po:</InputLabel>
                <Select>
                  <MenuItem value="price_asc" >Cijena: niža prema višoj</MenuItem>
                  <MenuItem value="price_desc">Cijena: viša prema nižoj</MenuItem>
                  <MenuItem value="rating_asc">Zvijezdice: niže prema višem</MenuItem>
                  <MenuItem value="rating_desc">Zvijezdice: više prema nižem</MenuItem>
                </Select>
              </FormControl>
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
