import "ldrs/ring";
import tailwindConfig from "../../../tailwind.config";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

// Import the theme
const theme = tailwindConfig.theme.extend.colors;

// Colors are supposed to be on border color, but I'm making it just by color (theme colors and regular colors work)
export const Loader = ({ color, size, className, ...props }) => {
  const sizeList = {
    "2xs": 20,
    xs: 30,
    sm: 40,
    md: 50,
    lg: 60,
  };
  const sizing = sizeList[size];
  // If it's a theme color, set color to theme color
  if (theme[color]) {
    return (
      // Note: the default l-ring has space on the bottom, so needs a div with flex to get rid of it
      <div className="flex">
        <l-ring
          size={sizing}
          color={theme[color]}
          className={cn("pb-0", className)}
          {...props}
        ></l-ring>
      </div>
    );
    // Else if it's a regular or rgb color, set color to that color
  } else {
    return (
      <div className="flex">
        <l-ring size={sizing} color={color} {...props}></l-ring>
      </div>
    );
  }
};

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(["2xs", "xs", "sm", "md", "lg"]),
  className: PropTypes.string,
};

Loader.defaultProps = {
  color: "hit",
  size: "md",
};
