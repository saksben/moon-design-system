import { cn } from "../../utils/cn";
import { Input } from "../Input/Input";
import PropTypes from "prop-types";
import React from "react";

const InputContext = React.createContext({ isFocused: false, type: "text", value: false, readOnly: false});

// TODO: fix Label returning on blur when there is a value typed

export const InsetInput = ({
  className,
  disabled,
  error,
  readOnly,
  value,
  placeholder,
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

  const stylesInput = cn("h-14 p-4 pl-[1.0625rem]", children && "pb-0");

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    !readOnly && !disabled && setFocus(false);
  };

  return (
    <InputContext.Provider value={{ isFocused, type: type, value: value, readOnly: readOnly }}>
      <div className={cn(stylesDiv, className)}>
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          fade={children && true}
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          type={type}
          value={value}
          placeholder={placeholder}
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
  const { isFocused, type, value, readOnly } = React.useContext(InputContext);

  const stylesFloatLabel = cn(
    "absolute text-md text-trunks top-[1.125rem] left-5 pointer-events-none",
    "transition-all duration-200",
    isFocused && !value && "top-3 left-5 text-xs",
    readOnly && "top-3 left-5 text-xs",
    type === "datetime-local" && "top-3 left-5 text-xs",
    type === "date" && "top-3 left-5 text-xs",
    type === "time" && "top-3 left-5 text-xs"
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

// CUSTOMIZATION
// InsetInput puts a class on Input for text color
// custom label text color via className text
