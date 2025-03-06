import { useEffect, useState } from "react";
import "../css/Novosti.css";
import axios from "axios";

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
      let novosti_sliced = [...novosti].slice(0, 3);
      setNovosti(novosti_sliced);
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
      <div className="n-cards-div">
        
      </div>
    </div>
  );
}

export default Novosti;
