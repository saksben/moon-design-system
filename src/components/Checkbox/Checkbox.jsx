import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import * as RadCheckbox from "@radix-ui/react-checkbox";
import ControlsMinusIcon from "../../assets/icons/components/ControlsMinusIcon";
import GenericCheckAlternativeIcon from "../../assets/icons/components/GenericCheckAlternativeIcon";

// TODO: state logic works, but for some reason doesn't update when manipulated in exercise code

export const Checkbox = ({
  bgColor,
  checked,
  indeterminate,
  readOnly,
  disabled,
  onChange,
  id,
  className,
  ...props
}) => {
  const defaultChecked = checked ? checked : false;
  const [check, setIsChecked] = React.useState(defaultChecked);

  // Checkbox base styles
  const styleCheckbox = cn(
    "inline-block flex items-center justify-center size-svg-2 rounded-md text-main-goten transition ease-in-out duration-200",
    check === false ? 'bg-transparent border-[1.5px] border-main-trunks' : `bg-${bgColor}`,
    // Variant styles
    readOnly && "pointer-events-none",
    disabled && "disabled:opacity-[32%] disabled:cursor-not-allowed"
  );
  // Indicator styles
  const styleIndicator = cn("flex items-center justify-center cursor-pointer");
  // Icon styles
  const styleIcon = cn("size-svg-2 rounded-md ");

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(e)
    }
  }

  React.useEffect(() => {
    console.log(check);
  }, [check]);

  return (
    <>
      <div className={cn(styleCheckbox)}>
        <label className="relative">
          <input
            type="checkbox"
            checked={check}
            id={id}
            className="appearance-none absolute"
            onChange={
              handleChange
            }
            {...props}
          />
          <div className={cn(styleIndicator)}>
            {check && (
              <GenericCheckAlternativeIcon
                className={cn(styleIcon, className)}
              />
            )}
            {check === false && <div className={cn(styleIcon, className)}></div>}
          </div>
        </label>
      </div>
    </>
  );
};

Checkbox.propTypes = {
  bgColor: PropTypes.string,
  checked: PropTypes.oneOf([true, false, "indeterminate"]),
  indeterminate: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
}

Checkbox.defaultProps = {
  bgColor: "main-piccolo",
  checked: false,
};
