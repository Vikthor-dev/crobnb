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

  const [currentPage , setCurrentPage] = useState(1);

  const [postsPerPage , ] = useState(6);

  function calculateOffset(currentPage:number,postsPerPage:number){
    return (currentPage - 1) * postsPerPage
  }

  const scrollTop = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  function Next() {
    setCurrentPage((prev) => prev + 1);
    scrollTop();
  }
  
  function Previous() {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
    scrollTop();
  }



  async function fetchData() {
    try {
      const offset = calculateOffset(currentPage,postsPerPage);
      const response = await axios.get("http://localhost:8055/items/novosti",{
        params:{
          limit:postsPerPage,
          offset:offset
        }
      });
      let novosti = response.data.data;
      setNovosti(novosti);
      console.log("Novosti:", response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [currentPage,postsPerPage]);

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
        <div onClick={Previous} className="pag">
          <img style={{
            transform:"rotate(180deg) translateY(-1px)",
          }} src={ArrowIcon} alt="Next" />
          <p>Prethodni</p>
        </div>
        <div onClick={Next} className="pag">
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
