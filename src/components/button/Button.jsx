import "./Button.css";

import PropTypes from "prop-types";

function Button(props) {
  const { children = "Click me!" } = props;

  return <button>{children}</button>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.any.isRequired,
};
