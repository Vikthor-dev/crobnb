import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BedIcon from "../assets/bed.svg";

interface AccomodationProps {
  onAccomodationChange: (accomodation: string) => void;
}

function Accomodation({ onAccomodationChange }: AccomodationProps) {
  const [smjestaj, setSmjestaj] = React.useState("Odaberi tip");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const smjestaj = event.target.value as string;
    setSmjestaj(smjestaj);
    onAccomodationChange(smjestaj);
  };

  const tipovi_object = [
    { value: "hoteli", label: "Hoteli" },
    { value: "apartmani", label: "Apartmani" },
    { value: "ville", label: "Ville" },
    { value: "turisticka_naselja", label: "Turistička naselja" },
    { value: "mobilne_kucice", label: "Mobilne kućice" },
  ];

  function getLabel(value: string) {
    const selectedOption = tipovi_object.find(
      (option) => option.value === value
    );
    return selectedOption ? selectedOption.label : "Odaberi tip";
  }

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
        {getLabel(selected)}
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
          <MenuItem value="hoteli">Hoteli</MenuItem>
          <MenuItem value="apartmani">Apartmani</MenuItem>
          <MenuItem value="turisticka_naselja">Turistička naselja</MenuItem>
          <MenuItem value="ville">Ville</MenuItem>
          <MenuItem value="mobilne_kucice">Mobilne kućice</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Accomodation;
