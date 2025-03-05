import "../css/PlaceCard.css";
import Rating from "@mui/material/Rating";

function PlaceCard() {
  let rating: number = 5;

  return (
    <div className="hoteli-card">
      <img
        className="hoteli-card-img"
        src="https://shorturl.at/6sWfK"
        alt="Hoteli"
      />
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
            SPLIT
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
            Park Split
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
            105.00 EUR
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
