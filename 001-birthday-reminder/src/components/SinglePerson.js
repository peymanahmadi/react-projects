import "./SinglePerson.css";

const SinglePerson = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default SinglePerson;
