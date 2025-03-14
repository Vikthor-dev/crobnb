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
import FilterIconMobile from "../assets/filterIconMobile.svg";
import SortIconMobile from "../assets/filterIconMobile.svg";
import FilterMobile from "../components/FilterMobile";
import SortMobile from "../components/SortMobile";

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

  const [filters, setFilters] = useState<string[]>([]);
  function handleFilters(value: string[]) {
    setFilters(value);
    console.log("Filters:", value);
  }

  const filteredResults = results.filter((item) => {
    if (
      priceRange.length === 0 &&
      filterRatings.length === 0 &&
      filters.length === 0
    )
      return true;

      const matchesFilters =
      filters.length === 0 ||
      (Array.isArray(item.filteri)
        ? filters.every((f) => item.filteri.includes(f))
        : filters.includes(item.filteri));

    const matchesPrice =
      priceRange.length === 0 ||
      (item.price >= priceRange[0] && item.price <= priceRange[1]);

    const matchesRating =
      filterRatings.length === 0 || filterRatings.includes(item.rating);

    return matchesPrice && matchesRating && matchesFilters;
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

  const [isFilterMobile, setFilterMobile] = useState<boolean>(false);
  function handleFilterMobile() {
    setFilterMobile(!isFilterMobile);
  }

  const [isSortMobile, setSortMobile] = useState<boolean>(false);
  function handleSortMobile() {
    setSortMobile(!isSortMobile);
  }

  function handleSortValueMobile(value: string) {
    setSortOrder(value);
  }
  function closeFilter() {
    return;
  }

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

      <div className="filter-sort-mobile">
        <div onClick={handleFilterMobile} className="filter-sort-mob-div">
          <img
            src={FilterIconMobile}
            alt="Filter"
            style={{ height: 24, width: 24 }}
          />
          <p>Filtriraj po</p>
        </div>
        <div onClick={handleSortMobile} className="filter-sort-mob-div">
          <img
            src={SortIconMobile}
            alt="Sort"
            style={{ height: 24, width: 24 }}
          />
          <p>Sortiraj po</p>
        </div>
      </div>
      <FilterMobile
        isOpen={isFilterMobile}
        toggleFilter={handleFilterMobile}
        updatePriceRangeMob={handlePriceRange}
        updateRatingsMob={handleRatings}
        updateFiltersMob={handleFilters}
      />
      <SortMobile
        isOpen={isSortMobile}
        toogleSort={handleSortMobile}
        handleSort={handleSortValueMobile}
      />

      <div className="results-div">
        <div className="results-div-filter">
          <Filter
            determinePriceRange={handlePriceRange}
            determineRatings={handleRatings}
            closeFilter={closeFilter}
            determineFilters={handleFilters}
          />
        </div>

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
              filteri={result.filteri}
              ulica = {result.ulica}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Results;
