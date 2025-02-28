import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DateIcon from "../assets/date.svg";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

function Date() {
  const [lokacija, setLokacija] = React.useState("Odaberi");
  const [isOpened, setCalendar] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLokacija(event.target.value as string);
  };

  const toggleCalendar = () => {
    setCalendar(!isOpened);
  };

  function showHideCalendar() {
    if (isOpened) {
      return (
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangeCalendar calendars={1} />
          </LocalizationProvider>
        </div>
      );
    }else{
        return (
            <div></div>
        );
    }
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
          <img src={DateIcon} alt="Datum" style={{ width: 24, height: 24 }} />
          Odaberi datum
        </div>
      );
    }
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
          onClick={toggleCalendar}
        ></Select>
        {showHideCalendar()}
      </FormControl>
    </div>
  );
}

export default Date;
