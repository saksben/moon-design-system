import { fn } from '@storybook/test';
import OtherFrame from "../../assets/icons/components/OtherFrame";
import { Button } from "./Button";

export default {
  title: "Core/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    children: "Button",
  },
};

export const Outline = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const FullWidth = {
  args: {
    children: "Full Width",
    fullWidth: true,
  },
};

export const IconLeft = {
  args: {
    children: "IconLeft",
    iconLeft: <OtherFrame />,
  },
};

export const IconRight = {
  args: {
    children: "IconRight",
    iconRight: <OtherFrame />,
  },
};

export const Link = {
  args: {
    children: "www.saksben.com",
    as: "a",
    href: "https://www.saksben.com",
    target: "_blank",
  },
};

export const MultiLine = () => (
  <Button size="xl" className="py-3">
    <span className="flex flex-col gap-1">
      <span className="leading-none">Button text</span>
      <span className="text-[9px] font-normal leading-[12px]">
        Placeholder text
      </span>
    </span>
  </Button>
)

export const Progress = {
  name: "Animation: Progress",
  args: {
    animation: 'progress'
  }
}

export const Success = {
  name: "Animation: Success",
  args: {
    animation: 'success'
  }
}

export const Error = {
  name: "Animation: Error",
  args: {
    children: "Error",
    animation: "error",
  },
};

export const Pulse = {
  name: "Animation: Pulse",
  args: {
    children: "Pulse",
    animation: "pulse"
  }
};
