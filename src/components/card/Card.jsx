import "./Card.css";

import PropTypes from "prop-types";

function Card(props) {
  const { title, content, img } = props;

  return (
    <div className="card">
      {img ? <img src={img} alt={title} /> : null}
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string,
};
