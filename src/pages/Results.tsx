import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/Results.css";
import Search from "../components/Search";
import dayjs from "dayjs";

function Results() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const encodedData = queryParams.get("data");
  const data = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : [];
  const results = [...data];

  const encodedStartDate = queryParams.get("startDate");
  const startDateDayjs = encodedStartDate ? dayjs(encodedStartDate) : null
  const startDate = startDateDayjs ? startDateDayjs.format("DD.MM.YYYY") : null

  const encodedEndDate = queryParams.get("endDate");
  const endDateDayjs = encodedEndDate ? dayjs(encodedEndDate) : null
  const endDate = endDateDayjs ? endDateDayjs.format("DD.MM.YYYY") : null

  useEffect(() => {
    console.log("Search results:", results);
    console.log("Start date:",startDate);
    console.log("End date:",endDate);
  }, []);

  return (
    <div className="results-main">
      <Search />
    </div>
  );
}

export default Results;
