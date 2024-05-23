import { NativeSelect } from "./NativeSelect";

export default {
  title: "Core/NativeSelect",
  component: NativeSelect,
};

export const Default = ({ ...args }) => {
  return (
    <>
      <NativeSelect data-testid="select" placeholder="Select one" {...args}>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
    </>
  );
};

export const Error = ({ ...args }) => {
  return (
    <>
      <NativeSelect data-testid="select" error {...args}>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
    </>
  );
};

export const ReadOnly = ({ ...args }) => {
  return (
    <>
      <NativeSelect data-testid="select" readOnly {...args}>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
    </>
  );
};

export const Disabled = ({ ...args }) => {
  return (
    <>
      <NativeSelect data-testid="select" disabled {...args}>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
    </>
  );
};
