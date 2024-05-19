import React from "react";
import PropTypes from "prop-types";
import { Tag } from "../Tag/Tag";
import { Input } from "../Input/Input";
import ControlsClose from "../../assets/icons/components/ControlsClose";
import { cn } from "../../utils/cn";

const TagsInputContext = React.createContext(null);

// TagsInput component
export const TagsInput = ({
  selected,
  label,
  size,
  type,
  placeholder,
  isError,
  disabled,
  className,
  onEnter,
  onClear,
  children,
  ...props
}) => {
  const [value, setValue] = React.useState("");

  // Set the Input text and {value} (to be passed to Tag)
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    // If user presses "Enter" and Input text isn't blank, use onEnter callback function (user-created) to create a Tag with the text {value}, then reset Input text and {value}
    if (e.key === "Enter" && value !== "") {
      onEnter(value);
      setValue("");
    } else if (
      // Else if user presses "Backspace" and Input text is blank, delete the most recent Tag
      (value === "" && e.key === "Backspace")
    ) {
      onClear(selected.length - 1);
    }
  };

  // Styles for wrapper around {children}
  const stylesChildWrapper = cn("w-full flex flex-wrap gap-x-1 gap-y-0.5 mb-1 cursor-auto")

  return (
    <TagsInputContext.Provider
      value={[onClear, size, disabled]}
    >
      <div>
        <Input
          label={label} 
          size={size}
          type={type}
          placeholder={placeholder}
          error={isError}
          disabled={disabled}
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
          className={cn(className)}
          {...props} // NOTE: console logs an error that this generates invalid props "0" and "1" for some reason. Removing {...props} fixes it.
        >
          <div className={cn(stylesChildWrapper)}>
            {children}
          </div>
        </Input>
      </div>
    </TagsInputContext.Provider>
  );
};

TagsInput.displayName = "TagsInput";

TagsInput.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf([
    "date",
    "datetime-local",
    "email",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "time",
    "url",
    "string",
  ]),
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onEnter: PropTypes.func,
  onClear: PropTypes.func,
};

TagsInput.defaultProps = {
  size: "md",
  type: "text",
  isError: false,
  disabled: false,
};

// TagsInput.SelectedItem component
TagsInput.SelectedItem = ({ index, className, label, ...props }) => {
  const [onClear, size, disabled] = React.useContext(TagsInputContext);

  // When icon clicked, delete Tag
  const handleClick = () => {
    !disabled && onClear(index);
  };

  const stylesIcon = cn(
    'cursor-pointer', 
    size === "sm" ? "size-svg-1": 'size-svg-2'
  )

  return (
    <Tag
      size={size === "sm" ? "2xs" : "xs"}
      iconRight={<span onClick={handleClick}><ControlsClose className={cn(stylesIcon)} /></span>}
      className={cn(className, disabled && "hover:cursor-not-allowed")}
      {...props}
    >
      {label}
    </Tag>
  );
};

TagsInput.SelectedItem.displayName = "TagsInput.SelectedItem";

TagsInput.SelectedItem.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
