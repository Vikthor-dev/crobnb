import "../css/PlaceCard.css";
import Rating from "@mui/material/Rating";

interface Hoteli {
  image: string;
  city: string;
  rating: number;
  name: string;
  price: number;
}

function PlaceCard({ image, city, rating, name, price }: Hoteli) {

  const decimalNumber = price ? price.toFixed(2) : price;

  return (
    <div className="hoteli-card">
      <img className="hoteli-card-img" src={image} alt="Hoteli" />
      <div className="hoteli-card-content">
        <div className="upper">
          <p
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              color: "#838791",
              marginBottom: 7,
            }}
          >
            {city}
          </p>
          <Rating value={rating} readOnly size="small" />
          <p
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: 5,
              marginTop: 7,
            }}
          >
            {name}
          </p>
        </div>
        <div className="lower">
          <p
            style={{
              fontWeight: 500,
              color: "#838791",
              fontSize: 12,
              fontFamily: "Mulish, sans-serif",
              marginBottom: 5,
            }}
          >
            od
          </p>
          <p
            style={{
              color: "#202532",
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "Mulish,sans-serif",
              marginBottom: 5,
            }}
          >
            {decimalNumber} EUR
          </p>
          <p
            style={{
              color: "#838791",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "Mulish,sans-serif",
              marginBottom: 5,
            }}
          >
            791,12 HRK
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
