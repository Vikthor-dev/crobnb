import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import GuestsIcon from "../assets/guests.svg";
import PlusIcon from "../assets/plus.svg";
import MinusIcon from "../assets/minus.svg";
import "../css/Guests.css";
import Popover from "@mui/material/Popover";

function Guests() {
  const [guests, setGuests] = React.useState("Odaberi");
  let [adults, setAdults] = React.useState(0);
  let [children, setChildren] = React.useState(0);
  let [adultsDisplay, setAdultsDisplay] = React.useState(0);
  let [childrenDisplay, setChildrenDisplay] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setGuests(event.target.value as string);
  };

  const open = Boolean(anchorEl);
  const id = open ? "guests-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
    setAdultsDisplay(adults);
    setChildrenDisplay(children);
  };

  const adultsCounter = () => {
    setAdults((prev) => prev + 1);
  };

  const childrenCounter = () => {
    setChildren((prev) => prev + 1);
  };

  const adultsCounterMinus = () => {
    setAdults((prev) => Math.max(prev - 1, 0)); // Prevent going below 0
  };

  const childrenCounterMinus = () => {
    setChildren((prev) => Math.max(prev - 1, 0)); // Prevent going below 0
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
            src={GuestsIcon}
            alt="Broj gostiju"
            style={{ width: 24, height: 24 }}
          />
          {adultsDisplay} odraslih, {childrenDisplay} djece
        </div>
      );
    }
  }

  return (
    <div>
      <FormControl fullWidth size="small">
        <Select
          value={guests}
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
              width: "200px",
            },
          }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            fontFamily: "Mulish, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            width: 200,
            alignItems: "center",
          }}
        >
          <p>Odrasli</p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <img
              onClick={adultsCounter}
              className="plus"
              src={PlusIcon}
              alt="Plus"
              style={{ width: 24, height: 24 }}
            />
            <p>{adults}</p>
            <img
              onClick={adultsCounterMinus}
              className="minus"
              src={MinusIcon}
              alt="Minus"
              style={{ width: 24, height: 24 }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            fontFamily: "Mulish, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            width: 200,
            alignItems: "center",
          }}
        >
          <p>Djeca</p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <img
              onClick={childrenCounter}
              className="plus"
              src={PlusIcon}
              alt="Plus"
              style={{ width: 24, height: 24 }}
            />
            <p>{children}</p>
            <img
              onClick={childrenCounterMinus}
              className="minus"
              src={MinusIcon}
              alt="Minus"
              style={{ width: 24, height: 24 }}
            />
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default Guests;
