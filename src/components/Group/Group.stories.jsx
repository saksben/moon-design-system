import { Group } from "./Group";

export default {
  title: "Core/Group",
  component: Group,
};

export const Default = {
  render: (args) => (
    <Group {...args}>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
  ),
};

export const Direction = {
  render: (args) => (
    <div
      className="flex flex-col xl:flex-row gap-6 justify-center items-center"
      {...args}
    >
      <Group>
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Group orientation="horizontal">
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
    </div>
  ),
};

export const DifferentOptions = {
  render: (args) => (
    <div className="flex flex-col xl:flex-row gap-6 justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-justify">
        <Group orientation="horizontal" {...args}>
          <Group.FirstInput placeholder="First input" />
          <Group.LastInput placeholder="Last input" />
        </Group>
        {/* <Group orientation="horizontal" {...args}>
          <Group.FirstInput placeholder="First input" />
          <Group.LastSelect>
            <option value="">Last select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Group.LastSelect>
        </Group> */}
        {/* <Group orientation="horizontal" {...args}> 
          <Group.FirstSelect>
            <option value="">First select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Group.FirstSelect>
          <Group.LastInput placeholder="Last input" />
        </Group> */}
        {/* <Group orientation="horizontal" {...args}>
          <Group.FirstSelect>
            <option value="">First select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Group.FirstSelect>
          <Group.LastSelect>
            <option value="">Last select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Group.LastSelect>
        </Group> */}
      </div>
      <div className="flex flex-col gap-6 justify-center items-justify">
        <Group orientation="horizontal" {...args}>
          <Group.FirstInsetInput placeholder="First inset input" />
          <Group.LastInsetInput placeholder="Last inset input" />
        </Group>
        {/* <Group orientation="horizontal" {...args}>
          <Group.FirstInsetInput placeholder="First inset input" />
          <Group.LastInsetSelect label="Last inset select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Group.LastInsetSelect>
        </Group> */}
        {/* <Group orientation="horizontal" {...args}>
          <Group.FirstInsetSelect label="First inset select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Group.FirstInsetSelect>
          <Group.LastInsetInput placeholder="Last inset input" />
        </Group> */}
        {/* <Group orientation="horizontal" {...args}>
          <Group.FirstInsetSelect label="First inset select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Group.FirstInsetSelect>
          <Group.LastInsetSelect label="Last inset select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Group.LastInsetSelect>
        </Group> */}
      </div>
    </div>
  ),
};

export const Sizes = {
  render: (args) => (
    <div className="flex flex-col xl:flex-row gap-6 justify-center items-center">
      <Group size="sm" {...args}>
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Group {...args}>
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Group size="lg" {...args}>
        <Group.FirstInput placeholder="First input" />
        <Group.LastInput placeholder="Last input" />
      </Group>
      <Group {...args}>
        <Group.FirstInsetInput placeholder="First inset input" />
        <Group.LastInsetInput placeholder="Last inset input" />
      </Group>
    </div>
  ),
};

export const Error = {
  render: (args) => (
    <Group error {...args}>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
  ),
};

export const ReadOnly = {
  render: (args) => (
    <Group readOnly {...args}>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
  ),
};

export const Disabled = {
  render: (args) => (
    <Group disabled {...args}>
      <Group.FirstInput placeholder="First input" />
      <Group.LastInput placeholder="Last input" />
    </Group>
  ),
};
