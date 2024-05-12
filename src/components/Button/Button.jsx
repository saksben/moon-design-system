import { ButtonBase } from "./ButtonBase";
import PropTypes from "prop-types";

export const Button = ({ as, href, target, ...props }) => {
  if (as === "a") {
    // Link button
    return (
      <a href={href} target={target}>
        <ButtonBase {...props}></ButtonBase>
      </a>
    );
  } else {
    // Regular button
    return <ButtonBase {...props}></ButtonBase>;
  }
};

Button.propTypes = {
  animation: PropTypes.oneOf([
    "pulse",
    "progress",
    "success",
    "error",
    true,
    false,
  ]),
  as: PropTypes.oneOf(["a", "button"]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  target: PropTypes.string,
  variant: PropTypes.oneOf(["fill", "outline", "ghost"]),
};

Button.defaultProps = {
  as: "button",
  disabled: false,
  fullWidth: false,
  size: "md",
  variant: "fill",
};
