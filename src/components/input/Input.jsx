import "./Input.css";

import PropTypes from "prop-types";

function Input(props) {
  const { type = "text" } = props;

  return (
    <div className="input-field">
      <input type={type} />
    </div>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
