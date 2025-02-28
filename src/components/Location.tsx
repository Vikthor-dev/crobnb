import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LocationIcon from "../assets/location.svg";

function Location() {
  const [lokacija, setLokacija] = React.useState("Odaberi");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLokacija(event.target.value as string);
  };

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
            alt="Hrvatska zastava"
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
          alt="Hrvatska zastava"
          style={{ width: 24, height: 24 }}
        />
        {selected}
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
          <MenuItem value="Središnja dalmacija">Središnja dalmacija</MenuItem>
          <MenuItem value="Split i okolica">Split i okolica</MenuItem>
          <MenuItem value="Omiš i okolica">Omiš i okolica</MenuItem>
          <MenuItem value="Makarska i okolica">Makarska i okolica</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Location;
