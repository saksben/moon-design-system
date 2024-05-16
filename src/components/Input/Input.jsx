import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

export const Input = ({
  size,
  error,
  fade,
  readOnly,
  disabled,
  type,
  children,
  className,
  ...props
}) => {
  // Conditional styling for container div
  const styleDiv = cva(
    // Base styles
    [
      "transition-all ease-in-out duration-200",
      "border-2 rounded-md has-[:disabled]:opacity-[32%]",
      "has-[:hover]:border-hover-beerus",
      "has-[:focus]:border-piccolo",
      "has-[:disabled]:hover:border-beerus has-[:disabled]:focus:border-beerus has-[:disabled]:cursor-not-allowed",
      // Variant styles
      readOnly &&
        "cursor-not-allowed has-[:hover]:border-beerus has-[:focus]:border-beerus has-[:active]:border-beerus",
      error
        ? "border-chiChi has-[:hover]:border-chiChi has-[:focus]:border-chiChi has-[:active]:border-chiChi"
        : "border-beerus",
        !readOnly && !disabled && "hover:cursor-text",
        !error && !readOnly && !disabled && "has-[:focus]:hover:border-piccolo",
    ],
    {
      variants: {
        size: {
          sm: "py-1 px-2",
          md: "px-3 py-2",
          lg: "p-3",
        },
      },
    }
  );

  // Style for fade-in when input is an InsetInput (for floating label)
  const styleFade = cn([
    fade &&
      !readOnly &&
      !disabled &&
      type !== "date" &&
      type !== "time" &&
      type !== "datetime-local" &&
      "transition-all delay-100 duration-200 opacity-0 has-[:focus]:opacity-100",
  ]);

  // Conditional styling for input
  const styleInput = cn(
    // Base styles
    [
      "transition-all ease-in-out duration-200",
      "w-full h-[100%] text-md bg-gohan placeholder-trunks text-bulma",
      "outline-none",
      "disabled:cursor-not-allowed",
      readOnly && "cursor-not-allowed",
    ]
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
  // Figma file because of the input/textarea's border padding. So it's either style on input (in which it
  // looks just a little shiny at the corners), or make it 2px always like it is now. Group component only works with the latter
  return (
    <label>
      <div className={cn(styleDiv({ size }), className)}>
        <div className={styleFade}>
          <input
            style={{ width: "100%" }}
            readOnly={readOnly}
            disabled={disabled}
            className={cn(styleInput, "input")}
            placeholder={placeHolder}
            type={type}
            {...props}
          />
        </div>
        {children}
      </div>
    </label>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  fade: PropTypes.bool,
  className: PropTypes.string,
};

Input.defaultProps = {
  size: "md",
  error: false,
  type: "text",
  fade: false,
};
