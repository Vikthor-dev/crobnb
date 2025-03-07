import { useEffect, useState } from "react";
import "../css/Novosti.css";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import ArrowIcon from "../assets/arrow2.svg";

function Novosti() {
  interface NewsItem {
    image: string;
    category: string;
    published: Date;
    title: string;
    text: string;
  }

  const [novosti, setNovosti] = useState<NewsItem[]>([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8055/items/novosti");
      let novosti = response.data.data;
      setNovosti(novosti);
      console.log("Novosti:", response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="n-main">
      <p className="n-title">Novosti</p>

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
        <div className="pag">
          <img style={{
            transform:"rotate(180deg) translateY(-1px)",
          }} src={ArrowIcon} alt="Next" />
          <p>Prethodni</p>
        </div>
        <div className="pag">
          <p>Sljedeći</p>
          <img style={{
            transform:"translateY(1px)",
          }} src={ArrowIcon} alt="Next" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Novosti;
