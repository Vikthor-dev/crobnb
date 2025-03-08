import { useEffect, useState } from "react";
import "../css/Novosti.css";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import ArrowIcon from "../assets/arrow2.svg";
import Button from "@mui/material/Button/Button";
import CheckIcon from "../assets/check.svg";

function Novosti() {
  interface NewsItem {
    image: string;
    category: string;
    published: Date;
    title: string;
    text: string;
  }

  const [novosti, setNovosti] = useState<NewsItem[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(6);

  const [kategorija, setKategorija] = useState<string>("");

  const [checkEmpty, setCheck] = useState(false);

  const nextButtonDisable = checkEmpty ? "pag disabled" : "pag";

  const previousButtonDisable = currentPage === 1 ? "pag disabled" : "pag";

  function calculateOffset(currentPage: number, postsPerPage: number) {
    return (currentPage - 1) * postsPerPage;
  }

  const scrollTop = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  function Next() {
    if (checkEmpty) {
      console.log("No more news to load!");
      return;
    }
    setCurrentPage((prev) => prev + 1);
    scrollTop();
  }

  function Previous() {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
    scrollTop();
  }

  async function fetchData() {
    try {
      const offset = calculateOffset(currentPage, postsPerPage);

      const params: any = {
        limit: postsPerPage,
        offset: offset,
      };

      if (kategorija != "") {
        params.filter = {
          category: kategorija,
        };
      }

      const response = await axios.get("http://localhost:8055/items/novosti", {
        params: params,
      });
      let novosti = [...response.data.data];
      setNovosti(novosti);

      setCheck(novosti.length < postsPerPage);

      console.log("Novosti:", response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function applyfilter(kategorija: string) {
    setKategorija(kategorija);
    setCurrentPage(1);
    scrollTop();
  }

  useEffect(() => {
    fetchData();
  }, [currentPage, postsPerPage, kategorija]);

  return (
    <div className="n-main">
      <p className="n-title">Novosti</p>

      <div className="novosti-filter">
        <Button
          onClick={() => applyfilter("")}
          disableElevation
          variant="contained"
          className={kategorija === "" ? "active-filter" : ""}
        >
          {kategorija === "" && (
            <img
              src={CheckIcon}
              style={{ height: 16, width: 16, marginRight: 5 }}
            />
          )}
          Sve novosti
        </Button>
        <Button
          onClick={() => applyfilter("Turizam")}
          disableElevation
          variant="contained"
          className={kategorija === "Turizam" ? "active-filter" : ""}
        >
          {kategorija === "Turizam" && (
            <img
              src={CheckIcon}
              style={{ height: 16, width: 16, marginRight: 5 }}
            />
          )}
          Turizam
        </Button>
        <Button
          onClick={() => applyfilter("Gastro")}
          disableElevation
          variant="contained"
          className={kategorija === "Gastro" ? "active-filter" : ""}
        >
          {kategorija === "Gastro" && (
            <img
              src={CheckIcon}
              style={{ height: 16, width: 16, marginRight: 5 }}
            />
          )}
          Gastro
        </Button>
        <Button
          onClick={() => applyfilter("Sport")}
          disableElevation
          variant="contained"
          className={kategorija === "Sport" ? "active-filter" : ""}
        >
          {kategorija === "Sport" && (
            <img
              src={CheckIcon}
              style={{ height: 16, width: 16, marginRight: 5 }}
            />
          )}
          Sport
        </Button>
        <Button
          onClick={() => applyfilter("Kultura")}
          disableElevation
          variant="contained"
          className={kategorija === "Kultura" ? "active-filter" : ""}
        >
          {kategorija === "Kultura" && (
            <img
              src={CheckIcon}
              style={{ height: 16, width: 16, marginRight: 5 }}
            />
          )}
          Kultura
        </Button>
        <Button
          onClick={() => applyfilter("Fitness")}
          disableElevation
          variant="contained"
          className={kategorija === "Fitness" ? "active-filter" : ""}
        >
          {kategorija === "Fitness" && (
            <img
              src={CheckIcon}
              style={{ height: 16, width: 16, marginRight: 5 }}
            />
          )}
          Fitness
        </Button>
        <Button
          onClick={() => applyfilter("Destinacije")}
          disableElevation
          variant="contained"
          className={kategorija === "Destinacije" ? "active-filter" : ""}
        >
          {kategorija === "Destinacije" && (
            <img
              src={CheckIcon}
              style={{ height: 16, width: 16, marginRight: 5 }}
            />
          )}
          Destinacije
        </Button>
      </div>

      {novosti.length > 0 && (
        <div className="n-cards-div">
          {novosti.map((novost, index) => (
            <NewsCard
              key={index}
              image={novost.image}
              category={novost.category}
              published={novost.published}
              title={novost.title}
              text={novost.text}
            />
          ))}
        </div>
      )}

      <div className="pagination">
        <div onClick={Previous} className={previousButtonDisable}>
          <img
            style={{
              transform: "rotate(180deg) translateY(-1px)",
            }}
            src={ArrowIcon}
            alt="Next"
          />
          <p>Prethodni</p>
        </div>
        <div onClick={Next} className={nextButtonDisable}>
          <p>Sljedeći</p>
          <img
            style={{
              transform: "translateY(1px)",
            }}
            src={ArrowIcon}
            alt="Next"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Novosti;
