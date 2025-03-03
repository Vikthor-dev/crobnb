import NewsCard from "./NewsCard";
import "../css/NewsCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function NewsCarousel() {
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
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
      </Carousel>
    </div>
  );
}

export default NewsCarousel;
