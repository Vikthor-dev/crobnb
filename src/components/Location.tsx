import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LocationIcon from "../assets/location.svg";

function Location() {
  const [lokacija, setLokacija] = React.useState("Odaberi");

  const locationOptions = [
    { value: "Srhr", label: "Središnja Hrvatska" },
    { value: "Isthr", label: "Istočna Hrvatska" },
    { value: "Grhr", label: "Gorska Hrvatska" },
    { value: "Sjvdal", label: "Sjeverna Dalmacija" },
    { value: "Srdal", label: "Središnja Dalmacija" },
    { value: "Jzdal", label: "Južna Dalmacija" },
    { value: "Istkv", label: "Istra i Kvarner" },
  ];

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLokacija(event.target.value as string);
  };


  function getLabelForValue(value: string) {
    const selectedOption = locationOptions.find((option) => option.value === value);
    return selectedOption ? selectedOption.label : "Odaberi";
  }

  function renderSelectedValue(selected: string) {
    if (selected === "Odaberi") {
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
          <img
            src={LocationIcon}
            alt="Lokacija"
            style={{ width: 24, height: 24 }}
          />
          Odaberi
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
        <img
          src={LocationIcon}
          alt="Lokacija"
          style={{ width: 24, height: 24 }}
        />
       {getLabelForValue(selected)}
      </div>
    );
  }

  return (
    <div>
      <FormControl fullWidth size="small">
        <Select
          value={lokacija}
          onChange={handleChange}
          displayEmpty
          renderValue={renderSelectedValue}
        >
          <MenuItem value="Srhr">Središnja Hrvatska</MenuItem>
          <MenuItem value="Isthr">Istočna Hrvatska</MenuItem>
          <MenuItem value="Grhr">Gorska Hrvatska</MenuItem>
          <MenuItem value="Sjvdal">Sjeverna Dalmacija</MenuItem>
          <MenuItem value="Srdal">Središnja dalmacija</MenuItem>
          <MenuItem value="Jzdal">Južna Dalmacija</MenuItem>
          <MenuItem value="Istkv">Istra i Kvarner</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Location;
