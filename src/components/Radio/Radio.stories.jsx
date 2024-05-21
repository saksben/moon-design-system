import { Radio } from "./Radio";
import React, { useState } from "react";

export default {
  title: "Core/Radio",
  component: Radio,
};

export const Default = ({ ...args }) => {
  const [value, setValue] = useState("");
  return (
    <Radio value={value} onChange={setValue} {...args}>
      <Radio.Option value="option1" {...args}>
        <Radio.Indicator {...args} />
      </Radio.Option>
      <Radio.Option value="option2" {...args}>
        <Radio.Indicator {...args} />
      </Radio.Option>
    </Radio>
  );
};

export const Uncontrolled = ({ ...args }) => {
  return (
    <Radio defaultValue="option2" {...args}>
      <Radio.Option value="option1" {...args}>
        <Radio.Indicator {...args} />
        Option 1
      </Radio.Option>
      <Radio.Option value="option2" {...args}>
        <Radio.Indicator {...args} />
        Option 2
      </Radio.Option>
    </Radio>
  );
};

export const Disabled = ({...args}) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className='flex gap-4'>
      <Radio value={value1} onChange={setValue1}>
        <Radio.Option value="option1">
          <Radio.Indicator />
          Option 1
        </Radio.Option>
        <Radio.Option value="option2">
          <Radio.Indicator />
          Option 2
        </Radio.Option>
        <Radio.Option value="option3" disabled>
          <Radio.Indicator />
          Option 3
        </Radio.Option>
      </Radio>

      <Radio value={value2} onChange={setValue2} disabled>
        <Radio.Option value="option1">
          <Radio.Indicator />
          Option 1
        </Radio.Option>
        <Radio.Option value="option2">
          <Radio.Indicator />
          Option 2
        </Radio.Option>
        <Radio.Option value="option3">
          <Radio.Indicator />
          Option 3
        </Radio.Option>
      </Radio>
    </div>
  );
}

export const Customization = ({ ...args }) => {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  return (
    <div className="flex flex-col gap-6 items-center">
      <Radio value={value1} onChange={setValue1} {...args}>
        <Radio.Option
          value="option1"
          className="w-48 p-2 justify-between hover:bg-hover-gohan transition-colors rounded-md"
          {...args}
        >
          Customized Option 1
          <Radio.Indicator {...args} />
        </Radio.Option>
        <Radio.Option
          value="option2"
          className="w-48 p-2 justify-between hover:bg-hover-gohan transition-colors rounded-md"
          {...args}
        >
          Customized Option 2
          <Radio.Indicator {...args} />
        </Radio.Option>
      </Radio>

      <Radio value={value2} onChange={setValue2} {...args}>
        <Radio.Option value="option1" {...args}>
          <Radio.Indicator className="border-chichi" {...args} />
          Customized Indicator 1
        </Radio.Option>
        <Radio.Option value="option2" {...args}>
          {/* To manipulate checked data attribute, need to use data-[checked] instead of just "checked:" */}
          <Radio.Indicator className="data-[checked]:border-nappa after:bg-nappa" />
          Customized Indicator 2
        </Radio.Option>
      </Radio>

      <Radio
        value={value3}
        onChange={setValue3}
        className="flex gap-4"
        {...args}
      >
        <Radio.Option value="option1" {...args}>
          <Radio.Indicator {...args} />
          Horizontal Option 1
        </Radio.Option>
        <Radio.Option value="option2" {...args}>
          <Radio.Indicator />
          Horizontal Option 2
        </Radio.Option>
      </Radio>

      <Radio
        value={value4}
        onChange={setValue4}
        className="flex gap-4"
        {...args}
      >
        <Radio.Option
          value="option1"
          className="flex flex-col items-center gap-0"
          {...args}
        >
          Top Label Option 1
          <Radio.Indicator />
        </Radio.Option>
        <Radio.Option
          value="option2"
          className="flex flex-col items-center gap-0"
          {...args}
        >
          Top Label Option 2
          <Radio.Indicator {...args} />
        </Radio.Option>
      </Radio>
    </div>
  );
};
