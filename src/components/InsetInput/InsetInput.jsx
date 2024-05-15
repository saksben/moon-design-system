import { cn } from "../../utils/cn";
import { Input } from "../Input/Input";
import PropTypes from "prop-types";
import React from "react";

const InputContext = React.createContext({ isFocused: false, type: "text" });

export const InsetInput = ({
  className,
  disabled,
  error,
  readOnly,
  value,
  type,
  children,
  ...props
}) => {
  const defaultFocus =
    value ||
    disabled ||
    readOnly ||
    type === "date" ||
    type === "time" ||
    type === "datetime-local"
      ? true
      : false;
  const [isFocused, setFocus] = React.useState(defaultFocus);

  const stylesDiv = cn("relative");

  const stylesInput = cn("h-14 p-4 pl-[1.0625rem] pb-0");

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    !readOnly && !disabled && setFocus(false);
  };

  return (
    <InputContext.Provider value={{ isFocused, type: type }}>
      <div className={cn(stylesDiv, className)}>
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          fade={true}
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          type={type}
          value={value}
          className={cn(stylesInput, className)}
          {...props}
        />
        <div className={disabled && "opacity-[32%]"}>{children}</div>
      </div>
    </InputContext.Provider>
  );
};

InsetInput.displayName = "InsetInput";

InsetInput.propTypes = {
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

InsetInput.Label = ({ className, children, ...props }) => {
  const { isFocused, type } = React.useContext(InputContext);

  const stylesFloatLabel = cn(
    "absolute text-md text-main-trunks top-5 left-5 pointer-events-none",
    "transition-all duration-200",
    isFocused && "top-3 left-5 text-xs"
  );

  const typeList = {
    number: "Number",
    date: "Date",
    time: "Time",
    "datetime-local": "Datetime local",
    email: "Email",
    password: "Password",
    search: "Search",
    tel: "Tel",
    url: "Url",
    text: "Label",
  };

  const typeLabel = typeList[type] || children;

  return (
    <span className={cn(stylesFloatLabel, className)} {...props}>
      {typeLabel}
    </span>
  );
};

InsetInput.Label.displayName = "InsetInput.Label";

InsetInput.Label.propTypes = {
  className: PropTypes.string,
};

// Floating label (Label)
// -Text appears via {value} prop or placeholder
// -InsetInput is a wrapper (styleDiv), holding a child Input (styleInput) and a user-provided InsetInput.Label
// -Animation: input part is && on focus and a div? and goes from transparent text to regular. Also, push down with the 'label' class
// -Animation: label goes from md text to small

// STATES
// -hover
// -focus
// -active
// -disabled: auto label and placeholder. Placeholder='Placeholder'
// -error: placeholder='Placeholder'
// -read only: auto label and value text

// -type: type is the floating label text

// CUSTOMIZATION
// InsetInput puts a class on Input for text color
// custom label text color via className text
