import { cn } from "../../utils/cn";
import { MenuItemBase } from "./MenuItemBase";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";
import React from "react";
import PropTypes from "prop-types";

// TODO: Radio button logic is not working. Registers click through Context down to MenuItem.Radio (though logs twice for some reason) but doesn't update from switched on
// TODO: get radio/checkbox to be selected when any part of MenuItem is clicked

const MenuContext = React.createContext(false);

// MenuItem component
export const MenuItem = ({
  as,
  children,
  href,
  isSelected,
  onClick,
  target,
  ...props
}) => {
  if (as === "a") {
    // Link MenuItem
    return (
      <MenuContext.Provider value={isSelected}>
        <a href={href} target={target}>
          {
            <MenuItemBase onClick={onClick} {...props}>
              {children}
            </MenuItemBase>
          }
        </a>
      </MenuContext.Provider>
    );
  } else {
    // Button MenuItem
    return (
      <MenuContext.Provider value={isSelected}>
        <MenuItemBase onClick={onClick} {...props}>
          {children}
        </MenuItemBase>
      </MenuContext.Provider>
    );
  }
};

MenuItem.propTypes = {
  as: PropTypes.oneOf(["a", "button"]),
  isActive: PropTypes.bool,
  isSelected: PropTypes.bool,
  className: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  as: "button",
};

// Title component
MenuItem.Title = ({ children, ...props }) => {
  return (
    <>
      <div className={cn("w-full text-start text-bulma")} {...props}>
        {children}
      </div>
    </>
  );
};

MenuItem.Title.displayName = "MenuItem.Title";

// MultiTitle component
MenuItem.MultiTitle = ({ title, text, ...props }) => {
  const stylesDiv = cn("flex flex-col flex-grow w-0");
  const stylesText = cn("text-xs text-trunks truncate w-full text-start");
  return (
    <>
      <div className={cn(stylesDiv)} {...props}>
        <MenuItem.Title {...props}>{title}</MenuItem.Title>
        <span className={stylesText} {...props}>
          {text}
        </span>
      </div>
    </>
  );
};

MenuItem.MultiTitle.displayName = "MenuItem.MultiTitle";

// Checkbox component
MenuItem.Checkbox = ({ ...props }) => {
  return (
    <div className="flex justify-center items-center">
      <Checkbox {...props} />
    </div>
  );
};

MenuItem.Checkbox.displayName = "MenuItem.Checkbox";

// Radio component
MenuItem.Radio = ({ ...props }) => {
  const isSelected = React.useContext(MenuContext);
  console.log("isSelected = " + isSelected);
  return (
    <div className="flex justify-center items-center">
      <Radio {...props}>
        <Radio.Option {...props}>
          <Radio.Indicator data-checked={isSelected} {...props} />
        </Radio.Option>
      </Radio>
    </div>
  );
};

MenuItem.Radio.displayName = "MenuItem.Radio";
