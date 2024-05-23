import { NativeSelect } from "./NativeSelect";
import { Hint } from "../Hint/Hint";
import {Label} from "../Label/Label"
import GenericInfo from "../../assets/icons/components/GenericInfo"

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
    <div className="w-full">
      <Label htmlFor="err-1">Error</Label>
      <NativeSelect id="err-1" data-testid="err-1" error>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
    </div>
  );
};

export const ReadOnly = ({ ...args }) => {
  return (
    <div className="w-full">
      <Label htmlFor="ro-1">Read only text</Label>
      <NativeSelect id="ro-1" data-testid="ro-1" readOnly>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
      <Hint>Informative message holder</Hint>
    </div>
  );
};

export const Disabled = ({ ...args }) => {
  return (
    <div className="w-full">
      <Label htmlFor="dis-1" disabled>
        Disabled
      </Label>
      <NativeSelect id="dis-1" data-testid="dis-1" disabled>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
      <Hint disabled>Informative message holder</Hint>
    </div>
  );
};
