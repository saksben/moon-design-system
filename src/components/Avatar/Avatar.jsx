import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

// Avatar component
export const Avatar = ({ children, className, imageUrl, size, ...props }) => {
  // Styles for Avatar
  const stylesAvatar = cva(
    "relative border border-beerus rounded-lg flex justify-center items-center font-bold text-bulma",
    {
      variants: {
        size: {
          xs: "size-6 text-2xs",
          sm: "size-8 text-xs",
          md: "size-10 text-sm",
          lg: "size-12 text-md",
          xl: "size-14 text-lg",
          "2xl": "size-16 text-xl",
        },
      },
    }
  );

  // Styles for Icon
  const stylesIcon = cn(
    "flex justify-center items-center uppercase",
    size === "xs" ? "size-svg-2" : size === "2xl" ? "size-svg-4" : "size-svg-3"
  );

  return (
    <div
      className={cn(stylesAvatar({ size }), className)}
      // Lets user upload image as bg
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      {...props}
    >
      {<div className={cn(stylesIcon)}>{children}</div>}
    </div>
  );
};

Avatar.displayName = "Avatar";

Avatar.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
};

Avatar.defaultProps = {
  size: "md",
};

// Status component
Avatar.Status = ({ className, position, ...props }) => {
  const stylesIndicator = cn(
    "absolute bottom-0 right-0",
    "rounded-full size-3 bg-roshi border-2 border-gohan",
    position["vertical"] === "top" ? "top-0" : "bottom-0",
    position["horizontal"] === "left" ? "left-0" : "right-0"
  );
  return <div className={cn(stylesIndicator, className)} {...props}></div>;
};

Avatar.Status.displayName = "Avatar.Status";

Avatar.Status.propTypes = {
  className: PropTypes.string,
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "right"]),
  }),
};

Avatar.Status.defaultProps = {
  position: { vertical: "bottom", horizontal: "right" },
};
