import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DateIcon from "../assets/date.svg";
function Date() {
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
            src={DateIcon}
            alt="Datum"
            style={{ width: 24, height: 24 }}
          />
          Odaberi datum
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
          src={DateIcon}
          alt="Datum"
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
          <MenuItem>
          
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Date;
