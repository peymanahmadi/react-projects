import "./SinglePerson.css";

const SinglePerson = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default SinglePerson;

// the content within the <article> tag is independent of the other content of the site (even though it can be related).
// Potential sources for the <article> element:

// Forum post
// Blog post
// News story

// Default CSS Settings: display: block;
