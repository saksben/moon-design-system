import { Input } from "./Input";

export default {
  title: "Core/Input",
  component: Input,
};

export const Default = {
  args: {
    type: "",
  },
};

export const Placeholder = {
  name: "Default with Placeholder",
  args: {
    placeholder: "Default with placeholder",
  },
};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};

export const readOnly = {
  name: "Read Only",
  args: {
    readOnly: true,
    placeholder: "Read only text",
  },
};
export const Error = {
  args: {
    error: true,
    placeholder: "Error",
  },
};
