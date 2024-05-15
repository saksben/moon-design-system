import { InsetInput } from "./InsetInput";

export default {
  title: "Core/InsetInput",
  component: InsetInput,
};

export const Default = {
  render: (args) => (
    <InsetInput {...args} >
      <InsetInput.Label>Label</InsetInput.Label>
    </InsetInput>
  ),
};

export const Error = {
  render: (args) => (
    <InsetInput placeholder="Placeholder" error {...args}>
      <InsetInput.Label>Label</InsetInput.Label>
    </InsetInput>
  ),
};

export const ReadOnly = {
  render: (args) => (
    <InsetInput
      value="Read Only Text"
      readOnly
      placeholder="Placeholder"
      {...args}
    >
      <InsetInput.Label>Label</InsetInput.Label>
    </InsetInput>
  ),
};

export const Disabled = {
  render: (args) => (
    <InsetInput placeholder="Placeholder" disabled {...args}>
      <InsetInput.Label>Label</InsetInput.Label>
    </InsetInput>
  ),
};

export const InputTypes = {
  render: (args) => (
    <>
      <div className="flex gap-2">
        <InsetInput type='number' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
        <InsetInput type='date' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
        <InsetInput type='time' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
      </div>
      <div className="flex gap-2">
        <InsetInput type='datetime-local' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
        <InsetInput type='email' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
        <InsetInput type='password' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
      </div>
      <div className="flex gap-2">
        <InsetInput type='search' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
        <InsetInput type='tel' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
        <InsetInput type='url' {...args}>
          <InsetInput.Label></InsetInput.Label>
        </InsetInput>
      </div>
    </>
  ),
};
