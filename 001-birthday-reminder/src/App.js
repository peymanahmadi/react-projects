import { useState } from "react";
import data from "./data/data";
import List from "./components/List";
import "./index.css";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearHandle = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <List people={people} clearHandle={clearHandle} />
    </div>
  );
};

export default App;
