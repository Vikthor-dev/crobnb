import React from "react";
import hrIcon from "../assets/hr.svg";
import ukIcon from "../assets/uk.svg";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Language() {
  const [language, setLanguage] = React.useState("hrv");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
  };

  const setShortName = (value: string) => {
    const flagIcon = value === "hrv" ? hrIcon : ukIcon;
    const shortName = value === "hrv" ? "HRV" : "ENG";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <img
          src={flagIcon}
          alt="Hrvatska zastava"
          style={{ width: 24, height: 24 }}
        />
        {shortName}
      </div>
    );
  };

  return (
    <Box sx={{ width: 50 }}>
      <FormControl fullWidth variant="standard">
        <Select
          value={language}
          onChange={handleChange}
          renderValue={(value) => setShortName(value)}
          sx={{ fontSize: 12 }}
          MenuProps={{
            PaperProps: {
              sx: {
                width: 120,
              },
            },
          }}
        >
          <MenuItem value="hrv" sx={{ fontSize: 12 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <img
                src={hrIcon}
                alt="Hrvatska zastava"
                style={{ width: 24, height: 24 }}
              />
              Hrvatski
            </div>
          </MenuItem>

          <MenuItem value="eng" sx={{ fontSize: 12 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <img
                src={ukIcon}
                alt="Engleska zastava"
                style={{ width: 24, height: 24 }}
              />
              English
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Language;
