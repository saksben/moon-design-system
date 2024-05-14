import { NativeSelect } from "./NativeSelect";

export default {
  title: "Core/NativeSelect",
  component: NativeSelect,
};

export const Default = () => {
  return (
    <NativeSelect>
      <option value="Italy">Italy</option>
      <option value="Spain">Spain</option>
      <option value="China">China</option>
      <option value="Germany">Germany</option>
    </NativeSelect>
  );
};
