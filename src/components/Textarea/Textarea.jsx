import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

export const TextArea = ({ error, readOnly, className, ...props }) => {
  // Conditional styling for container div
  const styleDiv = cn(
    // Base styles
    "transition ease-in-out duration-200 border rounded-md has-[:disabled]:opacity-[32%]",
    // Variant styles
    error == true ? "border-chiChi" : "border-beerus",
    readOnly && "cursor-not-allowed"
  );

  // Conditional styling for textarea
  const styleTextarea = cn(
    // Base styles
    "transition ease-in-out duration-200",
    "pt-4 pl-4 w-full block text-md bg-gohan placeholder-trunks text-bulma outline-none resize-none rounded-md border-2",
    "hover:border-hover-beerus hover:border-2",
    "focus:border-piccolo focus:border-2",
    "active:border-piccolo active:border-2",
    "disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed",
    "invalid:border-chiChi invalid:border-2",
    // Variant styles
    error == true
      ? "border-chiChi hover:border-chiChi focus:border-chiChi active:border-chiChi"
      : "border-transparent",
    readOnly &&
      "cursor-not-allowed hover:border-transparent active:border-transparent focus:border-transparent"
  );

  // Note: there isn't a way I know of to make this 1px default then 2px onHover or onFocus like the
  // Figma file because of the input/textarea's border padding. So it's either this way (in which it
  // looks just a little shiny at the corners), or make it 2px always (which I might end up doing)
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
