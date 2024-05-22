import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";

// TODO: The border is causing issues on isStroke because it's going from 1px to 2px
// TODO: the shrinking from the Button/IconButton is at odds with the border color transition, may be fixed by wrapping in a div for the border

export const ChipBase = ({
  children,
  disabled,
  iconLeft,
  iconRight,
  iconOnly,
  isActive,
  isStroke,
  size,
  variant,
  className,
  ...props
}) => {
  const Component = iconOnly ? IconButton : Button;

  const stylesButton = cva(
    [
      "font-regular hover:text-piccolo text-bulma transition-none ease-in-out duration-200 active:scale-100 transform-none",
      isStroke && "hover:border-2 hover:border-piccolo",
      iconLeft && !iconRight && "mr-1",
      iconRight && !iconLeft && "ml-1",
    ],
    {
      variants: {
        size: {
          sm: "py-1 px-1 h-8",
          md: "py-2 px-2 h-10",
        },
        variant: {
          ghost: "bg-transparent",
          default: ["border border-beerus bg-goku"],
        },
      },
    }
  );

  const stylesIsActive = cn(isActive && "bg-jiren text-piccolo");

  const stylesContainer = cn("flex justify-center items-center transform-none")

  const stylesChildren = cn(
    "mx-1"
  );

  return (
    <>
      <Component
        disabled={disabled}
        variant="ghost"
        icon={iconOnly && iconOnly}
        className={cn(
          stylesButton({ size, variant }),
          className,
          stylesIsActive
        )}
        {...props}
      >
        <div className={stylesContainer}>
            {iconLeft && <span>{iconLeft}</span>}
          {children && <span className={stylesChildren}>{children}</span>}
          {iconRight && <span>{iconRight}</span>}
        </div>
      </Component>
    </>
  );
};

// Chip.propTypes = {
//     children: PropTypes.node,
//     disabled: PropTypes.bool,
//     iconLeft: PropTypes.node,
//     iconRight: PropTypes.node,
//     iconOnly: PropTypes.node,
//     isActive: PropTypes.bool,
//     isStroke: PropTypes.bool,
//     size: PropTypes.oneOf(["sm", "md"]),
//     variant: PropTypes.oneOf(["default", "ghost"]),
//     as: PropTypes.oneOf(["button", "div", "span"])
// }

// Chip.defaultProps = {
//     disabled: false,
//     isActive: false,
//     isStroke: false,
//     size: "md",
//     variant: "default",
//     as: "button",
// }

// I think the default variant is with gohan bg

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
