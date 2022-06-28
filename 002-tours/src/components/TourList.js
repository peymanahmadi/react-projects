import "./TourList.css";

const TourList = ({ id, image, name, info, price }) => {
  const removeHandler = (e) => {
    console.log(e);
  };
  return (
    <>
      <article className="tour-container">
        <img src={image} alt={name} />
        <div className="name-price">
          <h3>{name}</h3>
          <h4>${price}</h4>
        </div>
        <p>{info}</p>
        <button onClick={() => removeHandler(id)}>Not interested</button>
      </article>
    </>
  );
};

export default TourList;
