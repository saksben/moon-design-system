import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import React from "react";

// TODO: return when NativeSelect and InsetNativeSelect are complete

const FormContext = React.createContext([null])

export const Form = ({ children, className, size, ...props }) => {
  return (
    <>
      <FormContext.Provider value={[size]}>
          <form className={cn(className)} {...props}>
            {children}
          </form>
      </FormContext.Provider>
    </>
  );
};

Form.displayName = "Form";

Form.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Form.defaultProps = {
  size: "md",
};

Form.Item = ({ children, className, disabled, error, ...props }) => {
    const [size] = React.useContext(FormContext)
  const child = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
        return React.cloneElement(child, {
            error,
            disabled,
            size,
            ...props,
          })
    }
    return child
  })  
  return <div className={cn(className)}>{child}</div>;
};

Form.Item.displayName = "Form.Item";

Form.Item.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
