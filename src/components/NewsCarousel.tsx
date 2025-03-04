import NewsCard from "./NewsCard";
import "../css/NewsCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

function NewsCarousel() {

  interface NewsItem {
    image:string,
    category:string,
    published:Date,
    title:string,
    text:string
  }

  const [novosti, setNovosti] = useState<NewsItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8055/items/novosti")
      .then((response) => {
        setNovosti(response.data.data);
        console.log("Novosti array:", response.data.data);
      })
      .catch((error) => {
        console.log("Error occurred:", error);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="carousel-container">
      <Carousel responsive={responsive} infinite={false} draggable={false}>
        {
          novosti.map((novost,index)=>(
            <div key={index}>
              <NewsCard image={novost.image} category={novost.category} published={novost.published} title={novost.title} text={novost.text} />
            </div>
          ))
        }
      </Carousel>
    </div>
  );
}

export default NewsCarousel;
