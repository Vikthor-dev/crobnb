import Location from "../components/Location";
import Accomodation from "../components/Accomodation";
import Date from "../components/Date";
import Guests from "../components/Guests";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "../css/Search.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import { Dayjs } from "dayjs";

function Search() {
  const [lokacija, setLokacija] = useState<string | null>(null);
  const [smjestaj, setSmjestaj] = useState<string | null>(null);
  const [adults, setAdults] = useState<number | null>(null);
  const [children, setChildren] = useState<number | null>(null);
  const [datum, setDate] = useState<DateRange<Dayjs>>([null, null]);

  const navigate = useNavigate();

  function handleLokaction(lokacija: string) {
    setLokacija(lokacija);
    console.log("Lokacija filter:", lokacija);
  }

  function handleAccomodation(smjestaj: string) {
    setSmjestaj(smjestaj);
    console.log("Smjestaj filter:", smjestaj);
  }

  function handleGuests(adult: number, child: number) {
    setAdults(adult);
    setChildren(child);
    console.log("Djeca:", child);
    console.log("Odrasli:", adult);
  }

  function handleDate(datum: DateRange<Dayjs>) {
    setDate(datum);
    console.log("Datum:", datum);
  }

  async function search() {
    let max_ppl: number = (adults ?? 0) + (children ?? 0);

    try {
      const response = await axios.get(
        "http://localhost:8055/items/smjestaji",
        {
          params: {
            filter: {
              regija: {
                _eq: lokacija,
              },
              category: {
                _eq: smjestaj,
              },
              max_ppl: {
                _gte: max_ppl,
              },
            },
          },
        }
      );

      console.log("Search results:", response.data.data);

      const encodedResult = encodeURIComponent(
        JSON.stringify(response.data.data)
      );

      const startDate = datum[0]?.format("YYYY-MM-DD") || null;
      const endDate = datum[1]?.format("YYYY-MM-DD") || null;

      navigate(
        `/results?data=${encodedResult}&startDate=${startDate}&endDate=${endDate}`
      );
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  return (
    <div>
      <div className="search">
        <div className="lokacija">
          <p>Lokacija</p>
          <Location onLocationChange={handleLokaction} />
        </div>

        <div className="smjestaj">
          <p>Tip smještaja</p>
          <Accomodation onAccomodationChange={handleAccomodation} />
        </div>

        <div className="datum">
          <p>Datum prijave / odjave</p>
          <Date handleDate={handleDate} />
        </div>

        <div className="gosti">
          <p>Broj gostiju</p>
          <Guests guestChange={handleGuests} />
        </div>

        <div className="trazi">
          <div className="spacer"></div>
          <Button
            onClick={search}
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
  );
}

export default Search;
