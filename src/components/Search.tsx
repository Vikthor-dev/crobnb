import Location from "../components/Location";
import Accomodation from "../components/Accomodation";
import Date from "../components/Date";
import Guests from "../components/Guests";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import '../css/Search.css'

function Search() {
  return (
    <div>
           <div className="search">
        <div className="lokacija">
          <p>Lokacija</p>
          <Location />
        </div>

        <div className="smjestaj">
          <p>Tip smještaja</p>
          <Accomodation />
        </div>

        <div className="datum">
          <p>Datum prijave / odjave</p>
          <Date />
        </div>

        <div className="gosti">
          <p>Broj gostiju</p>
          <Guests />
        </div>

        <div className="trazi">
          <div className="spacer"></div>
          <Button
            className="search-btn"
            variant="contained"
            sx={{ backgroundColor: "#337589", height: 48, width: 102 }}
            startIcon={<SearchIcon />}
          >
            Traži
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Search
