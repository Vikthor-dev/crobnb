import { Drawer, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import "../css/SortMobile.css";
import { useState } from "react";

function SortMobile({
  isOpen,
  toogleSort,
  handleSort,
}: {
  isOpen: boolean;
  toogleSort: () => void;
  handleSort:(value:string) => void;
}) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    toogleSort();
    handleSort(event.target.value);
  };

  return (
    <div className="sort-mobile">
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          zIndex: 1200,
        }}
        open={isOpen}
        onClose={toogleSort}
        variant="temporary"
        anchor="top"
      >
        <div className="sort-mob-navigation">
            <p style={{
                fontFamily:"Mulish,sans-serif",
                fontWeight:700,
                fontSize:16,
                color:"black"
            }}>Sortiraj po</p>
          <RadioGroup value={selectedValue} onChange={handleChange}>
            <div className="radio-sort-group">
              <div className="radio-row">
                <FormControlLabel
                  value="price_asc"
                  control={<Radio />}
                  label="Cijena: niža prema višoj"
                />
              </div>
              <div className="radio-row">
                <FormControlLabel
                  value="price_desc"
                  control={<Radio />}
                  label="Cijena: viša prema nižoj"
                />
              </div>
              <div className="radio-row">
                <FormControlLabel
                  value="rating_asc"
                  control={<Radio />}
                  label="Zvijezdice: niže prema višim"
                />
              </div>
              <div className="radio-row">
                <FormControlLabel
                  value="rating_desc"
                  control={<Radio />}
                  label="Zvijezdice: više prema nižim"
                />
              </div>
            </div>
          </RadioGroup>
        </div>
      </Drawer>
    </div>
  );
}

export default SortMobile;
