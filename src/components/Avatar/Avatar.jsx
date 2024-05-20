import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

export const Avatar = ({ children, className, imageUrl, size, ...props }) => {

    const stylesDiv = cva(
        "relative border rounded-lg flex justify-center items-center font-bold",
        {
            variants: {
                size: {
                    xs: "size-6 text-2xs",
                    sm: "size-8 text-xs",
                    md: "size-10 text-sm",
                    lg: "size-12 text-md",
                    xl: "size-14 text-lg",
                    "2xl": "size-16 text-xl",
                }
            }
        }
    )

    const stylesIcon = cn(
        "flex justify-center items-center",
        size === "xs" ? "size-svg-2" : size === "2xl" ? "size-svg-4" : "size-svg-3"
    )

  return (
  <div className={cn(stylesDiv({size}), className)} style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 
  'cover', backgroundPosition: 'center'}} {...props}>
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

Avatar.Status = ({ ...props }) => {
    const stylesBorder = cn("absolute rounded-full")
    const stylesIndicator = cn("bg-roshi")
  return (
  <div className={cn(stylesBorder)} {...props}>
    <div className={cn(stylesIndicator)}>

    </div>
  </div>
  );
};

Avatar.Status.displayName = "Avatar.Status";

Avatar.Status.propTypes = {
  className: PropTypes.string,
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "right"]),
  }),
};

// can be initials or a picture
// icons and initials are {children}
// initials are uppercase

// OTHER PROPS
// imageURL

// CUSTOMIZATION
// border radius
// bg color
// status badge color
// font color
// status badge outer stroke thickness
// status badge outer stroke color

// Avatar.Status subcomponent
// className
// position with h/v object
// has a white border
