import "../css/Filter.css";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useState } from "react";

function Filter() {
  const [filterPriceRange, setValue] = useState<number[]>([0, 100]);

  const handleFilterPrice = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(event);
  };
  return (
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
              color: "#337589",
              "& .MuiSlider-thumb": {
                color: "#337589", // Thumb color
              },
              "& .MuiSlider-track": {
                color: "#337589", // Track color
              },
              "& .MuiSlider-rail": {
                color: "#D9DADD", // Rail color (optional)
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
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <Rating
              className="results-rating"
              value={5}
              readOnly
              size="small"
            />
          </div>
          <div className="filters-fourth-ratings">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <Rating
              className="results-rating"
              value={4}
              readOnly
              size="small"
            />
          </div>
          <div className="filters-fourth-ratings">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <Rating
              className="results-rating"
              value={3}
              readOnly
              size="small"
            />
          </div>
          <div className="filters-fourth-ratings">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <Rating
              className="results-rating"
              value={2}
              readOnly
              size="small"
            />
          </div>
          <div className="filters-fourth-ratings">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
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
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <p>Bazen</p>
          </div>
          <div className="filters-fifth-items">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <p>WiFi</p>
          </div>
          <div className="filters-fifth-items">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <p>Klima</p>
          </div>
          <div className="filters-fifth-items">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <p>Parking</p>
          </div>
          <div className="filters-fifth-items">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <p>Apartman</p>
          </div>
          <div className="filters-fifth-items">
            <Checkbox sx={{ padding: 0, margin: 0 }} />
            <p>TV</p>
          </div>
        </div>
      </div>

      <Button className="filters-btn">Primjeni filter</Button>
    </div>
  );
}

export default Filter;
