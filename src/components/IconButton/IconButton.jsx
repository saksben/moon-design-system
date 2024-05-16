import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import GenericCheckAlternative from "../../assets/icons/components/GenericCheckAlternative";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Loader } from "../Loader/Loader";

export const IconButton = ({
  animation,
  children,
  className,
  icon,

  size,
  ...props
}) => {
  // Styles for Button
  const stylesButton = cva("", {
    variants: {
      size: {
        xs: "p-1",
        sm: "p-1",
        md: "p-2",
        lg: "p-3",
        xl: "p-4",
      },
    },
  });

  // Styles for Icon
  const stylesIcon = cn(
    "size-svg-3 flex justify-center items-center ",
    size === "xs" && "size-svg-2"
  );

  return (
    <Button
      animation={
        animation === "pulse" || animation === "error" ? animation : ""
      }
      className={cn(stylesButton({ size }), className)}
      {...props}
    >
      {/* If it's a button with progress or success animation, show that instead of Icon */}
      {animation === "progress" ? (
        <span className={stylesIcon}>
          <Loader
            size={size === "xs" || size === "sm" ? "2xs" : "xs"}
            color="goten"
          />
        </span>
      ) : animation === "success" ? (
        <span className={stylesIcon}>
          <GenericCheckAlternative />
        </span>
      ) : (
        <span className={cn(stylesIcon)}>{icon}</span>
      )}
      {/* I really don't know what the children node is for because it's an icon button, but it's in the Figma specs */}
      {children}
    </Button>
  );
};

IconButton.propTypes = {
  animation: PropTypes.oneOf(["progress", "success", "error", "pulse"]),
  as: PropTypes.oneOf(["a", "button"]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "ghost"]),
};

IconButton.defaultProps = {
  as: "button",
  size: "md",
  variant: "fill",
};
