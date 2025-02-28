import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DateIcon from "../assets/date.svg";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import Popover from "@mui/material/Popover";

function Date() {
  const [lokacija, setLokacija] = React.useState("Odaberi");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLokacija(event.target.value as string);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "calendar-popover" : undefined;

  function renderSelectedValue(selected: string) {
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
        <img src={DateIcon} alt="Datum" style={{ width: 24, height: 24 }} />
        {selected === "Odaberi" ? "Odaberi datum" : selected}
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
          readOnly
          onClick={handleClick}
        ></Select>
      </FormControl>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            padding: "20px",
            width: "auto",
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangeCalendar calendars={1} />
        </LocalizationProvider>
      </Popover>
    </div>
  );
}

export default Date;
