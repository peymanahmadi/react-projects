import { useEffect, useState } from "react";
import TourList from "./components/TourList";
import "./index.css";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeHandler = (id) => {
    let newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  return (
    <div className="container">
      {isLoading ? <h1>Loading...</h1> : <h1>Our Tours</h1>}
      {/* {tours.map((tour) => {
        return <TourList key={tour.id} {...tour} />;
      })} */}
      {tours.map((tour) => {
        const { id, name, image, info, price } = tour;
        return (
          <article key={id} className="tour-container">
            <img src={image} alt={name} />
            <div className="name-price">
              <h3>{name}</h3>
              <h4>${price}</h4>
            </div>
            <p>{info}</p>
            <button onClick={() => removeHandler(id)}>Not interested</button>
          </article>
        );
      })}
    </div>
  );
};

export default App;
