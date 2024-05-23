import { cn } from "../../utils/cn";
import { NativeSelect } from "../NativeSelect/NativeSelect";
import PropTypes from "prop-types";

export const InsetNativeSelect = ({
  className,
  error,
  disabled,
  label,
  readOnly,
  placeholder,
  ...props
}) => {
  const stylesSelect = cn(
    "h-16 pt-6 px-4 text-md"
  );

  const stylesLabel = cn(
    "text-xs text-trunks absolute top-0 px-4 pt-4 pointer-events-none",
    disabled && "opacity-[0.32]"
  )

  return (
    <div className="relative cursor-default">
      <NativeSelect
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        className={cn(stylesSelect, className)}
        {...props}
      ></NativeSelect>
      <span className={cn(stylesLabel)}>{label}</span>
    </div>
  );
};

InsetNativeSelect.propTypes = {
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

InsetNativeSelect.defaultProps = {
  error: false,
  disabled: false,
};
