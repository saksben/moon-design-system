import { cn } from "../../utils/cn";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import ControlsClose from "../../assets/icons/components/ControlsClose";

// Alert component
export const Alert = ({ className, ...props }) => {
  // Styles for wrapper
  const stylesWrapper = cn("bg-goku text-bulma text-sm w-full relative rounded-md");
  //   Styles for Alert
  const stylesAlert = cn("p-4 flex flex-col justify-center gap-2 rounded-lg");
  return (
    <>
      <div className={stylesWrapper}>
        <div className={cn(stylesAlert, className)} {...props}></div>
      </div>
    </>
  );
};

Alert.displayName = "Alert";

Alert.propTypes = {
  className: PropTypes.string,
};

// Title component
Alert.Title = ({ children, className, ...props }) => {
  // Styles for Title
  const stylesTitle = cn("text-sm font-bold flex items-center gap-3");
  return (
    <>
      <span className={cn(stylesTitle, className)} {...props}>
        {children}
      </span>
    </>
  );
};

Alert.Title.displayName = "Alert.Title";

Alert.Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// Message component
Alert.Message = ({ children, className, ...props }) => {
  // Styles for Message
  const stylesMessage = cn("text-sm flex items-center gap-3");
  return (
    <>
      <span className={cn(stylesMessage, className)} {...props}>
        {children}
      </span>
    </>
  );
};

Alert.Message.displayName = "Alert.Message";

Alert.Message.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// Close component
Alert.Close = ({ onClick, ...props }) => {
  // Styles for wrapper
  const stylesWrapper =
    "absolute top-1/2 transform -translate-y-1/2 right-4 z-10";
  // Styles for Close
  const stylesClose = "p-1 rounded-md";

  return (
    <div className={stylesWrapper}>
      <Button
        variant="ghost"
        onClick={onClick}
        className={stylesClose}
        {...props}
      >
        <ControlsClose className="size-svg-2" />
      </Button>
    </div>
  );
};

Alert.Close.displayName = "Alert.Close";
