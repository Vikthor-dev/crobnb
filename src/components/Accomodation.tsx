import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BedIcon from "../assets/bed.svg";

function Accomodation() {
  const [smjestaj, setSmjestaj] = React.useState("Odaberi tip");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSmjestaj(event.target.value as string);
  };

  function renderSelectedValue(selected: string) {
    if (selected === "Odaberi tip") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            height: 30,
          }}
        >
          <img src={BedIcon} alt="Smještaj" style={{ width: 24, height: 24 }} />
          Odaberi tip
        </div>
      );
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          height: 30,
        }}
      >
        <img src={BedIcon} alt="Smještaj" style={{ width: 24, height: 24 }} />
        {selected}
      </div>
    );
  }

  return (
    <div>
      <FormControl fullWidth size="small">
        <Select
          value={smjestaj}
          onChange={handleChange}
          displayEmpty
          renderValue={renderSelectedValue}
        >
          <MenuItem value="Hoteli">Hoteli</MenuItem>
          <MenuItem value="Apartmani">Apartmani</MenuItem>
          <MenuItem value="Turistička naselja">Turistička naselja</MenuItem>
          <MenuItem value="Ville">Ville</MenuItem>
          <MenuItem value="Mobilne kućice">Mobilne kućice</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Accomodation;
