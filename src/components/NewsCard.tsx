import ArrowIcon2 from "../assets/arrow2.svg";
import "../css/NewsCard.css"

function NewsCard() {
  return (
    <div className="news-card">
      <img
        className="news-img"
        src="https://www.figma.com/file/yOvk0coep3PmBXZFxT0hei/image/aa689d6ecebeb768d9407683dcc1f8052fd9ac3c"
        alt="Novosti"
      />
      <div className="card-content">
        <div className="line1">
          <p>GASTRO EVENTI</p>
          <p>02/03/2023</p>
        </div>
        <div className="news-card-title">
          <p>Uskoro počinju dani vina 2023 - Istra</p>
        </div>
        <div className="news-card-text">
          <p>
            Na Dan vina svi vinoljupci, kao i oni koji će to tek postati, imaju
            priliku posjetiti nekog od istarskih vinara i saznati kako proizvode
            vrhunska i svjetski poznata vina...
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
