import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

export const TextArea = ({
  error,
  disabled,
  readOnly,
  className,
  ...props
}) => {
  // Conditional styling for container div
  const styleDiv = cn([
    // Base styles
    "transition-all ease-in-out duration-200",
    "border-2 rounded-md has-[:disabled]:opacity-[32%] py-2 pt-4 px-2 pl-4",
    "has-[:focus]:border-piccolo",
    "has-[:hover]:border-hover-beerus",
    "has-[:disabled]:hover:border-beerus has-[:disabled]:focus:border-beerus has-[:disabled]:cursor-not-allowed",
    // Variant styles
    readOnly &&
      "cursor-not-allowed has-[:hover]:border-beerus has-[:focus]:border-beerus has-[:active]:border-beerus",
    error
      ? "border-chiChi has-[:hover]:border-chiChi has-[:focus]:border-chiChi has-[:active]:border-chiChi"
      : "border-beerus",
    !readOnly && !disabled && "hover:cursor-text",
    !error && !readOnly && !disabled && "has-[:focus]:hover:border-piccolo",
  ]);

  // Conditional styling for textarea
  const styleTextarea = cn(
    // Base styles
    "transition ease-in-out duration-200",
    " w-full block text-md bg-gohan placeholder-trunks text-bulma outline-none resize-none",
    "disabled:cursor-not-allowed",
    readOnly && "cursor-not-allowed"
  );

  // Note: there isn't a way I know of to make this 1px default then 2px onHover or onFocus like the
  // Figma file because of the input/textarea's border padding. So it's either style on input (in which it
  // looks just a little shiny at the corners), or make it 2px always like it is now. Group component only works with the latter
  return (
    <>
      <label>
        <div className={cn(styleDiv)}>
          <textarea
            disabled={disabled}
            readOnly={readOnly}
            className={cn(styleTextarea, className)}
            {...props}
          />
        </div>
      </label>
    </>
  );
};

TextArea.propTypes = {
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  error: false,
};
