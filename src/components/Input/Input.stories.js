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

export const Error = {
  args: {
    error: true,
    placeholder: "Error",
  },
};

export const ReadOnly = {
  args: {
    readOnly: true,
    placeholder: "Placeholder",
    value: 'Read only text'
  },
};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};