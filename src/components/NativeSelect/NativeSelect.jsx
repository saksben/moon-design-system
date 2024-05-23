import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import ControlsChevronDown from "../../assets/icons/components/ControlsChevronDown";

export const NativeSelect = ({
  size,
  error,
  disabled,
  placeholder,
  readOnly,
  className,
  children,
  ...props
}) => {
  // Styles for wrapper
  const stylesDiv = "w-full max-w-md relative";

  // Styles for select
  const stylesSelect = cva(
    cn(
      "box-border w-full appearance-none rounded-lg border-2 border-beerus bg-goku text-bulma text-sm cursor-pointer placeholder:text-chichi",
      "focus:outline-none focus:border-piccolo hover:border-hover-beerus",
      error && "border-chichi hover:border-chichi focus:border-chichi",
      (disabled || readOnly) &&
        "hover:border-beerus focus:border-beerus cursor-not-allowed",
      readOnly && "text-trunks",
      disabled && "opacity-[0.32]"
    ),
    {
      variants: {
        size: {
          sm: "h-8 px-2",
          md: "h-10 px-3",
          lg: "h-12 px-3 text-md",
        },
      },
    }
  );

  // Styles for icon wrapper
  const stylesSpan =
    "flex justify-center items-center pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-3";
  // Styles for dropdown icon
  const stylesIcon = "size-4 text-bulma";

  return (
    <>
      <div className={stylesDiv}>
        <select
          disabled={disabled || readOnly}
          className={cn(stylesSelect({ size }), className)}
          {...props}
        >
          {/* Optional placeholder */}
          {placeholder && (
            <option value="" hidden>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {/* Dropdown icon */}
        <span className={stylesSpan}>
          <ControlsChevronDown className={stylesIcon} />
        </span>
      </div>
    </>
  );
};

NativeSelect.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

NativeSelect.defaultProps = {
  size: "md",
};
