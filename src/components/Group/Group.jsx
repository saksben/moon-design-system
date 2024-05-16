import React from "react";
import PropTypes from "prop-types";
import { Input } from "../Input/Input";
import { InsetInput } from "../InsetInput/InsetInput";
// import { NativeSelect } from "../NativeSelect/NativeSelect";
// import { InsetNativeSelect } from "../InsetNativeSelect";
import { cn } from "../../utils/cn";

// TODO: Will need to return once NativeSelect and InsetNativeSelect are made
// TODO: fine as is, but has 4px shared border so would be better to make all borders transparent except shared and style the wrapper div like an input

const GroupContext = React.createContext({
  disabled: false,
  error: false,
  readOnly: false,
  size: "md",
  orientation: "vertical",
});

export const Group = ({
  children,
  className,
  disabled,
  error,
  orientation,
  readOnly,
  size,
  ...props
}) => {
  const styleGroup = cn(
    "flex",
    orientation === "horizontal" && "flex-row", 
    orientation === "vertical" && "flex-col"
  );
  return (
    <GroupContext.Provider
      value={{
        disabled: disabled,
        error: error,
        readOnly: readOnly,
        size: size,
        orientation: orientation,
      }}
    >
      <div className={cn(styleGroup, className)} {...props}>
        {children}
      </div>
    </GroupContext.Provider>
  );
};

Group.displayName = "Group";

Group.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  error: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

Group.defaultProps = {
  orientation: "vertical",
  size: "md",
  error: false,
};

Group.FirstInput = ({ className, ...props }) => {
  const { disabled, error, readOnly, size, orientation } = React.useContext(GroupContext);
  const styleInput = cn(
    orientation === "horizontal" && "rounded-r-none",
    orientation === "vertical" && "rounded-b-none",
  )

  return (
    <Input
      className={cn(styleInput, className)}
      disabled={disabled}
      error={error}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  );
};

Group.FirstInput.displayName = "Group.FirstInput";

Group.FirstInput.propTypes = { className: PropTypes.string };

Group.LastInput = ({ className, ...props }) => {
  const { disabled, error, readOnly, size, orientation } = React.useContext(GroupContext);
  const styleInput = cn(
    orientation === "horizontal" && "rounded-l-none",
    orientation === "vertical" && "rounded-t-none",
  )
  return (
    <Input
      className={cn(styleInput, className)}
      disabled={disabled}
      error={error}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  );
};

Group.LastInput.displayName = "Group.LastInput";

Group.LastInput.propTypes = { className: PropTypes.string };

Group.FirstInsetInput = ({ className, ...props }) => {
  const { disabled, error, readOnly, size, orientation } = React.useContext(GroupContext);
  const styleInput = cn(
    orientation === "horizontal" && "rounded-r-none",
    orientation === "vertical" && "rounded-b-none",
  )
  return (
    <InsetInput
      className={cn(styleInput, className)}
      disabled={disabled}
      error={error}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  );
};

Group.FirstInsetInput.displayName = "Group.FirstInsetInput";

Group.FirstInsetInput.propTypes = { className: PropTypes.string };

Group.LastInsetInput = ({ className, ...props }) => {
  const { disabled, error, readOnly, size, orientation } = React.useContext(GroupContext);
  const styleInput = cn(
    orientation === "horizontal" && "rounded-l-none",
    orientation === "vertical" && "rounded-t-none"
  )
  return (
    <InsetInput
      className={cn(styleInput, className)}
      disabled={disabled}
      error={error}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  );
};

Group.LastInsetInput.displayName = "Group.LastInsetInput";

Group.LastInsetInput.propTypes = { className: PropTypes.string };

Group.FirstSelect = ({ className, ...props }) => {
  const { disabled, error, readOnly, size, orientation } = React.useContext(GroupContext);
  const styleSelect = cn(
    orientation === "horizontal" && "rounded-r-none",
    orientation === "vertical" && "rounded-b-none"
  )
  return (
    <NativeSelect
      className={cn(styleSelect, className)}
      disabled={disabled}
      error={error}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  );
};

Group.FirstSelect.displayName = "Group.FirstSelect";

Group.FirstSelect.propTypes = { className: PropTypes.string };

Group.LastSelect = ({ className, ...props }) => {
  const { disabled, error, readOnly, size, orientation } = React.useContext(GroupContext);
  const styleSelect = cn(
    orientation === "horizontal" && "rounded-l-none",
    orientation === "vertical" && "rounded-t-none"
  )
  return (
    <NativeSelect
      className={cn(styleSelect, className)}
      disabled={disabled}
      error={error}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  );
};

Group.LastSelect.displayName = "Group.LastSelect";

Group.LastSelect.propTypes = { className: PropTypes.string };

Group.FirstInsetSelect = ({ className, ...props }) => {
  const { disabled, error, readOnly, size, orientation } = React.useContext(GroupContext);
  const styleSelect = cn(
    orientation === "horizontal" && "rounded-r-none",
    orientation === "vertical" && "rounded-b-none"
  )
  return (
    <InsetNativeSelect
      className={cn(styleSelect, className)}
      disabled={disabled}
      error={error}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  );
};

Group.FirstInsetSelect.displayName = "Group.FirstInsetSelect";

Group.FirstInsetSelect.propTypes = { className: PropTypes.string };

Group.LastInsetSelect = ({ className, ...props }) => {
  const { disabled, error, readOnly, size, orientation } = React.useContext(GroupContext);
  const styleSelect = cn(
    orientation === "horizontal" && "rounded-l-none",
    orientation === "vertical" && "rounded-t-none"
  )
  return (
    <InsetNativeSelect
      className={cn(styleSelect, className)}
      disabled={disabled}
      error={error}
      readOnly={readOnly}
      size={size}
      {...props}
    />
  );
};

Group.LastInsetSelect.displayName = "Group.LastInsetSelect";

Group.LastInsetSelect.propTypes = { className: PropTypes.string };

// -just slap 2 inputs together and edit their border top/bottom/left/right
// -direction: just use flex and flexdirection
// -8 subcomponents, 2 used at a time: FirstInput, LastInput, FirstInsetInput, LastInsetInput, FirstSelect, LastSelect, FirstInsetSelect, LastInsetSelect
// they already have size, hover, focus, error, disabled, and readOnly

// OTHER PROPS
// -orientation
// -size
// -error
// -className
