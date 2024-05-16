import { InsetInput } from "./InsetInput";

export default {
  title: "Core/InsetInput",
  component: InsetInput,
};

export const Default = {
  render: (args) => (
    <InsetInput placeholder="Placeholder" {...args}>
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
      <div className="flex flex-col lg:flex-row justify-around items-start w-full gap-2">
        <InsetInput type="number" placeholder="e.g. 12345" {...args}>
          <InsetInput.Label>Number</InsetInput.Label>
        </InsetInput>
        <InsetInput type="date" aria-label="date" {...args}>
          <InsetInput.Label>Date</InsetInput.Label>
        </InsetInput>
        <InsetInput type="time" aria-label="time" {...args}>
          <InsetInput.Label>Time</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-start w-full gap-2">
        <InsetInput type="datetime-local" aria-label="datetime-local" {...args}>
          <InsetInput.Label>Datetime local</InsetInput.Label>
        </InsetInput>
        <InsetInput type="email" placeholder="e.g. john.doe@domain.com" {...args}>
          <InsetInput.Label>Email</InsetInput.Label>
        </InsetInput>
        <InsetInput type="password" placeholder="Password" {...args}>
          <InsetInput.Label>Password</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-start w-full gap-2">
        <InsetInput type="search" placeholder="e.g. Search something" {...args}>
          <InsetInput.Label>Search</InsetInput.Label>
        </InsetInput>
        <InsetInput type="tel" placeholder="e.g. +372 123 4567" {...args}>
          <InsetInput.Label>Tel</InsetInput.Label>
        </InsetInput>
        <InsetInput type="url" placeholder="e.g. https://domain.com" {...args}>
          <InsetInput.Label>Url</InsetInput.Label>
        </InsetInput>
      </div>
    </>
  ),
};
