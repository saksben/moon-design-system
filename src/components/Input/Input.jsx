import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

// TODO: make the change notated below of moving the styles to the outer div and making it all 2px so that InsetInput works

export const Input = ({
  size,
  error,
  fade,
  readOnly,
  type,
  children,
  className,
  ...props
}) => {
  // Conditional styling for container div
  const styleDiv = cn(
    // Base styles
    "transition ease-in-out duration-200",
    "border rounded-md has-[:disabled]:opacity-[32%]",
    // Variant styles
    readOnly &&
      "cursor-not-allowed has-[:focus]:border-beerus has-[:active]:border-beerus",
    error ? "border-chiChi" : "border-beerus"
  );

  // Style for fade-in when input is an InsetInput (for floating label)
  const styleFade = cn(
    fade &&
      !readOnly &&
      type !== "date" &&
      type !== "time" &&
      type !== "datetime-local" &&
      "transition-all delay-100 duration-200 opacity-0 has-[:focus]:opacity-100"
  );

  // Conditional styling for input
  const styleInput = cva(
    // Base styles
    [
      "transition-all ease-in-out duration-200",
      "w-full block text-md bg-gohan placeholder-trunks text-bulma",
      "outline-none rounded-md border-2",
      "hover:border-hover-beerus hover:border-2",
      "focus:border-piccolo focus:border-2",
      "active:border-piccolo active:border-2",
      "disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed",
      "invalid:border-chiChi invalid:border-2",
    ],
    // Variant styles
    {
      variants: {
        size: {
          sm: "h-8 py-1 px-2",
          md: "h-10 px-3 py-2",
          lg: "h-12 p-3",
        },
        readOnly: {
          true: "cursor-not-allowed hover:border-transparent active:border-transparent focus:border-transparent",
        },
        error: {
          true: "border-chiChi border-2 hover:border-chiChi focus:border-chiChi active:border-chiChi",
          false: "border-transparent",
        },
      },
    }
  );

  // Default placeholders for some input types
  const types = {
    number: "e.g. 12345",
    date: "",
    time: "",
    "datetime-local": "",
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
      <div className={styleFade}>
        <input
          readOnly={readOnly}
          className={cn(
            styleInput({ size, error, readOnly }),
            className,
            "input"
          )}
          placeholder={placeHolder}
          type={type}
          {...props}
        />
      </div>
      {children}
    </div>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
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
  fade: false,
};
