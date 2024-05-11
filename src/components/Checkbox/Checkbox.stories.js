import { Checkbox } from "./Checkbox";

export default {
  title: "Core/Checkbox",
  component: Checkbox,
};

export const Default = {};

export const Indeterminate = {
  args: {
    indeterminate: true,
  },
};

export const Checked = {
  name: "Checked By Default",
  args: {
    checked: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const ReadOnly = {
  name: "Read Only",
  args: {
    readOnly: true,
  },
};
