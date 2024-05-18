import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import ControlsMinus from "../../assets/icons/components/ControlsMinus";
import GenericCheckAlternative from "../../assets/icons/components/GenericCheckAlternative";

// TODO: state logic works, but for some reason doesn't update when manipulated in exercise code
  // May need state logic in this component even if the user creates state logic

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
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.indeterminate = indeterminate;
  }, [ref, indeterminate]);

  // Set default state: checked, unchecked, or indeterminate
  const defaultChecked = checked
    ? [true, false]
    : indeterminate
      ? [true, true]
      : [false, false];
  const [check, setChecked] = React.useState(defaultChecked);

  React.useEffect(() => {
    console.log(check);
  }, [check]);

  // Checkbox base styles
  const styleCheckbox = cn(
    "inline-block flex items-center justify-center size-svg-3 rounded-md text-goku transition ease-in-out duration-200",
    // Variant styles
    !check[0]
      ? "bg-transparent border-[1.5px] border-trunks"
      : `bg-${bgColor}`,
    disabled && "opacity-[32%]"
  );
  // Indicator styles
  const styleIndicator = cn(
    "flex items-center justify-center",
    readOnly || disabled ? "cursor-not-allowed" : "cursor-pointer"
  );
  // Icon styles
  const styleIcon = cn("size-svg-3 rounded-md");

  // Flip the checkbox on or off when clicked
  const handleChange = (e) => {
    setChecked([!check[0], check[1]]);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <div className={cn(styleCheckbox, className)}>
        <label className={cn("relative")}>
          <input
            type="checkbox"
            disabled={disabled || readOnly}
            id={id}
            ref={ref}
            className="appearance-none absolute"
            onChange={handleChange}
            {...props}
          />
          {/* Render the appropriate icon for checkbox*/}
          <div className={cn(styleIndicator)}>
            {check[0] && !check[1] && (
              <GenericCheckAlternative
                className={cn(styleIcon, className)}
              />
            )}
            {check[0] && check[1] && (
              <ControlsMinus className={cn(styleIcon, className)} />
            )}
            {!check[0] && <div className={cn(styleIcon, className)}></div>}
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
};

Checkbox.defaultProps = {
  bgColor: "piccolo",
  indeterminate: false,
  readOnly: false,
  disabled: false,
};
