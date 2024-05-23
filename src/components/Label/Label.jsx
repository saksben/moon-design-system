import { cn } from "../../utils/cn";

export const Label = ({ disabled, className, children, ...props }) => {
  const stylesLabel = cn(
    "my-2 flex",
    disabled && "opacity-[0.32] cursor-not-allowed"
  );
  return (
    <>
      <label className={cn(stylesLabel, className)} {...props}>
        {children}
      </label>
    </>
  );
};
