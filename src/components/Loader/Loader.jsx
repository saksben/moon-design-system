import "ldrs/ring";
import tailwindConfig from "../../../tailwind.config";
import PropTypes from "prop-types";

// Import the theme
const theme = tailwindConfig.theme.extend.colors;

// Colors are supposed to be on border color, but I'm making it just by color (theme colors and regular colors work)
export const Loader = ({ color, size, ...props }) => {
  const sizeList = {
    '2xs': 20,
    xs: 30,
    sm: 40,
    md: 50,
    lg: 60,
  }
  const sizing = sizeList[size];
  if (
  theme[color]
  ) {
    return <l-ring size={sizing} color={theme[color]} {...props}></l-ring>;
  } else {
    console.log(color)
    return <l-ring size={sizing} color={color} {...props}></l-ring>;
  }
};

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(["2xl", "xs", "sm", "md", "lg"]),
};

Loader.defaultProps = {
  color: "hit",
  size: "md",
};
