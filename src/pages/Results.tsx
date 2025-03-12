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

  const [length, setLength] = useState<number>(results.length);

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

  const [priceRange, setPriceRange] = useState<number[]>([]);
  function handlePriceRange(value: number[]) {
    setPriceRange(value);
    console.log("Price range:", value);
  }

  const [filterRatings, setFilterRatings] = useState<number[]>([]);
  function handleRatings(value: number[]) {
    setFilterRatings(value);
    console.log("Filter ratings:", value);
  }

  const filteredResults = results.filter((item) => {
    if (priceRange.length === 0 && filterRatings.length === 0) return true;

    const matchesPrice =
      priceRange.length === 0 ||
      (item.price >= priceRange[0] && item.price <= priceRange[1]);

    const matchesRating =
      filterRatings.length === 0 || filterRatings.includes(item.rating);

    return matchesPrice && matchesRating;
  });

  const scrollTop = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setLength(filteredResults.length);
    scrollTop();
  }, [filteredResults]);

  const [sortOrder, setSortOrder] = useState("");
  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortOrder) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "rating_asc":
        return a.rating - b.rating;
      case "rating_desc":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  useEffect(() => {
    console.log("Search results:", results);
    console.log("Start date:", startDate);
    console.log("End date:", endDate);
    console.log("Lokacija:", lokacija);
    console.log("Smjestaj:", smjestaj);
    console.log("Adults:", adults);
    console.log("Children:", children);
  }, [results, startDate, endDate, lokacija, smjestaj, adults, children]);

  return (
    <div className={hideSearch ? "results-main" : "results-div-custom"}>
      <div className="search-desktop">
        <Search />
      </div>
      {!hideSearch && (
        <div className="search-mobile">
          <Search />
        </div>
      )}

      <ArgumentiMobile
        startDate={startDate}
        endDate={endDate}
        lokacija={lokacija}
        adults={adults}
        children={children}
        showHideSearch={showSearch}
      />

      <div className="results-div">
        <Filter
          determinePriceRange={handlePriceRange}
          determineRatings={handleRatings}
        />
        <div className="results">
          <div className="results-sort">
            <p className="results-sort-title">{length} smještaja pronađeno</p>
            <div className="results-sort-right">
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel>Sortiraj po:</InputLabel>
                <Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
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

          {sortedResults.map((result, index) => (
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
