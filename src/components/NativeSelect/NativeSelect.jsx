import React from "react";
import PropTypes from "prop-types";
import { Input } from "../Input/Input";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import GenericCheckAlternative from "../../assets/icons/components/GenericCheckAlternative";

// Will need to return to this after the Dropdown component, because of the option background customization.
// Note the way that Headless UI below takes care of the icon problem (using a dark bg): take off the select's default arrow, position your icon absolutely on the select, and remove pointer events so that you're clicking the select underneath

export const NativeSelect = () => {

  return (
    <>
      <div className="w-full max-w-md px-4">
        <div className="relative">
          <select
            className={cn(
              "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </select>
          <GenericCheckAlternative className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60" />
        </div>
      </div>
    </>
  );
};

NativeSelect.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

NativeSelect.defaultProps = {
  size: "md",
};

// select element with options inside

// STATES (all are props)
// hover
// focus
// active
// disabled
// error
// readOnly

// OTHER PROPS
// size
// placeholder
// ?id

// CUSTOMIZATION
// .select class
// .svg class (any svg)
// label color
// placeholder color
// input color
// border color
// swappable leading element
