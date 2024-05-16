import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";

// Need to remove click transitions etc

export const Tag = ({
  children,
  className,
  iconLeft,
  iconRight,
  isUppercase,
  size,
  ...props
}) => {
  // Figma specs say Tag has bg-popo text-goten, but I think it's better to have bg-bulma text-goku to be responsive to dark mode
  const stylesButton = cva(
    [
      "bg-bulma text-goku rounded px-2 font-bold hover:bg-bulma transition-none hover:cursor-auto active:scale-100 transform-none",
      isUppercase && "uppercase",
      iconLeft && "pl-0",
      iconRight && "pr-0",
    ],
    {
      variants: {
        size: {
          "2xs": "py-0 text-3xs active:text-3xs",
          xs: "py-1 text-2xs active:text-2xs",
        },
      },
    }
  );

  const stylesContainer = cn(
    "flex justify-center items-center transform-none"
  );

  const stylesIcon = cva(
    [
      "size-svg-2 flex justify-center items-center",
    ],
    {
      variants: {
        size: {
          "2xs": ["size-svg-1 m-[0.125rem]", iconLeft && "mr-1", iconRight && "ml-1"],
          xs: "mx-1",
        },
      },
    }
  );

  return (
    <Button className={cn(stylesButton({ size }), className)} {...props}>
      <div className={stylesContainer}>
        {iconLeft && (
          <span className={cn(stylesIcon({ size }))}>{iconLeft}</span>
        )}
        {children}
        {iconRight && (
          <span className={cn(stylesIcon({ size }))}>{iconRight}</span>
        )}
      </div>
    </Button>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  isUppercase: PropTypes.bool,
  size: PropTypes.oneOf(["2xs", "xs"]),
};

Tag.defaultProps = {
  isUppercase: true,
  size: "xs",
};
