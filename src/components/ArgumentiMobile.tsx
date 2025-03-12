import "../css/ArgumentiMobile.css";
import CalendarIcon from "../assets/calendar.svg";
import TraziIcon from "../assets/trazi.svg";
import LokacijaIcon from "../assets/lokacija.svg";
import PplIcon from "../assets/people.svg";
import CloseIcon from "../assets/close.svg";
import { useState } from "react";

interface ArgumentiProps{
    startDate:any,
    endDate:any,
    lokacija:string,
    adults:number,
    children:number,
    showHideSearch:() => void
}

function ArgumentiMobile({startDate,endDate,lokacija,adults,children,showHideSearch}:ArgumentiProps) {
  const [hideSearch, setHideSearch] = useState<boolean>(true);

  function showSearch() {
    setHideSearch(!hideSearch);
    showHideSearch();
  }

  return (
    <div
      className="argumenti-mobile"
      style={{ marginTop: !hideSearch ? 210 : undefined }}
    >
      <div className="argumenti-mobile-first">
        <div className="argumenti-date">
          <img
            src={CalendarIcon}
            alt="Kalendar"
            style={{ height: 20, width: 20 }}
          />
          <p>
            {startDate === null || endDate === null
              ? "Unesite datum"
              : `${startDate} - ${endDate}`}
          </p>
        </div>
        <img
          src={hideSearch ? TraziIcon : CloseIcon}
          alt="Trazi"
          className="argumenti-trazi-icon"
          style={{ height: 20, width: 20 }}
          onClick={showSearch}
        />
      </div>
      <div className="argumenti-mobile-second">
        <div className="argumenti-date">
          <img
            src={LokacijaIcon}
            alt="Lokacija"
            style={{ height: 20, width: 20 }}
          />
          <p>{lokacija}</p>
        </div>
      </div>
      <div className="argumenti-mobile-third">
        <div className="argumenti-date">
          <img src={PplIcon} alt="Odrasli" style={{ height: 20, width: 20 }} />
          <p>{adults} Odraslih</p>
        </div>
        <div className="argumenti-date">
          <img src={PplIcon} alt="Odrasli" style={{ height: 20, width: 20 }} />
          <p>{children} Djece</p>
        </div>
      </div>
    </div>
  );
}

export default ArgumentiMobile;
