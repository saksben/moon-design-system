import { cn } from "../../utils/cn";

// Base component
export const MenuItemBase = ({ children, isActive, className, ...props }) => {
  const stylesButton = cn(
    "p-2 bg-inherit hover:bg-hover-gohan rounded-md text-sm flex justify-between items-center gap-2 text-bulma w-full",
    isActive && "bg-hover-gohan"
  );
  return (
    <>
      <button className={cn(stylesButton, className)} {...props}>
        {children}
      </button>
    </>
  );
};

MenuItemBase.displayName = "MenuItemBase";
