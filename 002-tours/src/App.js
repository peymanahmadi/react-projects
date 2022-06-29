import { useEffect, useState } from "react";
import TourList from "./components/TourList";
import "./index.css";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeHandler = (id) => {
    let newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  return (
    <main className="container">
      {isLoading ? <h1>Loading...</h1> : <h1>Our Tours</h1>}
      {tours.length === 0 ? (
        <button className="btn" onClick={fetchData}>
          Refresh
        </button>
      ) : null}
      {tours.map((tour) => {
        return (
          <TourList key={tour.id} {...tour} removeHandler={removeHandler} />
        );
      })}
    </main>
  );
};

export default App;
