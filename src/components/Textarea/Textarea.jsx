import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

export const TextArea = ({ error, readOnly, className, ...props }) => {
  // Conditional styling for container div
  const styleDiv = cn(
    // Base styles
    "transition ease-in-out duration-200 border rounded-md has-[:disabled]:opacity-[32%]",
    // Variant styles
    error == true ? "border-supportive-chiChi-100" : "border-main-beerus",
    readOnly && "cursor-not-allowed"
  );

  // Conditional styling for textarea
  const styleTextarea = cn(
    // Base styles
    "transition ease-in-out duration-200",
    "pt-4 pl-4 w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma outline-none resize-none rounded-md border-2",
    "hover:border-hover-main-beerus hover:border-2",
    "focus:border-main-piccolo focus:border-2",
    "active:border-main-piccolo active:border-2",
    "disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed",
    "invalid:border-supportive-chiChi-100 invalid:border-2",
    // Variant styles
    error == true
      ? "border-supportive-chiChi-100 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100"
      : "border-transparent",
    readOnly &&
      "cursor-not-allowed hover:border-transparent active:border-transparent focus:border-transparent"
  );

  return (
    <>
      <div className={cn(styleDiv)}>
        <textarea
          readOnly={readOnly}
          className={cn(styleTextarea, className)}
          {...props}
        />
      </div>
    </>
  );
};

TextArea.propTypes = {
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  error: false,
};
