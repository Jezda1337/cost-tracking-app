import "./card.style.scss";

const Card = ({ costs }) => {
  return (
    <>
      <ul className="list">
        <li className="list__card list__card--header">
          <span className="list__card--name">Cost name</span>
          <span className="list__card--date">Date</span>
          <span className="list__card--price">Price</span>
        </li>
        {costs.map((cost, index) => (
          <li
            onClick={(e) => console.log(e)}
            key={index}
            className="list__card"
          >
            <span>{cost.cost}</span>
            <span>{cost.date}</span>
            <span>{cost.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Card;
