import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";
import "ldrs/ring";

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
            "bg-main-piccolo text-main-goten",
            !disabled && "hover:bg-hover-main-piccolo",
          ],
          outline: [
            "border border-main-trunks text-main-bulma",
            !disabled && "hover:bg-hover-main-heles",
          ],
          ghost: ["text-main-trunks", !disabled && "hover:bg-main-jiren"],
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
        // I also don't see any difference that "success" has from a regular Button with an icon as {children}
        animation: {
          progress: "px-10",
          success: "",
          error:
            "bg-supportive-chiChi-100 text-main-goten hover:bg-supportive-chiChi-100",
          pulse: "animate-bounce-x",
        },
      },
    }
  );

  // Style for when animation='pulse'
  const stylesPulse = cn(
    "absolute inset-0 bg-inherit rounded-lg animate-ping-slow"
  );

  // Style for div containing children, icons, and progress animation
  const stylesContainer = cn(
    "flex justify-center items-center transform scale-100 group-active:scale-95"
  );

  // Icon styles
  const stylesIcon = cva(
    [
      "size-svg-3 flex justify-center items-center group-active:size-[1.375rem]",
      !disabled && "transition-all ease-in-out duration-200",
    ],
    {
      variants: {
        size: {
          xs: "mx-1",
          sm: "mx-1",
          md: "mx-2",
          lg: "mx-3",
          xl: "mx-4",
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
            {/* iconLeft icon */}
            {iconLeft && (
              <span className={cn(stylesIcon({ size }))}>{iconLeft}</span>
            )}
            {/* progress animation loader icon */}
            {animation === "progress" && (
              <l-ring size="30" color="white"></l-ring>
            )}
            {/* Children from user */}
            {children}
            {/* iconRight icon */}
            {iconRight && (
              <span className={cn(stylesIcon({ size }))}>{iconRight}</span>
            )}
          </div>
        </button>
      </div>
    </>
  );
};
