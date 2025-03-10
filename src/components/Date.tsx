import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DateIcon from "../assets/date.svg";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import Popover from "@mui/material/Popover";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import { Dayjs } from "dayjs";

interface DateProps{
  handleDate:(datum:DateRange<Dayjs>) => void
}

function Date({handleDate}:DateProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [date,setDate] = React.useState<DateRange<Dayjs>>([null,null])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleDate(date);
  };

  const open = Boolean(anchorEl);
  const id = open ? "calendar-popover" : undefined;

  function renderSelectedValue() {
    const formattedStartDate = date[0]?.format("DD.MM.YYYY") || "";
    const formattedEndDate = date[1]?.format("DD.MM.YYYY") || "";

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
        {formattedStartDate && formattedEndDate
          ? `${formattedStartDate} - ${formattedEndDate}`
          : "Odaberi datum"}
      </div>
    );
  }


  return (
    <div>
      <FormControl fullWidth size="small">
        <Select
          value=""
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
          <DateRangeCalendar calendars={1} value={date} onChange={newDate =>{
            setDate(newDate);
          }} />
        </LocalizationProvider>
      </Popover>
    </div>
  );
}

export default Date;
