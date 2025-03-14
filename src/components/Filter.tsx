import "../css/Filter.css";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useState } from "react";
import CloseIcon from "../assets/close.svg";

interface FilterProp {
  determinePriceRange: (value: number[]) => void;
  determineRatings: (value: number[]) => void;
  closeFilter: () => void;
  determineFilters: (value: string[]) => void;
}

function Filter({
  determinePriceRange,
  determineRatings,
  closeFilter,
  determineFilters,
}: FilterProp) {
  const [filterPriceRange, setValue] = useState<number[]>([0, 100]);

  const handleFilterPrice = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(event);
  };

  function applyFilters() {
    determinePriceRange(filterPriceRange as number[]);
    determineRatings(ratingsFilter as number[]);
    determineFilters(filters as string[]);
    closeFilter();
  }

  const [ratingsFilter, setRatingsFilter] = useState<number[]>([]);
  function updateRatingsFilter(value: number) {
    setRatingsFilter((prevRatingsFilter) => {
      if (prevRatingsFilter.includes(value)) {
        return prevRatingsFilter.filter((rating) => rating !== value);
      } else {
        return [...prevRatingsFilter, value];
      }
    });
  }

  const [filters, setFilters] = useState<string[]>([]);
  function updateFilters(value: string) {
    setFilters((prevFilter) => {
      if (prevFilter.includes(value)) {
        return prevFilter.filter((filter) => filter !== value);
      } else {
        return [...prevFilter, value];
      }
    });
  }

  const [allFiltersArray, setAllFiltersArray] = useState<(string | number)[]>(
    []
  );
  function updateAllArray(value: string | number) {
    setAllFiltersArray((prev) => {
      if (prev.includes(value)) {
        return prev.filter((p) => p !== value);
      } else {
        return [...prev, value];
      }
    });
  }

  const handleResetFilters = () => {
    setValue([0, 100]);
    setRatingsFilter([]);
    setFilters([]);
    setAllFiltersArray([]);

    determinePriceRange([]);
    determineRatings([]);
  };

  return (
    <div className="filters-div">
      <div className="filters-first">
        <p className="filters-first-text">Filtriraj po:</p>
        <p className="filters-first-text-mobile">Filtriraj po</p>
        <p onClick={handleResetFilters} className="filters-first-reset">
          Resetiraj
        </p>
      </div>
      <div className="line-break"></div>
      <div className="filters-mobile-only">
        {allFiltersArray.map((f, index) => (
          <div className="button-filter-div">
            <p key={index}>{typeof f === "number" ? `${f} Zvjezdica` :  f.charAt(0).toUpperCase() + f.slice(1)}</p>
            <img
              onClick={() => {
                updateAllArray(f);
                if (typeof f === "number") {
                  updateRatingsFilter(f);
                } else {
                  updateFilters(f);
                }
              }}
              src={CloseIcon}
              alt="Close"
              style={{ height: 20, width: 20 }}
            />
          </div>
        ))}
      </div>
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
              color: "#337589",
              "& .MuiSlider-thumb": {
                color: "#337589",
              },
              "& .MuiSlider-track": {
                color: "#337589",
              },
              "& .MuiSlider-rail": {
                color: "#D9DADD",
              },
            }}
          />
        </div>
      </div>
      <div className="line-break"></div>

      <div className="filters-fourth">
        <p>Broj zvijezdica</p>
        <div className="filters-fourth-ratings-div">
          <div className="filters-fourth-ratings">
            <Checkbox
              onChange={() => {
                updateRatingsFilter(5);
                updateAllArray(5);
              }}
              sx={{ padding: 0, margin: 0 }}
              checked={ratingsFilter.includes(5)}
            />
            <Rating
              className="results-rating"
              value={5}
              readOnly
              size="small"
            />
          </div>
          <div className="filters-fourth-ratings">
            <Checkbox
              onChange={() => {
                updateRatingsFilter(4);
                updateAllArray(4);
              }}
              sx={{ padding: 0, margin: 0 }}
              checked={ratingsFilter.includes(4)}
            />
            <Rating
              className="results-rating"
              value={4}
              readOnly
              size="small"
            />
          </div>
          <div className="filters-fourth-ratings">
            <Checkbox
              onChange={() => {
                updateRatingsFilter(3);
                updateAllArray(3);
              }}
              sx={{ padding: 0, margin: 0 }}
              checked={ratingsFilter.includes(3)}
            />
            <Rating
              className="results-rating"
              value={3}
              readOnly
              size="small"
            />
          </div>
          <div className="filters-fourth-ratings">
            <Checkbox
              onChange={() => {
                updateRatingsFilter(2);
                updateAllArray(2);
              }}
              sx={{ padding: 0, margin: 0 }}
              checked={ratingsFilter.includes(2)}
            />
            <Rating
              className="results-rating"
              value={2}
              readOnly
              size="small"
            />
          </div>
          <div className="filters-fourth-ratings">
            <Checkbox
              onChange={() => {
                updateRatingsFilter(1);
                updateAllArray(1);
              }}
              sx={{ padding: 0, margin: 0 }}
              checked={ratingsFilter.includes(1)}
            />
            <Rating
              className="results-rating"
              value={1}
              readOnly
              size="small"
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20 }} className="line-break"></div>

      <div className="filters-fifth">
        <p>Popularni filteri</p>
        <div className="filters-fifth-items-div">
          <div className="filters-fifth-items">
            <Checkbox
              sx={{ padding: 0, margin: 0 }}
              onChange={() => {
                updateFilters("bazen");
                updateAllArray("bazen");
              }}
              checked={filters.includes("bazen")}
            />
            <p>Bazen</p>
          </div>
          <div className="filters-fifth-items">
            <Checkbox
              sx={{ padding: 0, margin: 0 }}
              onChange={() => {
                updateFilters("wifi");
                updateAllArray("wifi");
              }}
              checked={filters.includes("wifi")}
            />
            <p>WiFi</p>
          </div>
          <div className="filters-fifth-items">
            <Checkbox
              sx={{ padding: 0, margin: 0 }}
              onChange={() => {
                updateFilters("klima");
                updateAllArray("klima");
              }}
              checked={filters.includes("klima")}
            />
            <p>Klima</p>
          </div>
          <div className="filters-fifth-items">
            <Checkbox
              sx={{ padding: 0, margin: 0 }}
              onChange={() => {
                updateFilters("parking");
                updateAllArray("parking");
              }}
              checked={filters.includes("parking")}
            />
            <p>Parking</p>
          </div>
        </div>
      </div>

      <Button onClick={applyFilters} className="filters-btn">
        Primjeni filter
      </Button>
      <Button onClick={handleResetFilters} className="filters-reset-btn-mobile">
        Resetiraj
      </Button>
    </div>
  );
}

export default Filter;
