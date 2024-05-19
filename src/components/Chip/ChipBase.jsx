import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";

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
      "font-regular hover:text-piccolo text-bulma transition-all ease-in-out duration-200",
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
          default: [
            "border-2 border-transparent bg-gohan",
            isStroke && "hover:border-piccolo",
          ],
        },
      },
    }
  );

  const stylesChildren = cn(
    iconLeft && !iconRight && "mr-1",
    iconRight && !iconLeft && "ml-1"
  );

  return (
    <>
      <div
        className={cn(
          variant !== "ghost" && "border border-beerus inline-block rounded-lg",
          isStroke && "hover:border-transparent",
          className
        )}
      >
        <Component
          disabled={disabled}
          variant="ghost"
          iconLeft={iconLeft}
          iconRight={iconRight}
          icon={iconOnly && iconOnly}
          className={cn(stylesButton({ size, variant }), className)}
          {...props}
        >
          <div className="flex justify-center items-center">
            {children && <span className={stylesChildren}>{children}</span>}
          </div>
        </Component>
      </div>
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
