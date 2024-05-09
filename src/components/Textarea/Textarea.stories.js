import { TextArea } from "./Textarea";

export default {
  title: "Core/Textarea",
  component: TextArea,
};

export const Default = {
  args: {},
};

export const Placeholder = {
  name: "Default with Placeholder",
  args: {
    placeholder: "Here is a sample placeholder",
    type: "text",
  },
};

export const Error = {
  args: {
    error: true,
    placeholder: "Error",
  },
};

export const readOnly = {
  name: "Read Only",
  args: {
    readOnly: true,
    placeholder: "Read only text",
  },
};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};