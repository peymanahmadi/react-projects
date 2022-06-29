import { useState } from "react";
import "./TourList.css";

const TourList = ({ id, image, name, info, price, removeHandler }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <article className="tour-container">
        <img src={image} alt={name} />
        <footer>
          <div className="name-price">
            <h3>{name}</h3>
            <h4>${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeHandler(id)}>
            Not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default TourList;
