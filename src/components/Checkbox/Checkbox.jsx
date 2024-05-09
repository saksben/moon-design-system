import React from "react";
import * as RadCheckbox from "@radix-ui/react-checkbox";
import { DividerHorizontalIcon, CheckIcon } from "@radix-ui/react-icons";

export const Checkbox = () => {
  const [checked, setChecked] = React.useState("indeterminate");
  return (
    <>
      <RadCheckbox.Root
        checked={checked}
        onCheckedChange={setChecked}
        className="bg-main-piccolo"
      >
        <RadCheckbox.Indicator>
          {checked === "indeterminate" && <DividerHorizontalIcon />}
          {checked === true && <CheckIcon />}
        </RadCheckbox.Indicator>
      </RadCheckbox.Root>

      <button
        type="button"
        onClick={() =>
          setChecked((prevIsChecked) =>
            prevIsChecked === "indeterminate" ? false : "indeterminate"
          )
        }
      >
        Toggle indeterminate
      </button>
    </>
  );
};

// PROPS:
// label = <label className=${labelStyles} htmlFor={id}>{label}</label>
// id = id={id}
// checked=checked
// onClick=onCheckedChange? ={setChecked} if using state, maybe doesn't need state?
// disabled=disabled
// readOnly = readOnly styling
// indeterminate = use state and setChecked to 'indeterminate'
// bgColor = add to className or style