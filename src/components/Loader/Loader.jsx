import "ldrs/ring";
import tailwindConfig from "../../../tailwind.config";
import PropTypes from "prop-types";

// Import the theme
const theme = tailwindConfig.theme.extend.colors;

// Colors are supposed to be border colors but the Figma file doesn't share those so I'm opening it up to any color or theme color (without opacity specification)
export const Loader = ({ color, size, ...props }) => {
  const [themeName, themeColor] = color.split("-");
  const sizeList = {
    '2xs': 20,
    xs: 30,
    sm: 40,
    md: 50,
    lg: 60,
  }
  const sizing = sizeList[size];
  if (
    themeName &&
    themeColor &&
    theme[themeName] &&
    theme[themeName][themeColor]
  ) {
    return <l-ring size={sizing} color={theme[themeName][themeColor]}></l-ring>;
  } else {
    return <l-ring size={sizing} color={color}></l-ring>;
  }
};

Loader.PropTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(["2xl", "xs", "sm", "md", "lg"]),
};

Loader.defaultProps = {
  color: "main-hit",
  size: "md",
};
