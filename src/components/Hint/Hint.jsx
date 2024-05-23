import { cn } from "../../utils/cn";

export const Hint = ({ disabled, error, className, children }) => {
  const stylesDiv = cn(
    "mt-2 flex gap-1 text-trunks text-xs",
    disabled && "opacity-[0.32] cursor-not-allowed",
    error && "text-chichi"
  );
  return <span className={cn(stylesDiv, className)}>{children}</span>;
};
