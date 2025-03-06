import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PlaceCard from "./PlaceCard";

function PlaceCarousel({ smjestaji }:any) {
  let final_smjestaji = [...smjestaji].slice(0, 3);

  return (
    <div>
      {
        final_smjestaji.length > 0 && (
          <Carousel
          width={328}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={80}
        >
          <div>
            <PlaceCard
              image={final_smjestaji[0].image}
              city={final_smjestaji[0].city}
              name={final_smjestaji[0].name}
              rating={final_smjestaji[0].rating}
              price={final_smjestaji[0].price}
            />
          </div>
          <div>
          <PlaceCard
              image={final_smjestaji[1].image}
              city={final_smjestaji[1].city}
              name={final_smjestaji[1].name}
              rating={final_smjestaji[1].rating}
              price={final_smjestaji[1].price}
            />
          </div>
          <div>
          <PlaceCard
              image={final_smjestaji[2].image}
              city={final_smjestaji[2].city}
              name={final_smjestaji[2].name}
              rating={final_smjestaji[2].rating}
              price={final_smjestaji[2].price}
            />
          </div>
        </Carousel>
        )
      }

    </div>
  );
}

export default PlaceCarousel;
