import SinglePerson from "./SinglePerson";
import "./List.css";

const List = ({ people, clearHandle }) => {
  return (
    <div className="list-form">
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
      <button onClick={clearHandle}>clear all</button>
    </div>
  );
};

export default List;
