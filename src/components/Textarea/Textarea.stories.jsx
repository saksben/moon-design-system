import { TextArea } from "./Textarea";

export default {
  title: "Core/Textarea",
  component: TextArea,
};

export const Default = {
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const readOnly = {
  name: "Read Only",
  args: {
    readOnly: true,
  },
};
export const Error = {
  args: {
    error: true,
  },
};
