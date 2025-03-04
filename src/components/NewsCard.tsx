import ArrowIcon2 from "../assets/arrow2.svg";
import "../css/NewsCard.css"


interface NewsCardProps {
  image:string,
  category:string,
  published:Date,
  title:string,
  text:string
}

function NewsCard({image,category,published,title,text}:NewsCardProps) {

  const dateString = new Date(published).toLocaleDateString("en-US");

  return (
    <div className="news-card">
      <img
        className="news-img"
        src={image}
        alt="Novosti"
      />
      <div className="card-content">
        <div className="line1">
          <p>{category}</p>
          <p>{dateString}</p>
        </div>
        <div className="news-card-title">
          <p>{title}</p>
        </div>
        <div className="news-card-text">
          <p>
            {text}
          </p>
        </div>
        <div className="vidi-vise">
          <div className="vidi-vise-text">
            <p>Vidi više</p>
            <img
              src={ArrowIcon2}
              alt="Arrow Icon"
              style={{ width: 24, height: 24 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
