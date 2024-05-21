import {
  Field as HuiField,
  Label,
  Radio as HuiRadio,
  RadioGroup as HuiRadioGroup,
} from "@headlessui/react";
import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

// TODO: clicking the text doesn't switch the radio button on despite a label wrapping the child text and child, and the Indicator fill becoming visible when checked

export const Radio = ({
  children,
  className,
  defaultValue,
  disabled,
  name,
  setValue,
  value,
  ...props
}) => {
  const stylesGroup = cn("text-sm flex flex-col gap-2", disabled && "opacity-[0.32]");
  return (
    <>
      <HuiRadioGroup
        className={cn(stylesGroup, className)}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onChange={setValue}
        value={value}
        {...props}
      >
        {children}
      </HuiRadioGroup>
    </>
  );
};

Radio.displayName = "Radio";

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const OptionContext = React.createContext([false, null]);

Radio.Option = ({ children, disabled, value, className, ...props }) => {
  const stylesField = cn("flex items-center gap-2 hover:cursor-pointer", disabled && "opacity-[0.32]");

  return (
    <>
      <OptionContext.Provider value={[disabled, value]}>
        <label
          htmlFor="radioGroup"
          className={cn(stylesField, className)}
          {...props}
        >
          {children}
        </label>
      </OptionContext.Provider>
    </>
  );
};

Radio.Option.displayName = "Radio.Option";

Radio.Option.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const RadioIndicator = ({ className, ...props }) => {
  const [disabled, value] = React.useContext(OptionContext);
  const stylesIndicator = cn(
    "relative border rounded-full border-trunks data-[checked]:border-piccolo size-4 flex justify-center items-center"
  );
  const stylesFill = cn(
    "after:content-[''] after:invisible data-[checked]:after:visible after:size-0 data-[checked]:after:size-2",
    "after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
    "after:transition-all after:ease-in-out after:duration-100",
    "after:bg-piccolo after:rounded-full"
  );

  return (
    <>
        <HuiRadio
          id="radioGroup"
          disabled={disabled}
          value={value}
          className={cn(stylesIndicator, stylesFill, className)}
          {...props}
        />
    </>
  );
};

RadioIndicator.displayName = "Radio.Indicator";
Radio.Indicator = RadioIndicator;

RadioIndicator.propTypes = {
  className: PropTypes.string,
};
