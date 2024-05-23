import { InsetNativeSelect } from "./InsetNativeSelect";
import { Hint } from "../Hint/Hint";
import GenericInfo from "../../assets/icons/components/GenericInfo";

export default {
  title: "Core/InsetNativeSelect",
  component: InsetNativeSelect,
};

export const Default = ({ ...args }) => {
  return (
    <>
      <InsetNativeSelect
        label="Country / Region"
        placeholder="Select One"
        data-testid="select"
        {...args}
      >
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </InsetNativeSelect>
    </>
  );
};

export const Error = ({ ...args }) => {
  return (
    <div className="w-full">
      <InsetNativeSelect
        label="Error"
        id="err-1"
        data-testid="err-1"
        error
        {...args}
      >
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </InsetNativeSelect>
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
        <InsetNativeSelect
          label="Read only"
          id="ro-1"
          data-testid="ro-1"
          readOnly
          { ...args }
        >
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="China">China</option>
          <option value="Germany">Germany</option>
        </InsetNativeSelect>
        <Hint>Informative message holder</Hint>
      </div>
    );
  };

  export const Disabled = ({...args}) => {
    return (
        <div className="w-full">
      <InsetNativeSelect
        label="Disabled"
        id="dis-1"
        data-testid="dis-1"
        disabled
        {...args}
      >
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </InsetNativeSelect>
      <Hint disabled>Informative message holder</Hint>
    </div>
    )
  }