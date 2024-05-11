import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

export const Input = ({ size, error, readOnly, type, className, ...props }) => {
  // Conditional styling for container div
  const styleDiv = cn(
    // Base styles
    "transition ease-in-out duration-200",
    "border rounded-md has-[:disabled]:opacity-[32%]",
    // Variant styles
    readOnly &&
      "cursor-not-allowed has-[:focus]:border-main-beerus has-[:active]:border-main-beerus",
    error ? "border-supportive-chiChi-100" : "border-main-beerus"
  );

  // Conditional styling for input
  const styleInput = cva(
    // Base styles
    [
      "transition ease-in-out duration-200",
      "w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma",
      "outline-none resize-none rounded-md border-2",
      "hover:border-hover-main-beerus hover:border-2",
      "focus:border-main-piccolo focus:border-2",
      "active:border-main-piccolo active:border-2",
      "disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed",
      "invalid:border-supportive-chiChi-100 invalid:border-2",
    ],
    // Variant styles
    {
      variants: {
        size: {
          sm: "h-8 py-1 px-2",
          md: "h-10 px-3 py-2",
          lg: "h-12 p-3",
          xl: "h-14 p-4",
        },
        readOnly: {
          true: "cursor-not-allowed hover:border-transparent active:border-transparent focus:border-transparent",
        },
        error: {
          true: "border-supportive-chiChi-100 border-2 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100",
          false: "border-transparent",
        },
      },
    }
  );

  // Default placeholders for some input types
  const types = {
    number: "e.g. 12345",
    date: "mm/dd/yyyy",
    time: "--:-- --",
    "datetime-local": "mm/dd/yyyy --:-- --",
    email: "e.g. john.doe@domain.co",
    password: "Password",
    search: "e.g. Search something",
    tel: "e.g. +372 123 4567",
    url: "e.g. https://domain.com",
    text: "Placeholder text",
  };
  let placeHolder = types[type] || "";

  // Note: there isn't a way I know of to make this 1px default then 2px onHover or onFocus like the 
  // Figma file because of the input/textarea's border padding. So it's either this way (in which it 
  // looks just a little shiny at the corners), or make it 2px always (which I might end up doing)
  return (
    <div className={cn(styleDiv)}>
      <input
        readOnly={readOnly}
        className={cn(styleInput({ size, error, readOnly }), className)}
        placeholder={placeHolder}
        type={type}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  size: "md",
  error: false,
  type: "text",
};
