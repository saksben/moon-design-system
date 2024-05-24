import React from "react";
import PropTypes from "prop-types";
import * as RadAccordion from "@radix-ui/react-accordion";
import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

// To style the button when open (rotate, color), target the "svg" class (added to the icon) and then target Radix.ui's state data-attribute
// defaultValue only works when singleOpen is true.

const AccordionContext = React.createContext([null]);

// Root component
export const Accordion = ({
  itemSize,
  singleOpen,
  className,
  ...props
}) => {
  // Styles for Root
  const stylesRoot = cn("text-bulma gap-2 flex flex-col");

  // Converts {singleOpen} into Radix's {type}
  const radType = singleOpen ? "single" : "multiple";

  return (
    <AccordionContext.Provider value={[itemSize]}>
      <RadAccordion.Root
        type={radType}
        collapsible
        className={cn(stylesRoot, className)}
        {...props}
      >
      </RadAccordion.Root>
    </AccordionContext.Provider>
  );
};

Accordion.displayName = "Accordion";

Accordion.propTypes = {
  itemSize: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  singleOpen: PropTypes.bool,
  defaultValue: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onValueChange: PropTypes.func,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  itemSize: "md",
  singleOpen: false,
};

// Item component
Accordion.Item = ({ className, disabled, ...props }) => {
  // Styles for Item
  const stylesItem = cn(
    "border border-beerus rounded-md bg-goku",
    disabled && "pointer-events-none opacity-[0.32]"
  )

  return (
    <>
      <div className={cn(disabled && "cursor-not-allowed")}>
        <RadAccordion.Item
          className={cn(stylesItem, className)}
          disabled={disabled}
          {...props}
        ></RadAccordion.Item>
      </div>
    </>
  );
};

Accordion.Item.displayName = "Accordion.Item";

Accordion.Item.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Accordion.Item.defaultProps = {
  disabed: false,
};

// Header component
Accordion.Header = ({ className, ...props }) => {

  // Styles for Header
  // Includes custom style in tailwind.css for rotating the dropdown icon
  const stylesHeader = cn("accordion-header")

  return (
    <>
      <RadAccordion.Header
        className={cn(stylesHeader, className)}
        {...props}
      ></RadAccordion.Header>
    </>
  );
};

Accordion.Header.displayName = "Accordion.Header";

Accordion.Header.propTypes = {
  className: PropTypes.string,
};

// Content component
Accordion.Content = ({ className, ...props }) => {

  // Styles for Content
  const stylesContent = cn("p-2 pt-3 text-sm border-t border-beerus");
  return (
    <>
      <RadAccordion.Content
        className={cn(stylesContent, className)}
        {...props}
      ></RadAccordion.Content>
    </>
  );
};

Accordion.Content.displayName = "Accordion.Content";

Accordion.Content.propTypes = {
  className: PropTypes.string,
};

// Button component
Accordion.Button = ({ className, ...props }) => {
  const [itemSize] = React.useContext(AccordionContext);

  // Styles for Button
  const stylesButton = cva(cn("flex w-full justify-between text-start items-center font-bold text-bulma"), {
    variants: {
      itemSize: {
        sm: "p-2 gap-2 text-xs",
        md: "p-2 pl-3 gap-4 text-sm",
        lg: "p-3 gap-3 text-sm",
        xl: "p-4 gap-4 text-md",
      },
    },
  });

  return (
    <>
      <RadAccordion.Trigger
        className={cn(stylesButton({ itemSize }), className)}
        {...props}
      ></RadAccordion.Trigger>
    </>
  );
};

Accordion.Button.displayName = "Accordion.Button";

Accordion.Button.propTypes = {
  className: PropTypes.string,
};
