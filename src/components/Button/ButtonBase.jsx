import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";
import "ldrs/ring";
import { Loader } from "../Loader/Loader";
import GenericCheckAlternative from "../../assets/icons/components/GenericCheckAlternative";

// PropTypes defined in ./Button
export const ButtonBase = ({
  animation,
  children,
  className,
  disabled,
  fullWidth,
  iconLeft,
  iconRight,
  onClick,
  size,
  variant,
  ...props
}) => {
  // Button styles
  const stylesButton = cva(
    // Base style
    [
      "relative rounded-lg font-bold justify-center items-center disabled:opacity-[32%] disabled:cursor-not-allowed",
      fullWidth && "w-full",
    ],
    {
      // Variant styles
      variants: {
        variant: {
          fill: [
            "bg-piccolo text-goten",
            !disabled && "hover:bg-hover-piccolo",
          ],
          outline: [
            "border border-trunks text-bulma",
            !disabled && "hover:bg-hover-heles",
          ],
          ghost: ["text-trunks", !disabled && "hover:bg-jiren"],
        },
        size: {
          xs: ["px-2 py-1 text-xs", iconLeft && "pl-0", iconRight && "pr-0"],
          sm: ["px-3 py-1 text-sm", iconLeft && "pl-0", iconRight && "pr-0"],
          md: [
            "px-[1.375rem] py-2 text-sm",
            iconLeft && "pl-0 pr-4",
            iconRight && "pr-0 pl-4",
          ],
          lg: ["px-4 py-3 text-md", iconLeft && "pl-0", iconRight && "pr-0"],
          xl: ["px-6 py-4 text-md", iconLeft && "pl-0", iconRight && "pr-0"],
        },
        disabled: {
          false: [
            animation !== "error" &&
              animation !== "pulse" &&
              "transition-all ease-in-out duration-200",
            "active:text-sm flex group transform scale-100 active:scale-95",
          ],
        },
        // I have no idea what the "true" or "false" animations do
        animation: {
          progress: "px-8",
          success: "px-8",
          error: "bg-chiChi text-goten hover:bg-chiChi",
          pulse: "animate-bounce-x",
        },
      },
    }
  );

  // Style for when animation='pulse'
  const stylesPulse = cn(
    "absolute inset-0 bg-inherit rounded-lg animate-ping-slow"
  );

  // Style for div containing children, icons, and progress and success animations
  const stylesContainer = cn("flex justify-center items-center");

  // Icon styles
  const stylesIcon = cva(
    [
      "flex justify-center items-center group-active:size-[1.375rem] transform scale-100 group-active:scale-95",
      !disabled && "transition-all ease-in-out duration-200",
      size === "xs" ? "size-svg-2" : "size-svg-3",
    ],
    {
      variants: {
        size: {
          xs: "mx-1 size-svg-2",
          sm: "mx-1 size-svg-3 ",
          md: "mx-2 size-svg-3 ",
          lg: "mx-3 size-svg-3 ",
          xl: "mx-4 size-svg-3 ",
        },
      },
    }
  );

  return (
    <>
      <div className={cn(stylesButton)}>
        <button
          data-testid={animation}
          className={cn(
            stylesButton({ variant, size, disabled, animation }),
            className
          )}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          {/* pulse animation ping */}
          {animation === "pulse" && <span className={cn(stylesPulse)}></span>}

          <div className={cn(stylesContainer)}>
            {/* Left icon */}
            {iconLeft && (
              <span className={cn(stylesIcon({ size }))}>{iconLeft}</span>
            )}
            {/* If it's a button with progress or success animation, show that instead of children */}
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
              <span>{children}</span>
            )}
            {/* Right icon */}
            {iconRight && (
              <span className={cn(stylesIcon({ size }))}>{iconRight}</span>
            )}
          </div>
        </button>
      </div>
    </>
  );
};
