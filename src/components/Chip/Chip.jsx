import PropTypes from "prop-types";
import { ChipBase } from "./ChipBase";

export const Chip = ({ as, children, ...props }) => {
  return (
    <>
      {as === "div" ? (
        <div>
          <ChipBase {...props}>{children}</ChipBase>
        </div>
      ) : as === "span" ? (
        <span>
          <ChipBase {...props}>{children}</ChipBase>
        </span>
      ) : (
        <ChipBase {...props}>{children}</ChipBase>
      )}
    </>
  );
};

Chip.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  iconOnly: PropTypes.node,
  isActive: PropTypes.bool,
  isStroke: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md"]),
  variant: PropTypes.oneOf(["default", "ghost"]),
  as: PropTypes.oneOf(["button", "div", "span"]),
};

Chip.defaultProps = {
  disabled: false,
  isActive: false,
  isStroke: false,
  size: "md",
  variant: "default",
  as: "button",
};

// I think the default variant is ghost with goku bg

// OTHER PROPS
// onClick is just regular
// isActive: sets focus state by click on/off if true (or sets isStroke to true/false onClick?)
// isStroke: border onHover
// iconOnly turns it into an IconButton instead of a Button
// as determines if it's a button, div, or span (outside the base component)

// CUSTOMIZATION
// custom selected color
// custom not selected color
// text color
