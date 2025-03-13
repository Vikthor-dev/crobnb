import Drawer from "@mui/material/Drawer";
import "../css/FilterMobile.css";
import Filter from "./Filter";
import { useState } from "react";
import CloseIcon from "../assets/close.svg"

function FilterMobile({
  isOpen,
  toggleFilter,
  updatePriceRangeMob,
  updateRatingsMob
}: {
  isOpen: boolean;
  toggleFilter: () => void;
  updatePriceRangeMob:(value:number[]) => void
  updateRatingsMob:(value:number[]) => void
}) {
  const [, setPriceRange] = useState<number[]>([]);
  function handlePriceRange(value: number[]) {
    setPriceRange(value);
    console.log("Price range:", value);
    updatePriceRangeMob(value)
  }

  const [, setFilterRatings] = useState<number[]>([]);
  function handleRatings(value: number[]) {
    setFilterRatings(value);
    console.log("Filter ratings:", value);
    updateRatingsMob(value)
  }

  function closeFilter(){
    toggleFilter();
  }

  return (
    <div>
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          zIndex: 1200,
        }}
        open={isOpen}
        onClose={toggleFilter}
        variant="temporary"
        anchor="left"
      >
        <div className="filter-mob-navigation">
          <img onClick={closeFilter} src={CloseIcon} alt="Close" style={{height:24,width:24,marginBottom:20}} />
          <Filter
            determinePriceRange={handlePriceRange}
            determineRatings={handleRatings}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default FilterMobile;
